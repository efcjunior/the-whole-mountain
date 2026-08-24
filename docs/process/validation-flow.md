# Validation Flow

This document defines how raw documentation becomes validated development work.

Current status lives only in `docs/status.md`. This file defines the process and status vocabulary, but it does not track current progress.

## Flow

```text
docs/incoming/
  -> product and requirements documentation
  -> validation prototype
  -> Dale validation
  -> development-ready backlog
  -> production implementation
```

## Source Roles

- `docs/incoming/`: received source material. Preserve as-is.
- `docs/product/`: product-level understanding and roadmap.
- `docs/requirements/`: consolidated software requirements and open questions.
- `repos/the-whole-mountain-prototype/`: planned local clone/location for the validation prototype repository.
- Production implementation repositories: created later as separate repositories under `repos/` when needed.

## Status Vocabulary

| Status | Meaning |
| --- | --- |
| Not Started | Work has not begun. |
| Draft | Work has started but is not ready for the next process step. |
| Ready for Prototype | Clear enough to represent in the validation prototype. |
| Prototype In Progress | Prototype work has started for this module. |
| Needs Review | Ready for Dale or owner review. |
| Approved | Validated by Dale or owner. |
| Ready for Development | Approved and specific enough for implementation planning. |
| Deferred | Intentionally postponed to a later phase. |
| Blocked | Waiting for a human decision or missing prerequisite. |

## Operating Rules

- Use `docs/status.md` as the only source of current status.
- The specification is the primary source for functional requirements.
- Mockups are the primary source for visual and UX intent.
- Do not treat current mockups as complete functional coverage.
- Requirements should receive stable IDs before prototype mapping.
- Each validated prototype flow should map back to one or more requirement IDs.
- Open questions must be recorded before development begins.
- Development should not start for a module until its status is `Ready for Development`.

## Prototype Validation Map

When the prototype repository exists, maintain a validation map there using this structure:

| Requirement ID | Prototype Area | Status | Notes |
| --- | --- | --- | --- |
| TWM-REQ-001 | Leader Registration | Draft | Example placeholder. |

The validation map belongs in the prototype repository because it tracks prototype coverage and review status.
