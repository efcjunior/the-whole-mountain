# The Whole Mountain - Context

## Product Context

The Whole Mountain is a discipleship multiplication app by Jesus Said Go. A leader forms a group, guides disciples through a structured study, and tracks multiplication across generations.

Requirements are consolidated from incoming materials and validated through `the-whole-mountain-prototype` with Dale or the project owner before production development. Consult `docs/status.md` for the current phase rather than treating this context file as a progress tracker.

## Working Rules

- Use this directory for app-level context, traceability, and planning. Do not turn it into the main implementation repository without an explicit decision.
- Keep implementation repositories under `repos/`, each versioned in its own Git repository.
- Preserve materials in `docs/incoming/` as received; do not modify them.
- Treat the specification as the primary source for functional requirements and mockups as the primary source for visual and UX intent. Mockups do not represent complete functional coverage.
- Follow the validation flow and the applicable role instructions before changing documentation or starting prototype or production work.
- Keep project orientation and app-level agent instructions together in this context file; use the linked role documents for task-specific instructions.

## Project Documentation

Read these documents before working on the app, then follow the instructions for the relevant role:

1. [Project status](docs/status.md): current progress and next steps.
2. [Validation flow](docs/process/validation-flow.md): source roles, status meanings, and readiness rules.
3. [Product roadmap](docs/product/roadmap.md): module order and validation expectations.
4. [Documentation Analyst](skills/documentation-analyst.md) or [Prototype Designer](skills/prototype-designer.md): task-specific instructions.

[Incoming materials](docs/incoming/) contains received specifications, brand direction, mockups, prompts, handoff notes, and reference code.

App repository: https://github.com/efcjunior/the-whole-mountain

## Child Contexts

- [Repositories](repos/REPOSITORIES_CONTEXT.md): local implementation repositories.
