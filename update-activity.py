#!/usr/bin/env python3
"""Refresh the ACTIVITY constant in script.js with YTD GitHub contributions.

Fetches the contribution calendar for LOGIN from Jan 1 of the current year
through today (requires an authenticated `gh` CLI), and rewrites the single
line in script.js tagged with ACTIVITY-DATA. Run before each deploy so the
composing-room heatmap stays current.

Usage: python3 update-activity.py
"""
import datetime
import json
import pathlib
import subprocess

LOGIN = "jvroth18"
SCRIPT = pathlib.Path(__file__).parent / "script.js"

today = datetime.date.today()
start = today.replace(month=1, day=1)
query = f'''query {{ user(login: "{LOGIN}") {{
  contributionsCollection(from: "{start}T00:00:00Z", to: "{today}T23:59:59Z") {{
    contributionCalendar {{ weeks {{ contributionDays {{ date contributionCount }} }} }}
  }} }} }}'''

out = subprocess.run(["gh", "api", "graphql", "-f", f"query={query}"],
                     capture_output=True, text=True, check=True).stdout
weeks = json.loads(out)["data"]["user"]["contributionsCollection"]["contributionCalendar"]["weeks"]
days = [d for w in weeks for d in w["contributionDays"]]
days.sort(key=lambda d: d["date"])
counts = [d["contributionCount"] for d in days]

data = {"login": LOGIN, "start": days[0]["date"], "updated": str(today), "counts": counts}
line = f"const ACTIVITY = {json.dumps(data, separators=(',', ':'))}; // ACTIVITY-DATA"

src = SCRIPT.read_text()
lines = src.splitlines()
for i, l in enumerate(lines):
    if l.rstrip().endswith("// ACTIVITY-DATA"):
        lines[i] = line
        break
else:
    raise SystemExit("no ACTIVITY-DATA line found in script.js")
SCRIPT.write_text("\n".join(lines) + "\n")
print(f"{sum(counts)} contributions across {len(counts)} days "
      f"({sum(1 for c in counts if c)} active), through {today}")
