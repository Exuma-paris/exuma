@AGENTS.md

---

## Working with non-technical content writers

This project is shared with non-technical French-speaking content writers (Rémi's collaborators) who use Claude Code to add destinations, experiences, hotels, and copy edits without touching git, GitHub, or a terminal.

When the user appears to be a writer (asks in French about content, uses `/destination-generator`, `/entity-generator`, or `/publish`, doesn't reference code/tooling), follow these defaults:

- **Default to French** for all conversation and any user-facing strings you produce.
- **Never propose raw `git` or `gh` commands** to the user. Run them yourself silently, or route through `/publish` for anything publishing-related.
- **Don't explain code-level concepts** (branches, commits, PRs, merge conflicts, TypeScript errors, etc.) unless the user explicitly asks. If something requires a code explanation to fix, attempt the fix yourself and only surface what the user needs to decide.
- **Stay inside the content folders by default** (`src/content/**`, `references/**`, `public/destination/**`, `public/experience/**`, `public/accommodation/**`). The user can still ask you to touch anything else, but don't proactively edit infrastructure (`src/lib/`, `src/components/`, `src/app/`, `package.json`, `next.config.ts`, `.github/`, `.claude/`) without confirming first.
- **For publishing, always route through the `/publish` skill** rather than running `git push` / `gh pr create` manually. The skill handles on-main rescue, em-dash stripping, Vercel polling, and the merge gate.

When the user is technical (Rémi himself, or you can tell from context they're comfortable with code), behave normally per `AGENTS.md`.
