# Product Roadmap

This roadmap defines the order for validating and later developing The Whole Mountain.

The order is based on dependency, user value, and the current incoming specification.

## Validation Modules

| Order | Module | Purpose | Validation Output |
| --- | --- | --- | --- |
| 1 | Foundation and App Shell | Establish navigation, visual system, authentication assumptions, and PWA frame. | Prototype shell and shared UI baseline. |
| 2 | Leader Registration | Validate leader signup, age verification, consent, group setup, language, and optional co-leader flow. | Approved registration flow. |
| 3 | Invitation System | Validate invitation sending, acceptance, Maybe Later, Decline, expiration, resend behavior, and conflict states. | Approved invitation flows and edge states. |
| 4 | Leader Dashboard and Weekly Meeting | Validate leader home, meeting completion, lesson progress, attendance, and private notes. | Approved weekly operating flow. |
| 5 | Disciple Dashboard | Validate disciple weekly view, lesson access, meeting information, workbook link, calendar action, and profile access. | Approved disciple experience. |
| 6 | Multiplication and Graduation | Validate Lesson 24 unlock, new group creation, Lesson 37 graduation, blessings, and transition into next-generation leadership. | Approved multiplication and graduation flows. |
| 7 | Family Tree | Validate tree rules, privacy states, statistics, navigation, ancestry/descendants, and active-vs-completed behavior. | Approved tree behavior and visual model. |
| 8 | Admin Operations | Validate abuse reports, parent-change approval, succession, audit log, exports, settings, and network visibility. | Approved admin workflows. |
| 9 | Cross-Cutting Readiness | Validate accessibility, i18n, offline/PWA behavior, notifications, observability, and security expectations. | Development readiness checklist. |

## Development Readiness Rule

A module is ready for production development when:

- related requirements have stable IDs;
- prototype coverage exists for the user-facing or admin-facing behavior;
- Dale or the project owner has validated the prototype where validation is needed;
- open questions that affect implementation are resolved or explicitly deferred.
