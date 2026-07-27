#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"

URL="http://localhost:3000"
echo "Lancement du site Exuma..."
echo "URL : $URL"

(sleep 3 && open "$URL") >/dev/null 2>&1 &
npm run dev
