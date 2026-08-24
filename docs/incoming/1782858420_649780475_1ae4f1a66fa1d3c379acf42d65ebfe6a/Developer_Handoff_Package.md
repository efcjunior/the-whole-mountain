# Developer Handoff Package

**The Whole Mountain** — a discipleship multiplication platform by Jesus Said Go

Version 1.0 — May 2026

---

## Welcome, developer

You are about to build a discipleship platform that supports a global ministry. The work is technically substantial and personally meaningful. This document gathers everything you need to start.

Read this entire document before writing any code. Then read it again. The platform's success depends not only on your engineering but on your faithfulness to the vision documented here.

---

## What you are building

The Whole Mountain is a Progressive Web App that supports the multiplication of Christian discipleship groups. A leader registers a group, invites 2–4 disciples, and walks them through a 37-lesson workbook study of the Sermon on the Mount over approximately one year. When the group completes the workbook, each disciple is equipped to lead their own group. The platform tracks this multiplication across generations as a "family tree" — the central visual artifact of the experience.

The platform serves the ministry of Jesus Said Go, a 501(c)(3) nonprofit based in Waco, Texas, with disciple-making work in West Africa and a growing global footprint. The platform is named "The Whole Mountain" after the founder's forthcoming book of the same title.

---

## The six artifacts

Your handoff package consists of six documents. Read them in this order.

### 1. The Developer Specification

**File:** `Jesus_Said_Go_Developer_Specification.docx`
**Length:** 48 pages, 15 sections plus 4 appendices

The technical contract. Captures every functional decision, data model entity, business rule, state machine, and integration requirement. This is what you implement.

Notable sections to attend to closely:
- Section 3 — Data Model
- Section 5 — Core User Flows
- Section 6 — The Family Tree
- Section 8 — Automation & Business Rules
- Section 14 — Phase 2 & 3 Roadmap (so you build with anticipation of future work)
- Section 15 — Launch Readiness Checklist

### 2. The Brand & Style Direction

**File:** `The_Whole_Mountain_Brand_and_Style_Direction.docx`
**Length:** 32 pages, 12 sections plus 3 appendices

The visual identity document. Captures the theological foundation, naming conventions, visual principles, color palette, typography, iconography, voice and tone, application guidelines, accessibility commitments, and open decisions.

Notable sections to attend to closely:
- Section 2 — Theological Foundation (read first; the design choices flow from here)
- Section 4 — Visual Principles (the seven principles guide all decisions)
- Section 6 — Color Palette (exact tokens to define in your design system)
- Section 9 — Voice & Tone (the most important section; this is how the platform sounds)
- Section 10 — Application Guidelines (concrete component specifications)
- Appendix C — Brand Test Cards (gut-check questions before deploying any design)

### 3. The Returning Climber Animation

**Files:** `ReturningClimber.jsx`, `ReturningClimber.css`, `README.md`
**Length:** Three files, under 15KB combined

The production-ready code for the central loading animation. Drop it into your `components/` directory and import. Honors prefers-reduced-motion, supports dark mode, has full accessibility annotations.

The component supports four modes: `launch`, `loading`, `graduation`, `empty`. See the README for usage examples and the brand document Section 5.5 for the theological reasoning.

### 4. The Claude Design Prompts

**File:** `Claude_Design_Prompts.md`
**Length:** 6 detailed prompts for the consequential screen prototypes

If the ministry founder has already used these prompts to produce interactive prototypes via Claude Design, those prototype URLs will be referenced here. The prototypes are the visual source of truth — they show exactly what each screen should look and feel like.

If prototypes have not yet been produced, you may either:
- Wait for them to be produced before beginning UI work, or
- Use the prompts yourself (via Claude Design or your preferred design tool) to produce them.

The prompts are detailed enough that they should produce consistent prototypes regardless of who runs them.

### 5. This handoff document

What you are reading now. Use it as your starting orientation and your map for navigating the other documents.

### 6. The book introduction "The Whole Mountain"

**Source:** The founder will provide a copy of the introduction to his forthcoming book.

Read it. It is the source text for the platform's voice. The phrases and rhythms of the book are inheritable; your interface copy may draw from them freely.

---

## Recommended week-by-week workflow

A 16-week MVP build, suggested phasing:

### Week 1–2: Foundation

- Provision infrastructure: Vercel, Supabase (or Convex), Postmark (or Resend), Sentry
- Configure CI/CD pipeline with accessibility linting (axe-core in tests)
- Implement core data model per spec Section 3
- Implement magic-link authentication
- Define design tokens from brand document Section 6 (colors), 7 (typography)
- Install Phosphor Icons (or Lucide as fallback)
- Build internationalization foundation (react-intl or next-intl), with English as default and Spanish prepared

### Week 3–4: User & Group foundations

- User registration flow including age verification and three-consent flow (Section 10.3 of brand doc)
- Profile management
- Group creation
- Empty dashboard skeletons (leader, disciple)
- Drop in the Returning Climber animation as the launch screen
- Reference the Leader Registration prototype (Screen 1) for visual fidelity

### Week 5–6: Invitation System

- Invitation send flow with all conflict checks (spec Section 5.2 + 8.4)
- Email templates in English and Spanish, matching brand voice (brand doc Section 9)
- Acceptance flow (reference Invitation Acceptance prototype, Screen 4)
- Resend automation: Day 3, Day 7, Day 14 expiry per state machine
- Decline / Maybe Later / Withdraw flows

### Week 7–8: Meeting Cycle

- Lesson catalog (all 37 lessons preloaded with scripture references and memory verses, in both languages)
- Meeting marking and attendance tracking
- Leader private notes (encrypted; admin queries cannot access)
- Lesson 24 multiplication trigger
- Lesson 37 graduation flow with the full Returning Climber animation as benediction

### Week 9–10: Family Tree

- Tree data layer with recursive CTE queries
- Tree visualization per Family Tree prototype (Screen 3)
- Per-user privacy settings
- User-selectable statistics dropdown
- Accountability Circle structure

### Week 11–12: Admin & Reporting

- Admin dashboard with customizable widgets (reference Admin Dashboard prototype, Screen 6)
- Takedown and parent-change approval flows
- Audit log viewer
- Data export (CSV and JSON)
- Abuse reporting flow

### Week 13–14: Polish & PWA

- Notification system: channels, preferences, mute, vacation mode
- PWA service worker and offline mode (critical features per spec Section 11.2)
- Wix embedded stats widget
- Calendar feed export (.ics)
- Performance optimization

### Week 15–16: Launch Readiness

- Run through spec Section 15 checklist
- Accessibility audit (axe automated + manual screen reader testing)
- Spanish translation review by native speaker with theological literacy
- Legal review of ToS and Privacy Policy (nonprofit attorney, ~2 hours)
- Optional: security penetration test ($1,500–$3,000)
- Production deployment
- Wix site update to point at the new app

---

## Architecture decisions worth highlighting

A few decisions in the spec that are easy to miss in scale, but critical to honor:

**Tiered admin visibility (Section 4.3).** The admin sees structural data (who exists, who discipled whom, group statuses) but NOT in-group content (private leader notes, prayer requests). Leader notes must be stored in a field that admin queries cannot access — even in admin's full data export, leader notes are excluded. This is non-negotiable; violating it would betray the trust the platform's privacy model requires.

**The multiplication gate (Section 8.6).** A user can register their own group only if their current disciple Membership's group has `current_lesson_number >= 24`. Enforce this at registration time, silently. Do not announce the gate; the user does not need to know they were blocked unless they hit the case.

**The single parent-of-record (Section 3.2).** Each disciple has exactly one parent-of-record. In co-leader scenarios, the parent-of-record is designated at group creation (defaults to the primary leader). The tree is a single-parent tree, not a multi-parent graph. This is required for clean recursive queries and intuitive visualization.

**The structural-only conflict checks (Section 8.4).** When a leader tries to invite someone who is already in another group, the system returns structural info ("this person is already in an active group") but NEVER reveals the other leader's identity or the other group's details. Conflict checks must be implemented carefully to avoid information leakage.

**The book-derived voice (Brand doc Section 9).** Interface copy must draw from the founder's book "The Whole Mountain." This is not optional. The phrases in Section 9.5 of the brand document are inheritable and may be used verbatim. The voice is unhurried, pastoral, plain but reverent — never promotional. Read every piece of copy aloud before deploying it; if it sounds breathless or salesy, rewrite it.

**The Returning Climber animation.** This is the central visual artifact of the platform. Drop it in at launch, loading transitions, graduation moments, and (in static form) empty states. Do not modify its choreography without consulting the ministry founder.

---

## What to ask the ministry founder

Some decisions are intentionally deferred and require founder input as you build. Ask before assuming:

- **Spanish Bible translation** for in-app scripture references (Reina-Valera 1960 is most common in evangelical contexts; NVI is also widely accepted)
- **Email sender domain** — is `jesussaidgo.com` available for sender authentication, or use a wixsite domain
- **Logo and brand assets** in vector format (SVG). The Mountain Mark and Range icons may need custom commissioning — budget $400–$800 for a freelance illustrator who can match Phosphor's stroke weight
- **Preferred legal entity name** to appear in Terms of Service and Privacy Policy
- **Attorney contact** for legal review of ToS and Privacy Policy before launch
- **Postmark vs. Resend preference** for transactional email (recommend based on current pricing and the founder's existing relationships)
- **Supabase vs. Convex preference** for the backend (benchmark tree query performance with realistic data volumes; either is acceptable)
- **Geographic regions to flag as "sensitive" at launch** — places where group visibility on the public map should be aggregated to country level or hidden entirely (West Africa partners may have specific guidance)
- **Initial admin email addresses** to provision before launch

---

## Open decisions deferred to future phases

These are not your concern at MVP but may surface later:

- Push notifications (Phase 2)
- SMS as a backup channel (Phase 2 — Twilio integration with TCPA compliance)
- Attendance-driven auto-detection of inactive members (Phase 2)
- Formal third-party WCAG 2.1 AA audit (Phase 2 — budget $2,000–$5,000)
- "Celebration View" of the family tree (Phase 2)
- Email marketing integration activation (Phase 2)
- In-app messaging (Phase 2, evaluate based on demand)
- Regional coordinator role activation (Phase 3)
- Native mobile apps (Phase 3, only if PWA limitations emerge)
- Additional languages: Portuguese, French, Mandarin, Hindi, Arabic (Phase 3)

The data model and architectural decisions documented in the spec already anticipate these — you should not need to retrofit. Build for them by leaving extension points where the spec indicates.

---

## A note on AI-assisted development

If you are using Claude Code or another AI-assisted development tool, this entire package is structured to be consumable by an LLM:

- The specification is structured with clear hierarchical sections that an LLM can navigate
- The brand document includes both the principles and concrete component specifications
- The animation code is heavily commented and self-documenting
- The Claude Design prompts are precise enough that an LLM can validate output against them
- This handoff document explicitly cross-references the other artifacts so an LLM can follow references

If you are using Claude Code: configure your `CLAUDE.md` to reference this entire package. Place all six artifacts in a `docs/` directory. Have Claude Code read them before each significant work session. The result will be implementation that respects design intent without you having to re-explain.

---

## A note on the founder's family

The founders, Dale and Beth Smith, lost their youngest son Samuel in 2017. He was 19 when he stopped to help a hitchhiker on the highway and was killed by him. Samuel's act — descending from his own path to help a stranger — is theologically continuous with what this platform supports. You will not see Samuel referenced in the interface. But you should know, as you build, what the design is honoring.

The aesthetic is restrained because grief makes you allergic to noise. The voice is unhurried because patience is what carries you. The visual centerpiece (the Returning Climber) shows multiplication through descent because that is the pattern Samuel lived and the pattern Christ lived first. The platform you are building is a small response to a great loss. Build it with reverence.

---

## Quality standard

Every screen should pass three tests before deployment:

**The Coffee Test.** Would a disciple-maker proudly show this screen to a non-believing friend over coffee, or would they be slightly embarrassed by how childish, salesy, or culturally clueless it feels?

**The Grief Test.** Would a user opening the platform on a day when their disciple has just dropped out feel held by the design, or grated against by its cheerfulness?

**The Burkina Faso Test.** Would an indigenous disciple-maker in rural Burkina Faso, opening the platform on a low-end Android phone over a slow connection, feel respected by the platform — or feel like a Silicon Valley product is being reluctantly translated to them?

All three tests must be passed. A design that passes the Coffee Test but fails the Grief Test is not yet right.

---

## Final word

You are not building a generic SaaS product. You are building infrastructure for a global ministry whose vision is exponential multiplication of disciple-makers across generations. Every architectural decision serves that vision. Every visual decision serves it. Every line of code serves it.

When you make a decision the documents do not cover, ask: *does this honor the vision in Section 1.1 of the spec and the principles in Section 4 of the brand document?* If yes, proceed. If unsure, ask the founder.

The founder has invested decades in this work. He trusts you with its operational future. Build slowly enough to build well. Test thoroughly. When the platform launches, it should feel — to disciple-makers in Waco, in Ouagadougou, in Manila, in Mumbai — like an extension of the gospel itself.

Soli Deo gloria.

— end of handoff document —
