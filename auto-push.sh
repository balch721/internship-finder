#!/bin/bash

cd "$(dirname "$0")" || exit

git add .

if ! git diff --cached --quiet; then
    git commit -m "Automated update $(date '+%Y-%m-%d %H:%M')"
    git push origin main
fi
