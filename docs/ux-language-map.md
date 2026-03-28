---
summary: "Phase 3 reference for how CAClaw should translate technical system terms into plain user-facing language"
read_when:
  - You are writing new CAClaw UI or CLI copy
  - You need to know when to keep the technical term versus using plain-language framing
title: "CAClaw UX Language Map"
---

# CAClaw UX language map

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


This reference captures the wording rules established in Phase 3 so later UX and workflow work stays consistent.

## Rule of thumb

- Use **plain-language wording first** on primary surfaces.
- Keep the **technical term second** when the user may need it for commands, debugging, or operator accuracy.
- Do not rename internal compatibility ids just to make copy cleaner.

## Core terminology map

| Technical term | Primary user-facing wording           | Keep the technical term when                              | Example                                                             |
| -------------- | ------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| Gateway        | CAClaw connection                     | Showing commands, config keys, or deep diagnostics        | "Connect CAClaw" first, `gateway.bind` second                       |
| Token          | Access token                          | Showing env vars, config keys, or advanced setup          | "Access token" in forms, `OPENCLAW_GATEWAY_TOKEN` in technical help |
| Pairing        | Device approval                       | Showing CLI recovery commands or protocol-specific errors | "This device still needs approval" first                            |
| Session        | Conversation                          | Showing internal keys, store paths, or exact APIs         | "Recent conversations" first, session key as detail                 |
| Agent          | Workspace assistant or assistant      | Showing exact agent ids, routing config, or advanced tabs | "Assistant" on primary surfaces                                     |
| Doctor         | Health check or troubleshooting check | Showing the exact CLI command                             | "Run a health check" first, `openclaw doctor` second                |
| Cron           | Scheduled work                        | Showing cron jobs or config sections                      | "Scheduled work" first                                              |
| Channel        | Connected channel                     | Showing exact provider/channel settings                   | "Connected channels" first                                          |
| Logs           | Technical logs                        | Surfaces intended for debugging                           | "Recent technical logs" on overview surfaces                        |

## Surface-specific guidance

### Setup and onboarding

- Lead with what the user is trying to do.
- Put the recommended path first.
- Keep commands visible, but present them as the way to do the task, not as the task itself.

### Status and overview

- Answer these questions first:
  - Is CAClaw ready?
  - What is connected?
  - What needs attention?
  - What should I do next?
- Use diagnostics and subsystem terms as supporting detail, not the lead story.

### CA-first entry cues

- Use broad work buckets such as GST, TDS, income tax, audit, financial reporting, and ROC/commercial-law support.
- Treat them as starting points and guidance in Phase 3, not as complete workflow promises.

## Keep this consistent

If a new surface is meant for everyday work, default to the plain-language wording in this map. If a surface is explicitly advanced or diagnostic, the technical term can lead, but it should still align with the same meaning.
