# The Returning Climber

The central loading animation for **The Whole Mountain** — a discipleship multiplication platform by Jesus Said Go.

## What this is

A self-contained React component plus its companion CSS file. It renders an SVG-based animation depicting multiplication as companionship through descent. See the brand document (Section 5.5) for the theological reasoning behind every visual choice.

## Files

```
ReturningClimber.jsx   # React component (~6KB unminified)
ReturningClimber.css   # Animation choreography (~7KB unminified)
README.md              # This file
```

Total payload after minification and gzipping: **under 6KB combined**. The animation has no external dependencies beyond React.

## Quick start

```jsx
import { ReturningClimber } from './ReturningClimber';

// On the app launch screen — plays once, then transitions
<ReturningClimber mode="launch" onComplete={() => navigate('/dashboard')} />

// Between routes while data is loading — loops indefinitely
<ReturningClimber mode="loading" />

// On the graduation celebration (Lesson 37 complete)
<ReturningClimber mode="graduation" />

// On empty-state screens (no groups yet, no tree yet)
<ReturningClimber mode="empty" />
```

## The four modes

### `launch`
The full 9-second story. Plays once at app open, then settles. Pass `onComplete` to transition to the next screen when the animation finishes. New users see the entire descent-and-companionship narrative on first open.

**Size:** 340 × 300 pixels (responsive, capped at 90vw on mobile)

### `loading`
Compact version with the summit pulsing and one climber moving on a 4-second cycle. Loops while the platform fetches data. Reserves the full story for moments of significance.

**Size:** 120 × 105 pixels (small footprint, fits in screen corners)

### `graduation`
The full animation slowed to 12 seconds, played once as benediction when a leader completes Lesson 37. The slower pace honors the significance of what just happened: the leader has walked a group of disciples from the base to the summit, and is about to descend to meet the next.

**Size:** 340 × 300 pixels

### `empty`
A static frame — no motion. Used for empty states (a new leader's first dashboard, an empty family tree). Shows the climber at the base of the central mountain, looking up the path. The accompanying copy supplies the invitation.

**Size:** 240 × 210 pixels

## Color theme integration

The component references CSS custom properties for its colors. The platform's design system should define these tokens; if any are undefined, the component falls back to hardcoded brand values from the brand document Section 6.

```css
/* Tokens this component reads */
--color-mountain-green   /* #2C3E2D in light mode */
--color-trail-brown      /* #8B7355 */
--color-text-primary     /* #1A1F1B */
--color-text-secondary   /* #4A4F4B */
--color-bg               /* #F5F2EC */

/* Dark mode tokens */
--color-mountain-green-dark   /* #7A9560 */
--color-text-secondary-dark   /* #B8B5AE */
--color-bg-dark               /* #1A201B */
```

The component auto-detects `prefers-color-scheme` and swaps palettes accordingly.

## Subtitle phrases

By default, the animation rotates through phrases drawn from the founder's book "The Whole Mountain":

- *"one disciple climbs the mountain"*
- *"grace turns and walks back down"*
- *"companionship begins where descent meets ascent"*
- *"a second pair appears on a second mountain"*
- *"each climber descends to meet another"*
- *"the whole range fills with quiet companions"*
- *"the summit is Christ — the path is grace"*

Graduation mode uses a separate benediction-toned set. To override either set with a single static subtitle, pass the `subtitle` prop:

```jsx
<ReturningClimber mode="loading" subtitle="reaching across the network" />
```

## Accessibility

This component is **fully accessible**:

- The SVG has `role="img"` with descriptive `<title>` and `<desc>` elements that explain the meaning of the animation, not its mechanics. Screen readers announce: "A figure climbs partway up a mountain, then descends to meet a newly arrived figure at the base. Together they climb. The pattern repeats across a range of mountains, depicting multiplication as companionship through descent."

- The wrapping `<div>` has `role="status"` and `aria-live="polite"` so the rotating subtitle is announced as it changes — without interrupting other content.

- **Reduced-motion support** is full and considered. When the user has `prefers-reduced-motion: reduce` enabled (typically vestibular-disorder users, but increasingly the default in many systems), all motion stops and a static composition appears showing two figures partway up the mountain — companionship already in progress, the story implied rather than enacted. The theology is preserved; the motion is not.

- Color contrast meets WCAG 2.1 AA for the subtitle text against the background in both light and dark modes.

- The platform's function never depends on seeing this animation. All meaningful information is conveyed through other UI elements; the animation is decorative.

## Performance

- **Total size:** under 6KB minified + gzipped
- **Animation overhead:** zero JavaScript animation. All motion is CSS keyframe animation, which is GPU-accelerated on modern browsers.
- **Rendering:** SVG with no filter effects, no shadows, no gradients. Simple geometric primitives perform well even on low-end Android devices.
- **Tested on:** iPhone SE, Samsung Galaxy A series, Itel A23 (a $35 Android common in West African markets). All render the animation smoothly at full frame rate.

## Customization

The animation's visual identity is locked. Do not modify the colors, the number of figures, the timing of the descent, or the geometry of the mountain without consulting the brand document and the ministry founder.

However, the following adjustments are safe and may be needed in specific contexts:

- **Container size:** Wrap the component in any sized container; the SVG scales proportionally.
- **Subtitle text:** Override via the `subtitle` prop.
- **Subtitle rotation speed:** Modify the interval values in the `useEffect` hook in the component file.
- **Animation cycle length:** Modify `animation-duration` on the relevant CSS classes if a different overall pace is needed. Be cautious — the choreography is calibrated to 9 seconds; changing the length without re-calibrating the keyframe percentages will break the descent-and-meeting choreography.

## Replacement

If a future version of the platform requires a different animation, this component is designed to be replaced cleanly. There are no external dependencies on its internals. Any new animation should:

1. Live in the same file structure (`ReturningClimber.jsx` + `.css`) so existing imports continue to work.
2. Honor the same `mode` prop API (`launch`, `loading`, `graduation`, `empty`) so the platform's calling sites do not need to change.
3. Pass the same accessibility tests (screen reader description, reduced-motion fallback, WCAG AA contrast).
4. Be reviewed by the ministry founder before deployment.

## Provenance

This animation was designed during the brand foundation work for The Whole Mountain platform in May 2026. The decision to use the Returning Climber motif over an alternative "Generations Bloom" motif was made by Dale Smith, founder of Jesus Said Go, in counsel with Beth Smith and trusted ministry advisors. The reasoning is preserved in the brand document, Section 12.1.

The Returning Climber depicts the gospel pattern: Christ descended the whole way to walk us up the mountain. The disciple, having received that grace, descends to walk beside another. Multiplication happens through companionship, not reproduction.

Soli Deo gloria.
