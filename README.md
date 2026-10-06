# Anthology Hub — Public Demo

A sanitized portfolio edition of a larger Google Apps Script learning platform.

This repository demonstrates a browser-based literary learning workspace built with Google Apps Script, HTML, CSS and JavaScript. It intentionally contains **no school data, student data, production IDs, credentials, private deployment configuration, licensed anthology text, or production Git history**.

## Public-demo design

The full 16-title anthology constellation is retained so the navigation, search, concept relationships and overall product design can be demonstrated accurately.

- All 16 titles and authors are visible.
- Public-domain selections are interactive and open a working text workspace.
- Other titles are deliberately locked in the public demo.
- No poem text or extract is stored for locked titles.
- Locked titles remain visible only to demonstrate the anthology information architecture and relationship model.

The private production application contains licensed educational material and remains separate from this repository.

## What it demonstrates

- Google Apps Script web-app structure
- Full anthology constellation/navigation model
- Search and concept filtering across 16 texts
- Locked/public content states
- Per-text notes and revisit tracking for available texts
- Persistent user progress using `UserProperties`
- Simple progress dashboard
- Responsive browser interface
- Clear separation between content, UI and server-side persistence

## Portfolio scope

This demo is derived from patterns used in a larger private educational system, but it is a separate implementation created specifically for public demonstration. The production repository remains private and unchanged.

Public-domain status can vary by jurisdiction. The demo therefore uses a deliberately conservative allow-list for interactive text content; adding a title to the constellation does not imply that its full text is licensed for redistribution.

## Files

- `Code.gs` — Apps Script server functions and per-user state
- `Index.html` — application shell
- `Poems.html` — title metadata and permitted demo excerpts
- `Scripts.html` — client-side interactions and content-lock logic
- `Styles.html` — responsive presentation
- `appsscript.json` — minimal Apps Script manifest

## Run in Google Apps Script

1. Create a new standalone Apps Script project.
2. Add the files from this repository.
3. Deploy as a web app.
4. Open the deployment URL while signed into Google.

No spreadsheet or external database is required for the demo; progress is stored per user with Apps Script User Properties.

## Privacy and security

This public demo contains synthetic/demo state only. Do not add real student records, email lists, Drive IDs, API keys, deployment IDs or licensed teaching materials to a public fork.
