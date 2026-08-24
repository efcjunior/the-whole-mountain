# Claude Design Prototyping Prompts

For **The Whole Mountain** — a discipleship multiplication platform by Jesus Said Go.

## How to use this document

You have access to Claude Design (claude.ai/design) via your Max account. This document contains six prompts — one for each of the consequential screens we identified during discovery. Each prompt is designed to produce a mobile-first interactive prototype you can experience on your phone, validate against the assumption questions, and iterate as needed.

**Workflow for each screen:**

1. Copy the entire prompt below for the screen you want to prototype
2. Open claude.ai/design in your browser (or open Claude Design in the Claude desktop app)
3. Start a new project, paste the prompt
4. Wait for the prototype to render (typically 1–3 minutes)
5. Open the live prototype on your phone (Claude Design provides a QR code or shareable link)
6. Test against the assumption questions listed at the bottom of each prompt
7. If anything feels wrong, ask Claude Design to iterate — typically 5–10 minutes per iteration
8. When satisfied, save the prototype URL and proceed to the next screen

**Suggested order:** Build them in the order listed below. Each screen builds on the brand language established by the previous one, so by Screen 6 you'll have a fully coherent design system tested across the most important user moments.

**Estimated total time:** 4–8 hours of prototyping work across all six screens, depending on how many iterations you want.

---

## Screen 1 — Leader Registration

```
I'm prototyping the leader registration flow for "The Whole Mountain" — a 
discipleship multiplication platform by Jesus Said Go ministry. This is a 
mobile-first Progressive Web App (no app store; installs to home screen).

Build this as an interactive React prototype optimized for a 360px phone 
screen. The user is a Christian who has decided to start their own 
discipleship group of 2-4 people. They will lead the group through a 
37-lesson workbook study of Matthew 5-7 over approximately one year.

BRAND IDENTITY:
- Name: "The Whole Mountain" (a discipleship platform by Jesus Said Go)
- Tone: unhurried, pastoral, plain but reverent, never promotional
- Colors: Mountain Green (#2C3E2D) primary, Dawn Cream (#F5F2EC) background, 
  Trail Brown (#8B7355) accent, Slate Dark (#1A1F1B) body text
- Typography: Cormorant Garamond for headlines (italic for voice quotes), 
  Inter for body text. Generous line height (1.6+).
- Visual motif: the mountain — a stylized peak with optional small figure 
  on the slope. Path rendered as dashed line rising. Christ at the summit.

REGISTRATION FLOW STEPS (one screen per step):

Step 1 — Welcome
  Headline: "The Whole Mountain"
  Subtitle: "a discipleship platform by Jesus Said Go"
  Below that: a stylized mountain illustration with a tiny figure at base
  Below that, in italic Cormorant: "The standard is one and fixed for every 
    disciple; the next step is measured to each one."
  Single button: "Register your group"
  Secondary text link: "I have an invitation"

Step 2 — Age verification
  Headline: "How old are you?"
  Body: "The Whole Mountain is for adults 18 and older. We honor the 
    importance of discipling minors through families and local churches."
  Date of birth picker (mobile-native)
  Button: "Continue"

Step 3 — Basic info
  Headline: "Tell us who you are"
  Three fields, stacked, with labels above each:
    - Your name (required)
    - Email address (required)  
    - City and country (required, for the family tree)
  Helper text beneath the form: "We never share your information. We use 
    your email to send magic links — no passwords needed."
  Button: "Continue"

Step 4 — Consent
  Headline: "Before we begin"
  Three checkboxes:
    - I agree to the Terms of Service (link)
    - I agree to the Privacy Policy (link)
    - Send me ministry updates from Jesus Said Go (optional, unchecked by default)
  Button: "Create my account"

Step 5 — Group setup
  Headline: "Your group"
  Subtitle: "These details can be changed later."
  Fields:
    - Group name (optional, placeholder: "Your group will be named 
      'Sarah's group' if left blank")
    - Meeting day (dropdown: Sun-Sat)
    - Meeting time (time picker)
    - Meeting location (radio: In person / Online)
    - Language (dropdown: English / Spanish)
    - Optional: Co-leader email
  Button: "Set up the group"

Step 6 — Welcome to your group
  A small mountain illustration with one figure at the base
  Headline (italic Cormorant): "You are standing at the base of the mountain."
  Body: "Your group exists. The next step is to invite 2 to 4 people you 
    have already been praying for."
  Below in italic: "There is no rush. Settle in. Pray. When you are ready, 
    take the next step."
  Primary button: "Invite my first disciples"
  Secondary text link: "Not yet — show me my dashboard"

DESIGN CONSIDERATIONS:
- Each step should feel unhurried. Generous vertical spacing.
- Touch targets minimum 44x44px.
- No progress bar showing "Step 3 of 6" — the unhurried feel matters more 
  than completion anxiety.
- Buttons are solid Mountain Green with Ivory text, 8px border radius.
- The mountain illustration is the same simple form across all screens 
  where it appears.
- Build this as a clickable React prototype with proper state management 
  between steps. Use real form inputs.

Make it beautiful. Make it patient. The first impression should make a 
new disciple-maker feel they have arrived somewhere worthy of the work 
they are about to begin.
```

**Assumption questions to validate after prototyping:**

- Does the registration feel calm and dignified, or hurried and form-like?
- Does Step 1 (Welcome) feel like "arriving somewhere worthy," or just like an app login screen?
- Is Step 5 (group setup) overwhelming with too many fields, or right-sized?
- Does Step 6 (Welcome to your group) feel like a sacred moment of beginning?
- Would you, as a new leader, feel ready to invite people after seeing Step 6?

---

## Screen 2 — Leader Dashboard

```
I'm prototyping the leader dashboard for "The Whole Mountain" — a 
discipleship multiplication platform by Jesus Said Go ministry. This is 
the screen the leader sees every time they open the app. It is the most-
visited screen in the entire platform.

Build this as an interactive React prototype optimized for a 360px phone 
screen. Assume the user is John, a leader who has had his group going for 
12 weeks. He is currently on Lesson 12 of 37, with 3 active disciples 
(Sarah, Michael, and Jamal). His group meets Tuesdays at 7pm.

BRAND IDENTITY:
- Name: "The Whole Mountain"
- Tone: unhurried, pastoral, plain but reverent
- Colors: Mountain Green (#2C3E2D) primary, Dawn Cream (#F5F2EC) 
  background, Trail Brown (#8B7355) accent, Summit Gold (#D4A574) for 
  celebration moments only
- Typography: Cormorant Garamond for headlines/voice quotes (italic), 
  Inter for body

THE DASHBOARD HAS THREE ZONES (top to bottom):

Zone 1 — Action banner (top, conditional)
  Only appears when there's something needing attention. For this 
  prototype, show: "Tonight's meeting at 7pm" as a quiet card with the 
  next meeting time and a single action: "View Lesson 12."

Zone 2 — Primary focus (middle, always present)
  Card titled: "John's group" (group name)
  Below the title: small circles representing each member (Sarah, 
  Michael, Jamal). Each circle is just their initial or a small 
  profile icon if available.
  
  Current lesson display:
    Eyebrow text (small caps, Trail Brown): "LESSON 12 OF 37"
    Main text (Cormorant Garamond, size Headline 1): "The Salt and Light"
    Scripture reference (Inter, body): "Matthew 5:13-16"
  
  Primary action button: "Mark today's meeting complete"
  Below button, small text: "Last meeting: 7 days ago"

Zone 3 — Tree glimpse (bottom)
  Small horizontal strip showing:
    "Your spiritual family: 0 disciples" (since no one has graduated yet)
    With a small mountain icon and the text in Trail Brown
    Right side: "View tree →" link
  
  Beneath in italic Cormorant: 
    "When your group graduates, this is where the tree begins."

NAVIGATION:
At the very bottom of the screen, a tab bar with 4 tabs:
  - Home (current screen, highlighted with Mountain Green)
  - Tree
  - Lessons  
  - Profile

Each tab has an icon (use simple Phosphor-style line icons) and a label.

DESIGN CONSIDERATIONS:
- The dashboard is intentionally calm. No streaks, no badges, no points.
- Whitespace is generous between zones.
- Cards have 12px border radius, subtle 0.5px borders.
- The "Mark today's meeting complete" button is the only primary CTA.
- Show the screen on both a Tuesday (meeting day) and a Wednesday (day 
  after meeting) — toggleable so we can see how the action banner 
  appears/disappears.

Build a clickable React prototype where:
- Tapping "Mark today's meeting complete" shows a confirmation modal with 
  attendance toggles for each member and a "Save" button
- Tapping a member's name shows their profile in a modal
- Tapping the tree glimpse navigates to a placeholder tree screen
- Tabs are functional (show placeholder content for non-Home tabs)

Make it feel like a calm morning. The leader opens the app at 6:30am, 
takes a breath, sees what's coming today, and feels held — not 
overwhelmed.
```

**Assumption questions to validate after prototyping:**

- Does the dashboard feel calm or cluttered?
- Is the three-zone layout intuitive? Does your eye know where to start?
- Is "Mark today's meeting complete" obviously the primary action without being aggressive?
- Does the empty tree glimpse feel like a promise rather than a deficit?
- On a Tuesday (meeting day), is the action banner helpful? On a Wednesday, is the dashboard appropriately quiet?

---

## Screen 3 — Family Tree

```
I'm prototyping the family tree visualization for "The Whole Mountain" — 
the central feature of this discipleship platform. The tree shows a 
leader's spiritual lineage: their discipler above them, and their 
descendants (people they have discipled and people those people have 
discipled) below them.

Build this as an interactive React prototype optimized for a 360px phone 
screen. The tree must work in three states: empty (a new leader with no 
graduates yet), small (a few generations), and rich (multiple generations 
with many nodes).

BRAND IDENTITY:
- Same as previous screens: Mountain Green, Dawn Cream, Cormorant 
  Garamond + Inter

THE TREE'S VISUAL APPROACH:
The tree is rendered as a top-down org chart. The viewer's own node 
appears in the middle of the screen. Above are their ancestors (the 
person who discipled them, that person's discipler, etc.). Below are 
their descendants.

NODES:
Each node is a small circle (about 32px diameter) with a person's initials 
inside, with their first name and last initial below it (e.g., "Sarah J."). 
The viewer's own node has a thin Distant Blue ring around it to 
distinguish it.

Node colors:
- Mountain Green filled circle: active disciple (still in progress)
- Summit Gold filled circle: completed disciple (graduated from the workbook)
- Stone Light filled circle: memorial / forgotten

CONNECTING LINES:
1px dashed Trail Brown lines connecting parent to child nodes, evoking 
the dashed mountain path.

BACKGROUND:
A very faint mountain silhouette in Stone Pale color, positioned to anchor 
the tree to the brand metaphor. The mountain should be subtle — visible 
but not distracting.

STATE 1 — EMPTY TREE (new leader, no graduates yet):
Show just the user's own node in the center. Above it, the user's 
discipler (if any) — or empty space if they had no discipler in the 
system. Below it: an outlined dashed circle with the text "Your first 
disciple will appear here when they complete the workbook." 

In italic Cormorant beneath the tree: "Your tree begins here. The mountain 
stretches above you. When you have walked beside someone, they will appear."

STATE 2 — SMALL TREE:
Show a tree with:
- User in the center
- Their discipler one level above
- 3 of their disciples one level below (one Summit Gold, two Mountain Green)
- One Summit Gold disciple has 2 disciples of their own (next generation)

STATE 3 — RICH TREE:
A tree with 4 generations visible (one above the user, three below), 
roughly 12-20 nodes total. Some pan/zoom may be needed to see all nodes.

INTERACTIONS:
- Tapping a node opens a side panel (or modal) showing that person's name, 
  city, year they joined or graduated, and a "View their tree" button (for 
  navigating to their lineage if visible)
- Pinch to zoom (mobile gesture)
- Drag to pan
- A small stats card at the top of the screen showing one user-selectable 
  statistic, with a dropdown to switch:
    - "Total descendants: X"
    - "Generation depth: X"
    - "Active groups in your branch: X"
    - "Geographic spread: X cities, Y countries"

DESIGN CONSIDERATIONS:
- The tree must feel like an inspirational artifact, not a corporate org chart
- The faint mountain in the background is essential — it anchors the tree 
  to the brand metaphor and gives every node a sense of altitude
- Don't render the tree with sharp Material-Design-style boxes; use the 
  rounded circle nodes with their dashed connecting lines for a more 
  organic, gentler feel

Provide a toggle in the prototype to switch between the three states 
(empty, small, rich) so I can experience each one.

Make the tree feel like a sacred artifact. This is the most personal, 
most inspirational screen in the entire platform.
```

**Assumption questions to validate after prototyping:**

- Does the empty tree feel like a promise (something to come) or a deficit (failure)?
- In the rich tree state, can you navigate it intuitively on a phone?
- Does the faint mountain background work, or is it distracting?
- Do the node colors clearly communicate active vs. completed vs. memorial?
- Does the user-selectable statistic dropdown feel useful, or like clutter?

---

## Screen 4 — Invitation Acceptance

```
I'm prototyping the invitation acceptance flow for "The Whole Mountain." 
The user here is NOT a leader yet — they are someone who received an 
invitation email from a leader who wants to disciple them. They clicked 
the magic link in the email and landed on this flow.

This is the most emotionally significant moment in the entire platform: 
the moment a person says yes to being discipled.

Build as an interactive React prototype, mobile-first.

BRAND IDENTITY: Same as previous screens.

THE FLOW:

Screen 1 — Confirmation page
  At the top: a small mountain illustration with a single figure at the 
  base, looking up the path
  Headline (Cormorant Garamond): "You've been invited"
  Below: A card showing:
    - John's profile photo (or initials in Mountain Green circle if no photo)
    - "John Smith invites you to walk with him through the Sermon on 
      the Mount."
    - Group details: meeting day, time, language, expected start date
    - Optional: John's personal message (if provided)
  
  Below the card, in italic Cormorant:
    "John has prayed about this invitation. He chose you specifically. 
    Take a moment before you respond — there is no rush."
  
  Three buttons stacked, with generous space between:
    Primary (Mountain Green): "Accept the invitation"
    Secondary (outlined): "Maybe later — remind me in 30 days"
    Tertiary text link: "Decline (with respect)"

Screen 2 — Quick confirmation (only after Accept)
  Headline: "Before you begin"
  Body: "A few quick details so we can welcome you properly."
  Form fields:
    - Your name (pre-filled from invitation, editable)
    - Confirm you are 18 or older (checkbox)
    - I agree to the Terms of Service and Privacy Policy (checkbox)
  Button: "Join the group"

Screen 3 — Welcome
  A small mountain illustration with TWO figures partway up — one 
  representing the leader, one representing the new disciple
  Headline (italic Cormorant, Display 2 size): 
    "You are at the base of the mountain."
  Body (Cormorant): "John is walking beside you. The first meeting is 
    Tuesday, October 14th at 7pm."
  
  A small details section:
    - Lesson 1: The Beatitudes (Matthew 5:1-12)
    - Workbook: The Call to Radical Discipleship by Reuven Ross
      [Get your copy on Amazon →]
    - Meeting link / location
    - Add to calendar
  
  Below in italic Cormorant:
    "Settle in. There is no preparation needed. Bring yourself, and a 
    willingness to climb."
  
  Button: "I understand. See you Tuesday."

DESIGN CONSIDERATIONS:
- This flow should feel sacred. Slow it down. Generous spacing throughout.
- The "Accept the invitation" button is not aggressive — it is just clearly 
  the primary action.
- "Maybe later" is genuinely respected as a valid response, not buried.
- "Decline" uses the language "Decline with respect" — honoring the 
  invitee's autonomy.
- The leader's name (John) is shown but not their email or phone — 
  contact happens through the platform, not directly.

The invitation acceptance is the single most personal moment in the 
platform. The entire downstream relationship — months of weekly meetings, 
spiritual transformation, possibly a lifelong friendship — begins with 
this click. The design must honor that weight without being heavy-handed.

Make it feel like Sarah, on a Tuesday morning over her coffee, opens her 
email, sees John's invitation, clicks Accept, and feels: someone is 
walking with me. I am not alone in this.
```

**Assumption questions to validate after prototyping:**

- Does Screen 1 feel sacred or transactional?
- Is "Maybe later" given enough weight to feel like a respected option?
- Does the workbook purchase reminder feel helpful or pushy?
- Would you, as a new disciple, feel ready and welcomed after Screen 3?
- Is the leader's identity (John's name and photo) prominent enough to make this feel personal?

---

## Screen 5 — Disciple View

```
I'm prototyping the disciple view for "The Whole Mountain" — the dashboard 
a disciple (not a leader) sees when they open the app. This is intentionally 
much simpler than the leader's dashboard.

Build as an interactive React prototype, mobile-first.

BRAND IDENTITY: Same.

CONTEXT:
The user is Sarah, a disciple in John's group. She has been in the group 
for 12 weeks. She has attended 11 of 12 meetings. She is on Lesson 12 
along with the rest of the group. The next meeting is Tuesday at 7pm.

THE DASHBOARD HAS A SINGLE FOCUS — the current lesson and the next meeting. 
It is minimal because the disciple's relationship is primarily with the 
leader, not the platform. The platform just supports that relationship.

LAYOUT (top to bottom):

Top — greeting
  Quiet text: "Good morning, Sarah" (no exclamation marks anywhere in this 
  platform)

Current lesson card
  Eyebrow: "LESSON 12 OF 37"
  Main text (Cormorant Garamond): "The Salt and Light"
  Scripture: "Matthew 5:13-16"
  Memory verse in italic Cormorant on its own block:
    "You are the light of the world. A city set on a hill cannot be hidden."
    — Matthew 5:14
  
  Two options:
    Primary button: "Read the lesson"
    Secondary text link: "I am still working through last week's lesson"

Next meeting card
  Eyebrow: "NEXT MEETING"
  Main: "Tuesday, October 14th at 7pm"
  Location/link details
  Add to calendar link

Your discipler card
  Small profile of John (photo or initials) with his name
  "Your discipler"
  Quiet button: "Send John a message" (this opens email or messaging — 
  the platform doesn't host messaging directly)

Below all of the above, a section called "Your journey" with a small 
mountain illustration:
  Quiet text: "You have walked 12 of 37 lessons. The mountain stretches 
  on. Each step is grace."

NAVIGATION:
Bottom tab bar:
  - Home (current screen)
  - Lessons (browse all 37 lessons)
  - Profile
  
Note: No "Tree" tab for disciples until they themselves become leaders. 
This is intentional — the tree is a leader's tool. When the disciple 
graduates and starts their own group, this tab appears.

DESIGN CONSIDERATIONS:
- This dashboard has a SINGLE purpose: prepare the disciple for their next 
  meeting and remind them of where they are in the journey
- No streaks. No badges. No achievements. The achievement is the climbing 
  itself.
- The disciple does not see the leader's private notes about them. They 
  only see their own data.
- The "Send John a message" button opens the user's email app with John 
  pre-filled — the platform doesn't host messaging
- Generous vertical spacing. This screen has 4-5 cards, each well-spaced.

Build a clickable prototype where tapping "Read the lesson" opens a 
placeholder lesson reading screen, and the other actions open appropriate 
modals or placeholders.

Make Sarah feel: I know exactly what I'm doing this week. My discipler 
is John. The next step is clear. I am not behind. I am on the mountain.
```

**Assumption questions to validate after prototyping:**

- Does the disciple view feel like a sacred companion or a sparse to-do list?
- Is "Read the lesson" obviously the primary action?
- Does seeing John (the discipler) prominently make the relationship feel real?
- Is the memory verse treatment beautiful, or does it feel like decoration?
- Would you, as a disciple, open this app once a week and feel oriented and held?

---

## Screen 6 — Admin Dashboard

```
I'm prototyping the admin dashboard for "The Whole Mountain." The admin is 
the ministry founder (or eventually a small number of trusted regional 
coordinators). This is a power-user interface for monitoring the entire 
network of disciple-making groups.

Build as a desktop-first React prototype (admins typically use desktop), 
but it should also work on tablet. Mobile is acceptable for read-only 
viewing.

BRAND IDENTITY: Same colors and typography, but the admin dashboard can 
be more information-dense than user-facing screens.

CONTEXT:
The admin is logging in to see the state of the ministry. There are 
currently 247 active disciple-makers, 89 active groups, and groups exist 
in 18 countries.

THE DASHBOARD IS CUSTOMIZABLE VIA WIDGETS:
Show a default layout called "Hybrid" that combines operational and 
visionary widgets. Build the prototype so the admin can rearrange widgets 
(drag-and-drop optional, but the layout should feel designed for 
flexibility).

DEFAULT WIDGET LAYOUT (top to bottom, then left to right on wide screens):

Top row — operational queue (urgent items needing attention)
  Card titled "Needs your attention" (Mountain Green left border accent)
  List of 3-5 items, each with:
    - Type badge (e.g., "Parent-change request", "Abuse report", "Account 
      suspension review")
    - Short description
    - Action button: "Review"
  Empty state if no items: "All clear. The network is at rest."

Second row (2 cards side by side on desktop, stacked on mobile)
  Left card: "Aggregate stats"
    Three numbers in large Cormorant Garamond:
      - 247 — disciple-makers
      - 89 — active groups
      - 18 — countries
    Small comparison: "Up 23% from 12 months ago"
  
  Right card: "Network growth"
    A small line chart showing growth over the past 12 months
    Line in Mountain Green

Third row — world map
  Full-width card titled "Where we are"
  A simplified world map showing dots for group locations
  Dot size proportional to number of groups in that area
  Hover shows: "Brazzaville, Republic of Congo: 4 groups"

Fourth row (2 cards side by side)
  Left: "Recent events"
    List of recent significant events:
      - "A new generation began in Bamako, Mali" (3 days ago)
      - "Sarah J. graduated her first group in Houston, TX" (5 days ago)
      - "Group 'Brazzaville Wednesday' completed Lesson 24" (1 week ago)
    Each event has a small icon and timestamp
  
  Right: "System health"
    Email delivery rate: 99.4% (green check)
    Avg load time: 1.2s (green check)
    Error rate this week: 0.03% (green check)

Beneath the widgets, a horizontal strip:
  "Three layouts: Operations / Vision / Hybrid (current)"
  Each option is a small chip; tapping switches layouts

ADMIN ACTIONS:
A persistent right-side panel or top-right menu with admin functions:
  - View all leaders (link)
  - View all groups (link)
  - View family tree (network-wide)
  - View audit log
  - Manage settings
  - Export data (CSV / JSON)

DESIGN CONSIDERATIONS:
- The admin dashboard can be denser than user screens, but should still 
  use the brand's restrained aesthetic
- Use Mountain Green sparingly — most cards should be on Dawn Cream 
  backgrounds with subtle borders
- Numbers use Cormorant Garamond, large size, for that "published book" 
  feel rather than a typical analytics dashboard
- The world map is essential — it makes the global mission visible at 
  a glance
- The "Recent events" widget is the heart of the dashboard's emotional 
  impact — it lets the admin see what is happening on the ground

Build a clickable prototype where:
- Tapping any "Review" action opens a modal showing the full item
- The widget grid can be rearranged (or at least give the impression 
  that it could be)
- Switching layouts (Operations / Vision / Hybrid) genuinely rearranges 
  the widgets

The admin dashboard should make Dale (the founder) feel: I can see what 
is happening across the network in one glance. I can act on what needs 
me. I can rest in what doesn't need me.
```

**Assumption questions to validate after prototyping:**

- Does the dashboard balance operational (queue) and visionary (growth, map) appropriately?
- Are the three preset layouts (Operations / Vision / Hybrid) genuinely different and useful?
- Does the world map convey the global mission powerfully?
- Is the system information-rich without feeling cluttered?
- Would you, as the admin, feel oriented within 10 seconds of opening this dashboard?

---

## After all six are prototyped

You'll have six interactive mobile prototypes — links you can open on your phone, share with Beth, share with trusted disciple-makers, and eventually hand to your developer. The prototypes serve three purposes:

1. **Self-validation.** You experience the platform as a user would before any developer writes a line of code. If a screen doesn't feel right, you discover it now, not three months in.

2. **Stakeholder validation.** Beth, your advisors, and your West Africa partners can experience the platform on their own phones and give feedback. This is dramatically more meaningful than feedback on a written spec.

3. **Developer handoff.** The developer references the prototypes as the source of truth for visual intent. They see exactly what each screen should feel like. The "did I interpret this right?" loop is largely eliminated.

When all six are validated, the next step is to package everything — the developer specification, the brand document, the animation code, the prototype URLs — into the Claude Code handoff package (Step 4 of our sequence).

Soli Deo gloria.
