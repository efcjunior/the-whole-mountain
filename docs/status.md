# Project Status

Last updated: 2026-09-04

This is the single source of truth for current project status.

For status meanings and process rules, see `docs/process/validation-flow.md`.

## Current Phase

Documentation analysis and validation planning.

## Current Situation

The incoming materials contain a strong functional specification, brand direction, developer handoff notes, reference animation files, and six HTML mockups.

Reference mockups are published for review. Requirements validation has not started.

The agreed interpretation is:

- The specification is the primary source for functional requirements.
- The mockups are the primary source for visual and UX intent.
- The current mockups do not cover every functional requirement and should not be treated as the full implementation contract.

## Current Work

| Area | Status | Owner | Next Step |
| --- | --- | --- | --- |
| Product overview | Draft | Documentation Analyst | Create `repos/the-whole-mountain-documentation/specs/product-overview.md`. |
| Software requirements | Draft | Documentation Analyst | Create `repos/the-whole-mountain-documentation/specs/<feature>/requirements.md` with stable requirement IDs. |
| Open questions | Draft | Documentation Analyst | Create `repos/the-whole-mountain-documentation/specs/<feature>/open-questions.md`. |
| Documentation repository | Draft | Documentation Analyst | Local repository initialized at `repos/the-whole-mountain-documentation/`; author specifications by module. |
| Prototype repository | Draft | Human / Prototype Designer | Reference mockups published on Cloudflare; begin requirements-driven prototype work when a module is `Ready for Prototype`. |
| Prototype validation | Blocked | Prototype Designer | Wait until at least one module is marked `Ready for Prototype`. |

## Module Validation Status

| Order | Module | Status | Owner | Next Step |
| --- | --- | --- | --- | --- |
| 1 | Foundation and App Shell | Draft | Documentation Analyst | Extract requirements. |
| 2 | Leader Registration | Draft | Documentation Analyst | Extract requirements and validation needs. |
| 3 | Invitation System | Draft | Documentation Analyst | Extract requirements and edge states. |
| 4 | Leader Dashboard and Weekly Meeting | Draft | Documentation Analyst | Extract requirements and weekly workflow. |
| 5 | Disciple Dashboard | Draft | Documentation Analyst | Extract requirements and disciple workflow. |
| 6 | Multiplication and Graduation | Draft | Documentation Analyst | Extract Lesson 24 and Lesson 37 requirements. |
| 7 | Family Tree | Blocked | Documentation Analyst | Resolve active-vs-completed node behavior. |
| 8 | Admin Operations | Draft | Documentation Analyst | Extract admin workflow requirements. |
| 9 | Cross-Cutting Readiness | Draft | Documentation Analyst | Extract PWA, offline, i18n, accessibility, security, and observability requirements. |

## Known Early Issues

- Family Tree behavior needs confirmation: specification says MVP tree nodes appear after completion, while mockups show active disciple nodes.
- Mockups are visually useful but do not implement all interactions requested in the original prompts.
- Several implementation decisions remain open: backend, email provider, Spanish Bible translation, sender domain, sensitive regions, legal entity name, and initial admin emails.

## Read First

A new contributor or agent should read these files first:

1. `THE_WHOLE_MOUNTAIN_CONTEXT.md`
2. `docs/status.md`
3. `docs/process/validation-flow.md`
4. `docs/product/roadmap.md`
5. Relevant agent instructions in `skills/`
