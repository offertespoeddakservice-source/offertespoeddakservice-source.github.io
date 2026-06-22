#!/bin/bash
# Lock helper voor dak-seo-loop scheduled task.
# Exit codes: 0 = doorgaan, 1 = stop (loop klaar), 2 = stop (andere run actief)

LOCK_FILE="/tmp/dak-ronde.lock"
KLAAR_FILE="/Users/rensvanheugten/spoeddakservice/.loop-klaar"
MAX_AGE=840

if [ -f "$KLAAR_FILE" ]; then
  echo "STOP: loop is klaar (.loop-klaar bestaat)"
  exit 1
fi

if [ -f "$LOCK_FILE" ]; then
  LOCK_TS=$(cat "$LOCK_FILE")
  NOW=$(date +%s)
  AGE=$(( NOW - LOCK_TS ))
  if [ "$AGE" -lt "$MAX_AGE" ]; then
    echo "STOP: lock actief, ${AGE} seconden oud"
    exit 2
  else
    echo "Lock verlopen (${AGE}s), doorgaan"
  fi
fi

date +%s > "$LOCK_FILE"
echo "doorgaan"
exit 0
