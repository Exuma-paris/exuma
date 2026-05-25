---
name: publish
description: Publish content changes from the Exuma site (Next.js, French content) to production via a guided push → preview → merge flow. Use when the user says "publie", "publish", "mets en ligne", "déploie", "/publish", or asks how to put their changes online. Three sub-commands: `/publish` previews the current branch on Vercel and returns the URL, `/publish merge` ships the previewed PR to production, `/publish status` re-fetches the preview URL. Designed for non-technical French-speaking writers who never touch git/GitHub directly. Auto-handles uncommitted changes, accidental on-main edits, em-dash style violations, branch conflicts, and Vercel polling.
metadata:
  short-description: Push the current branch, open or update a PR, surface the Vercel preview URL, then self-merge to main on confirmation
---

# Publish

Wraps the entire push → preview → merge cycle behind one French-facing command so non-technical content writers can ship without ever touching git, GitHub, or a terminal.

**Design principle: ease over safety.** The writer can edit anything in the repo. The only hard safety net is "Vercel preview must build green before merging." Everything else (uncommitted changes, em-dashes, accidental on-main edits, conflicts) is auto-handled silently or with a one-line French notice. Mistakes are recoverable via `git revert`; friction kills adoption.

Always respond in French. Never propose raw `git` or `gh` commands to the user — run them yourself and surface only what the writer needs to see (URLs, decisions).

---

## Sub-command dispatch

Parse the user's message:

| User says                                            | Sub-command       |
|------------------------------------------------------|-------------------|
| `/publish`, `publie`, `mets en ligne`, `déploie`     | **preview**       |
| `/publish merge`, `merge`, `valide la publication`   | **merge**         |
| `/publish status`, `quel est le lien d'aperçu`       | **status**        |

If ambiguous, default to **preview** (it's idempotent — re-running is safe).

---

## Sub-command: PREVIEW (`/publish`)

### Step 1. On-main auto-rescue (never lose writer work, never block)

Run `git rev-parse --abbrev-ref HEAD` to find the current branch.

If it's `main`:

1. Check for any local work: `git status --porcelain` (uncommitted) and `git log origin/main..HEAD --oneline` (unpushed commits).
2. **Nothing at all** → reply in French: *"Rien à publier. Vos modifications ont déjà été mises en ligne, ou vous n'avez pas encore commencé à modifier le site."* Stop.
3. **Anything (uncommitted, staged, or unpushed commits)** → rescue:
   - Generate a branch name: `content/auto-$(date +%Y-%m-%d-%H%M)`
   - `git switch -c <branch-name>` (carries all uncommitted/staged/committed work onto the new branch)
   - `git branch -f main origin/main` (resets the local `main` ref to match `origin/main`; does not touch the new branch's working tree)
   - Reply in French, one line: *"J'ai déplacé vos modifications sur une nouvelle branche pour pouvoir les publier."*
   - Continue with step 2.

If the current branch is not `main`, skip the rescue and continue.

### Step 2. Auto-commit any uncommitted changes

Run `git status --porcelain`. If non-empty:

1. Run `git diff` (and `git diff --staged` if staged changes exist) to read the changes.
2. Generate a short French commit message from the diff. Style: one line, ≤ 70 chars, present tense imperative or factual (e.g. *"ajoute la section gastronomie sur Rome"*, *"met à jour le blurb du Brando"*, *"corrige une typo sur la page Marrakech"*). If multiple unrelated changes, use the most prominent one and don't try to enumerate.
3. `git add -A` then `git commit -m "<message>"`.

Skip if working tree is already clean.

### Step 3. Auto-strip em-dashes in changed content files

The project's `.claude/STYLE.md` bans em-dashes (`—`, U+2014) in all body copy. Auto-fix silently rather than refusing:

1. List changed files: `git diff --name-only origin/main...HEAD` plus any tracked-but-modified-now files.
2. Filter to files matching `src/content/**/*.tsx`.
3. For each such file, read it and replace em-dashes in **string literals only** (between `"` or `` ` ``), not in code/JSX structure. Context-pick the replacement per `.claude/STYLE.md` § 1: comma for a light pause, period for a sentence break, colon to introduce a list, or strip+space when redundant.
4. If any file was changed by the strip, `git add` the affected files and `git commit -m "supprime les tirets cadratins"` as a follow-up commit. Mention briefly in French: *"J'ai retiré quelques tirets cadratins pour respecter le style éditorial."*

If no em-dashes found, skip silently.

### Step 4. Push the branch

```bash
git push -u origin HEAD
```

If the push fails (network, auth), surface the raw error in French context: *"La publication a échoué côté GitHub : <error>. Vérifiez votre connexion ou demandez à Rémi."* and stop.

### Step 5. Open or update the PR

Check if a PR already exists for the current branch:

```bash
gh pr view --json number,url,headRefOid 2>/dev/null
```

- **Exists** → reuse it. Capture the PR number and URL.
- **Doesn't exist** → create one:
  1. Generate a French title from the recent commits on this branch (`git log origin/main..HEAD --oneline`). ≤ 70 chars. E.g. *"Ajoute la destination Saint-Barth"*, *"Met à jour les expériences de Rome"*.
  2. Generate a short French body summarizing what changed, bullet-list style if multiple files.
  3. ```bash
     gh pr create --base main --title "<title>" --body "<body>"
     ```
  4. Capture the new PR number and URL.

### Step 6. Poll Vercel for the preview URL

Get the head SHA: `git rev-parse HEAD`.

Poll the GitHub deployments API for a deployment whose `sha` matches and whose latest status has `environment_url`:

```bash
# Try this every 5s for the first 90s, then every 15s for 4 more min
gh api "repos/RemiBootnow/exuma/deployments?sha=<HEAD_SHA>&per_page=10"
# For each deployment ID returned, check its latest status:
gh api "repos/RemiBootnow/exuma/deployments/<DEPLOYMENT_ID>/statuses" \
  --jq '.[0] | {state, environment_url, log_url}'
```

Look for a deployment status with `state == "success"` and a non-empty `environment_url` — that's the Vercel preview URL. Note: a `state == "in_progress"` deployment is fine to surface its `environment_url` too if present (Vercel often posts the URL before the build finishes), but mark it as still building.

**Implementation:** use `sleep` between polls. The loop should look like:

```bash
for i in {1..18}; do  # 18 × 5s = 90s
  URL=$(gh api "repos/RemiBootnow/exuma/deployments?sha=$SHA&per_page=5" \
        --jq '.[].id' | head -1 | xargs -I{} gh api "repos/RemiBootnow/exuma/deployments/{}/statuses" \
        --jq 'map(select(.environment_url != null)) | .[0].environment_url')
  [ -n "$URL" ] && break
  sleep 5
done
# If still empty, fall back to 4 more min at 15s intervals
```

**Timeout:** after ~5 min total, give up and reply in French: *"Vercel met du temps à générer l'aperçu. Voici le lien de la PR : <PR_URL>. Réessayez `/publish status` dans 2 minutes pour récupérer le lien d'aperçu."* Don't hang the session.

### Step 7. Reply to the writer

Once you have the URL, reply in French. Compact format:

```
✓ Publié pour aperçu

Aperçu : <preview-url>
PR : <pr-url>

Ouvrez le lien d'aperçu pour vérifier vos modifications.
Quand c'est bon, tapez `/publish merge` pour mettre en ligne.
```

If the preview is still building when surfaced, add: *"(L'aperçu est encore en cours de génération, attendez ~1 min avant de cliquer.)"*

---

## Sub-command: MERGE (`/publish merge`)

### Step 1. Identify the target PR

Run `git rev-parse --abbrev-ref HEAD`.

- **On a feature branch** → the target PR is the one for this branch: `gh pr view --json number,url,headRefOid,mergeable,mergeStateStatus,title`.
- **On `main`** → look up the writer's open PRs:
  ```bash
  gh pr list --author "@me" --state open --json number,url,title,headRefOid,mergeable,mergeStateStatus
  ```
  - **Zero results** → reply in French: *"Aucune publication en attente. Lancez d'abord `/publish` sur la branche où vous travaillez."* Stop.
  - **Exactly one** → ask for confirmation in French: *"Vous voulez merger la PR « <title> » ? (oui / non)"*. Wait for the user to say yes.
  - **Multiple** → list them numbered and ask which one. *"Vous avez plusieurs publications en attente. Laquelle voulez-vous merger ?"*

### Step 2. Check Vercel build status — the ONLY hard gate

Get the PR's head SHA. Poll the deployments API (same as preview step 6) for the latest deployment status:

```bash
gh api "repos/RemiBootnow/exuma/deployments?sha=<PR_HEAD_SHA>&per_page=5" \
  --jq '.[].id' | head -1 | xargs -I{} gh api "repos/RemiBootnow/exuma/deployments/{}/statuses" \
  --jq '.[0] | {state, environment_url}'
```

- **`state == "success"`** → proceed to step 3.
- **`state == "failure"` or `"error"`** → **refuse**. Reply in French:
  > *"❌ Impossible de mettre en ligne : la prévisualisation Vercel a échoué.*
  > *Aperçu (en erreur) : <environment_url>*
  > *Logs : <log_url>*
  > *Décrivez-moi le problème ou demandez-moi de regarder, puis relancez `/publish` après correction."*
- **`state == "in_progress"` or `"queued"`** → wait. Poll every 10s for up to 3 min. If still building after that, reply: *"Vercel n'a pas encore fini de construire l'aperçu. Réessayez `/publish merge` dans 1 minute."*
- **No deployment found at all** → reply: *"Aucun aperçu Vercel pour cette PR. Lancez `/publish` d'abord pour déclencher la prévisualisation."*

### Step 3. Check mergeability — auto-rebase on conflict

```bash
gh pr view <PR_NUMBER> --json mergeable,mergeStateStatus
```

- **`mergeable == "MERGEABLE"`** → proceed to step 4.
- **`mergeStateStatus == "DIRTY"`** (conflicts with main) → auto-rebase:
  1. ```bash
     gh pr update-branch <PR_NUMBER>
     ```
  2. Reply in French: *"D'autres modifications ont été publiées entre-temps. Je relance une prévisualisation avec les dernières mises à jour."*
  3. Wait for the new Vercel preview (same poll as preview step 6) on the new head SHA.
  4. Once green, reply: *"Nouvel aperçu : <url>. Vérifiez puis tapez à nouveau `/publish merge`."* **Do NOT auto-merge** — the rebase may have introduced visual differences the writer should re-check.
- **Any other state** (`BLOCKED`, `BEHIND`, `UNKNOWN`) → reply with the state name and a French explanation, point them to the PR URL.

### Step 4. Merge, then delete the remote branch

Two steps, in order:

```bash
gh pr merge <PR_NUMBER> --squash
gh api -X DELETE "repos/RemiBootnow/exuma/git/refs/heads/<BRANCH_NAME>"
```

**Do NOT pass `--delete-branch` to `gh pr merge`.** That flag triggers a local-checkout phase (gh tries to `git checkout main` to delete the local branch) which fails in worktrees where `main` is checked out elsewhere — and the failure aborts the remote-branch delete too, leaving the merged branch lingering on origin. Calling the API delete ourselves bypasses gh's local cleanup entirely.

The merge call is the load-bearing one:
- On 405 (base moved between the mergeability check and the merge call) → loop back to step 3 (auto-rebase). Do NOT attempt the API delete.
- On success → proceed to the API delete.

The API delete is best-effort cleanup:
- On 404 (branch already gone) or 422 (some race) → log silently and proceed to step 5; the merge already succeeded, the leftover branch is cosmetic.
- On success → proceed to step 5.

`<BRANCH_NAME>` is the PR's head branch (`gh pr view <PR_NUMBER> --json headRefName --jq .headRefName`). URL-encode forward slashes if the branch contains them (`content/auto-2026-05-25-1234` → `content%2Fauto-2026-05-25-1234`).

### Step 5. Confirm

Reply in French. Compact:

```
✓ Mis en ligne !

La production se déploie dans ~1 minute.
URL : https://<production-domain>

Vous pouvez fermer cette session ou continuer sur une nouvelle modification.
```

If the production domain isn't known, omit the URL line and just say "La production se déploie dans environ une minute."

---

## Sub-command: STATUS (`/publish status`)

Re-fetch and display the preview URL for the current branch's PR. Used when the writer has lost the URL (closed the tab, came back the next day).

1. Find the PR for the current branch: `gh pr view --json number,url,headRefOid,title`.
   - If on `main` and no current-branch PR exists, fall back to "most recent open PR by current user" (same logic as merge step 1).
   - If nothing found, reply: *"Aucune publication en cours. Lancez `/publish` pour démarrer."*
2. Poll for the Vercel deployment URL on the PR's head SHA (same as preview step 6, but with shorter timeout — 60s total).
3. Reply:
   ```
   PR : <pr-url>
   Aperçu : <preview-url>
   ```
   Or if no preview is up yet: *"L'aperçu est encore en cours de génération. PR : <pr-url>"*.

---

## Failure modes — what to say in French

| Situation                                          | Reply                                                                                                  |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Network/auth error on `git push` or `gh`          | *"Erreur de connexion à GitHub : <message>. Vérifiez votre connexion ou demandez à Rémi."*             |
| `gh` not installed or not authenticated           | *"L'outil GitHub n'est pas installé ou pas connecté. Lancez `gh auth login` ou demandez à Rémi."*      |
| Vercel deployment failed (build error)            | See merge step 2 above.                                                                                |
| PR has unresolved conflicts the auto-rebase can't fix | *"Conflit de fusion impossible à résoudre automatiquement. Demandez à Rémi."*                       |
| Writer interrupted you mid-poll                   | Honour the interruption. Don't re-start the poll automatically; suggest `/publish status` to resume.   |

---

## Not in scope

- Do NOT run `git push --force` under any circumstances.
- Do NOT push directly to `main`.
- Do NOT delete branches other than via `gh pr merge --delete-branch` (which only deletes the merged feature branch).
- Do NOT modify branch protection or repo settings.
- Do NOT run the dev server (`npm run dev`) as part of publish — Vercel's preview build is the only verification needed.
- Do NOT run TypeScript checks locally (`tsc --noEmit`) — Vercel's build will catch type errors and surface them as a failed preview. Catching them locally adds latency for no gain.
- Do NOT touch `.github/`, `.claude/settings.json`, `package.json`, or any infrastructure config from inside this skill. If the writer asks to change those, redirect to Rémi.
