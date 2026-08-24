# Validation Flow

This document defines how raw documentation becomes validated development work.

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

## Requirement Statuses

| Status | Meaning |
| --- | --- |
| Draft | Extracted from incoming material but not yet structured for validation. |
| Ready for Prototype | Clear enough to represent in the validation prototype. |
| Prototyped | Represented in the prototype. |
| Needs Review | Ready for Dale or owner review. |
| Approved | Validated by Dale or owner. |
| Ready for Development | Approved and specific enough for implementation planning. |
| Deferred | Intentionally postponed to a later phase. |

## Operating Rules

- The specification is the primary source for functional requirements.
- Mockups are the primary source for visual and UX intent.
- Do not treat current mockups as complete functional coverage.
- Requirements should receive stable IDs before prototype mapping.
- Each validated prototype flow should map back to one or more requirement IDs.
- Open questions must be recorded before development begins.
- Development should not start for a module until its validation status supports it.

## Prototype Validation Map

When the prototype repository exists, maintain a validation map there using this structure:

| Requirement ID | Prototype Area | Status | Notes |
| --- | --- | --- | --- |
| TWM-REQ-001 | Leader Registration | Draft | Example placeholder. |

The validation map belongs in the prototype repository because it tracks prototype coverage and review status.
