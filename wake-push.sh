#!/bin/bash

TODAY=$(date +%F)
HOUR=$(date +%H)

STATEFILE="$HOME/.internship_push_last_run"

if [ "$HOUR" -lt 6 ]; then
    exit 0
fi

if [ -f "$STATEFILE" ]; then
    LAST_RUN=$(cat "$STATEFILE")
    if [ "$LAST_RUN" = "$TODAY" ]; then
        exit 0
    fi
fi

cd "$(dirname "$0")" || exit

./auto-push.sh

echo "$TODAY" > "$STATEFILE"
