#!/usr/bin/env python3
"""Refresh the ACTIVITY constant in script.js with YTD GitHub contributions.

Two sources, tried in order:
  1. GitHub GraphQL via an authenticated `gh` CLI (local runs; includes
     private-contribution counts)
  2. The public contributions calendar page, no auth required — the path CI
     falls back to when GraphQL isn't available to its token

Rewrites the single line in script.js tagged ACTIVITY-DATA.

Usage: python3 update-activity.py [--public]   (--public forces source 2)
"""
import datetime
import json
import pathlib
import re
import subprocess
import sys
import urllib.request

LOGIN = "jvroth18"
SCRIPT = pathlib.Path(__file__).parent / "script.js"

today = datetime.date.today()
start = today.replace(month=1, day=1)


def via_graphql():
    query = f'''query {{ user(login: "{LOGIN}") {{
      contributionsCollection(from: "{start}T00:00:00Z", to: "{today}T23:59:59Z") {{
        contributionCalendar {{ weeks {{ contributionDays {{ date contributionCount }} }} }}
      }} }} }}'''
    out = subprocess.run(["gh", "api", "graphql", "-f", f"query={query}"],
                         capture_output=True, text=True, check=True).stdout
    weeks = json.loads(out)["data"]["user"]["contributionsCollection"]["contributionCalendar"]["weeks"]
    return [(d["date"], d["contributionCount"]) for w in weeks for d in w["contributionDays"]]


def via_public_page():
    url = f"https://github.com/users/{LOGIN}/contributions?from={start}&to={today}"
    req = urllib.request.Request(url, headers={"User-Agent": "evening-post-activity-refresh"})
    html = urllib.request.urlopen(req, timeout=30).read().decode()
    dates = {m.group("id"): m.group("date") for m in re.finditer(
        r'<td[^>]*data-date="(?P<date>\d{4}-\d{2}-\d{2})"[^>]*'
        r'id="(?P<id>contribution-day-component-\d+-\d+)"', html)}
    days = []
    for m in re.finditer(r'<tool-tip[^>]*for="(contribution-day-component-\d+-\d+)"'
                         r'[^>]*>\s*(No|[\d,]+) contributions?', html):
        cid, n = m.group(1), m.group(2)
        # the public grid pads to full weeks/year — keep only Jan 1..today
        if cid in dates and str(start) <= dates[cid] <= str(today):
            days.append((dates[cid], 0 if n == "No" else int(n.replace(",", ""))))
    if len(days) < 30:
        raise RuntimeError(f"parsed only {len(days)} days from the public page — markup changed?")
    return days


if "--public" in sys.argv:
    days, source = via_public_page(), "public page"
else:
    try:
        days, source = via_graphql(), "graphql"
    except Exception as e:
        print(f"graphql unavailable ({e.__class__.__name__}), using public page", file=sys.stderr)
        days, source = via_public_page(), "public page"

days.sort()
counts = [c for _, c in days]
data = {"login": LOGIN, "start": days[0][0], "updated": str(today), "counts": counts}
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
print(f"[{source}] {sum(counts)} contributions across {len(counts)} days "
      f"({sum(1 for c in counts if c)} active), through {today}")
