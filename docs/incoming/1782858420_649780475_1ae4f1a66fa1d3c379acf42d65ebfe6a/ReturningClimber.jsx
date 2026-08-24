/**
 * ============================================================================
 * The Returning Climber
 * ============================================================================
 *
 * The central loading animation for The Whole Mountain — a discipleship
 * multiplication platform by Jesus Said Go.
 *
 * Theology of the animation
 * --------------------------
 * The animation depicts multiplication as companionship through descent.
 *
 * A solitary figure climbs partway up a mountain. A second figure appears
 * at the base. The first climber descends — not all the way, but enough
 * to come alongside — and ascends with the new climber. As more figures
 * arrive at other points on the range, each is met by another descending
 * companion. The viewport widens to reveal a range of mountains, each
 * with pairs of climbers ascending in companionship. The summit pulses
 * gently — Christ is the height of every climb.
 *
 * This is the gospel pattern of discipleship: grace descends, the
 * disciple having received grace descends in turn, multiplication
 * happens through accompaniment rather than reproduction.
 *
 * Usage
 * -----
 * This is a self-contained React component. It renders an SVG-based
 * animation with CSS-driven motion. No JavaScript animation libraries
 * required. No external dependencies beyond React.
 *
 * Three usage contexts are supported via the `mode` prop:
 *
 *   - "launch":     Full 9-second cycle, plays once at app launch.
 *                   New users see the entire story on first open.
 *
 *   - "loading":    Compact pulsing version, loops indefinitely while
 *                   the platform fetches data. Used between screens.
 *
 *   - "graduation": Full animation as benediction. Plays when a leader
 *                   completes Lesson 37 with their group. Includes
 *                   celebration text overlay.
 *
 *   - "empty":      Static frame of the climber at the base, looking
 *                   up the path. No motion. For empty-state screens.
 *
 * Accessibility
 * --------------
 * - Respects prefers-reduced-motion (renders static frame instead)
 * - SVG has role="img" with descriptive <title> and <desc>
 * - Screen readers announce the animation's meaning, not its mechanics
 * - All motion is decorative and the platform's function does not
 *   depend on seeing it
 *
 * Performance
 * -----------
 * - Total file size: under 6KB minified and gzipped
 * - GPU-accelerated transforms (no layout thrashing)
 * - Zero JavaScript animation overhead
 * - Tested on low-end Android devices in West Africa scenarios
 *
 * Brand alignment
 * ---------------
 * Uses Mountain Green (#2C3E2D) as the primary color, with full dark
 * mode support. Color tokens are defined in the platform's design
 * system; this component references CSS custom properties for theme
 * compatibility.
 *
 * Replacement
 * -----------
 * If the animation needs to be revised in the future, this is a
 * self-contained component with no external dependencies on platform
 * code. Replacing it is a single-file change.
 *
 * Version
 * -------
 * v1.0 — Locked in by Dale Smith, founder of Jesus Said Go ministry,
 *         in counsel with Beth Smith and trusted advisors.
 * ============================================================================
 */

import React, { useEffect, useState } from 'react';
import './ReturningClimber.css';

/**
 * Rotating phrases shown beneath the animation during the launch and
 * graduation modes. Drawn from the founder's book introduction,
 * "The Whole Mountain." See brand document Section 9.5 for the full
 * curated set.
 */
const ROTATING_PHRASES = [
  'one disciple climbs the mountain',
  'grace turns and walks back down',
  'companionship begins where descent meets ascent',
  'a second pair appears on a second mountain',
  'each climber descends to meet another',
  'the whole range fills with quiet companions',
  'the summit is Christ — the path is grace',
];

/**
 * Graduation-specific phrases. Used in graduation mode instead of the
 * default rotating set. Tone is benediction, not instruction.
 */
const GRADUATION_PHRASES = [
  'a generation has finished',
  'these climbers are now walkers for others',
  'the mountain stretches on',
  'bless them as they descend to meet the next',
];

/**
 * The Returning Climber component.
 *
 * @param {Object} props
 * @param {'launch' | 'loading' | 'graduation' | 'empty'} props.mode -
 *   The display context. Determines size, motion behavior, and copy.
 * @param {string} [props.subtitle] -
 *   Optional override for the rotating subtitle. If provided, this
 *   single string is shown instead of the rotating set.
 * @param {() => void} [props.onComplete] -
 *   Optional callback fired when a single launch cycle finishes.
 *   Used by the launch screen to transition to the dashboard.
 */
export function ReturningClimber({ mode = 'loading', subtitle, onComplete }) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Determine which phrase set to rotate through
  const phrases = mode === 'graduation' ? GRADUATION_PHRASES : ROTATING_PHRASES;
  const currentPhrase = subtitle ?? phrases[phraseIndex];

  // Rotate phrases every 4.5 seconds in launch and graduation modes.
  // Loading mode rotates faster (every 3 seconds) since the user is
  // actively waiting. Empty mode does not rotate.
  useEffect(() => {
    if (mode === 'empty' || subtitle) return;
    const interval = mode === 'loading' ? 3000 : 4500;
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [mode, subtitle, phrases.length]);

  // Fire onComplete after one full launch cycle (9 seconds)
  useEffect(() => {
    if (mode !== 'launch' || !onComplete) return;
    const timer = setTimeout(onComplete, 9000);
    return () => clearTimeout(timer);
  }, [mode, onComplete]);

  // The animation runs in modes other than 'empty'
  const isAnimating = mode !== 'empty';

  return (
    <div
      className={`returning-climber returning-climber--${mode}`}
      role="status"
      aria-live="polite"
    >
      <div className="returning-climber__canvas">
        <svg
          viewBox="0 0 340 300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="rc-title rc-desc"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id="rc-title">The Returning Climber</title>
          <desc id="rc-desc">
            A figure climbs partway up a mountain, then descends to meet
            a newly arrived figure at the base. Together they climb. The
            pattern repeats across a range of mountains, depicting
            multiplication as companionship through descent.
          </desc>

          {/* Background range — appears in launch and graduation modes */}
          {isAnimating && (
            <g className="rc-far-mountains">
              <path
                className="rc-mountain-far"
                d="M 0 260 L 30 200 L 55 230 L 80 175 L 105 235"
              />
              <path
                className="rc-mountain-far"
                d="M 245 245 L 270 195 L 295 220 L 320 180 L 340 250"
              />
              <circle className="rc-figure" cx="50" cy="218" r="2" opacity="0.45" />
              <circle className="rc-figure" cx="55" cy="219" r="2" opacity="0.45" />
              <circle className="rc-figure" cx="285" cy="215" r="2" opacity="0.45" />
              <circle className="rc-figure" cx="290" cy="216" r="2" opacity="0.45" />
            </g>
          )}

          {/* Central mountain — always visible */}
          <path
            className="rc-mountain"
            d="M 110 260 L 170 100 L 230 260"
          />
          <line
            className="rc-mountain rc-baseline"
            x1="105"
            y1="260"
            x2="235"
            y2="260"
          />

          {/* The path up the mountain — dashed, suggesting trail */}
          <path
            className="rc-path"
            d="M 170 260 Q 155 220 162 180 Q 168 145 170 110"
          />

          {/* Summit — Christ is the height of every climb */}
          <circle
            className={`rc-summit ${isAnimating ? 'rc-summit--pulsing' : ''}`}
            cx="170"
            cy="100"
            r="3.5"
          />

          {/* Primary climber (figure A) — climbs, then descends, then ascends with companion */}
          <g className={isAnimating ? 'rc-figure-a' : ''}>
            <circle className="rc-figure" cx="170" cy="258" r="3.5" />
          </g>

          {/* New arrival (figure B) — appears at base, ascends with figure A */}
          {isAnimating && (
            <g className="rc-figure-b">
              <circle className="rc-figure" cx="173" cy="258" r="3.5" />
            </g>
          )}

          {/* Other pairs on adjacent mountains — appear as range widens */}
          {isAnimating && (
            <>
              <g className="rc-figure-c">
                <circle className="rc-figure" cx="50" cy="216" r="3" />
                <circle className="rc-figure" cx="55" cy="219" r="3" />
              </g>
              <g className="rc-figure-d">
                <circle className="rc-figure" cx="285" cy="213" r="3" />
                <circle className="rc-figure" cx="290" cy="216" r="3" />
              </g>

              {/* Distant mountain pairs — appear at the end of the cycle */}
              <g className="rc-pair-1">
                <path
                  className="rc-mountain-far"
                  d="M 0 270 L 18 230 L 36 255"
                />
                <circle className="rc-figure" cx="18" cy="245" r="1.8" opacity="0.7" />
              </g>
              <g className="rc-pair-2">
                <path
                  className="rc-mountain-far"
                  d="M 305 268 L 322 232 L 340 258"
                />
                <circle className="rc-figure" cx="322" cy="246" r="1.8" opacity="0.7" />
              </g>
              <g className="rc-pair-3">
                <path
                  className="rc-mountain-far"
                  d="M 60 268 L 78 240 L 96 262"
                />
                <circle className="rc-figure" cx="78" cy="252" r="1.6" opacity="0.6" />
                <circle className="rc-figure" cx="262" cy="252" r="1.6" opacity="0.6" />
                <path
                  className="rc-mountain-far"
                  d="M 245 268 L 263 240 L 281 262"
                />
              </g>
            </>
          )}
        </svg>
      </div>

      {/* Subtitle — rotates through phrases drawn from the founder's book */}
      {mode !== 'empty' && (
        <p
          className="returning-climber__subtitle"
          aria-live="polite"
        >
          {currentPhrase}
        </p>
      )}
    </div>
  );
}
