# The Whole Mountain — Interactive Mockups

Six interactive HTML prototypes for the most consequential screens of the discipleship platform.

## What's in this folder

- **index.html** — start here. Links to all six mockups.
- **1-leader-registration.html** — six-step registration flow
- **2-leader-dashboard.html** — three-zone leader dashboard (with day toggle)
- **3-family-tree.html** — family tree in three states (empty, small, rich)
- **4-invitation-acceptance.html** — three-step invitation acceptance flow
- **5-disciple-view.html** — minimal disciple dashboard
- **6-admin-dashboard.html** — admin command center
- **shared.css** — shared brand styles (required; do not delete)

## How to use them

### View on your own computer

Double-click `index.html`. It opens in your default browser. Click any mockup card to open that prototype.

### View on your phone

Two options:

1. **Email them to yourself**, then tap any file in the email on your phone to open it
2. **Drop the entire folder into iCloud, Dropbox, or Google Drive**, then open `index.html` on your phone

### Share with someone else

Three options, in order of friction:

1. **Email the folder as a zip.** Most email clients accept zip files. Recipients unzip and double-click `index.html`. (For best results, keep all 8 files together — they reference each other.)
2. **Share via cloud drive.** Upload the entire folder to Google Drive, iCloud, Dropbox, or similar. Share the folder link. Recipients open `index.html` in their browser.
3. **Host them online.** Drag the folder onto netlify.com/drop (free, takes 30 seconds, produces a real shareable URL). This gives you a link anyone can open without downloading anything.

### Host them at a permanent URL (recommended for stakeholder review)

If you want a real URL to send to Beth or your advisors:

1. Go to https://app.netlify.com/drop
2. Drag the entire `mockups` folder onto the page
3. Wait about 10 seconds
4. You'll get a URL like `https://amazing-name-12345.netlify.app/`
5. Send that URL to anyone — it works on any device with a browser

Free, no account required for the first deployment, and the URL stays live indefinitely.

## What the mockups do

Each mockup is a self-contained working prototype. The interactions are real:

- **Registration** — tap through six steps, fill in fields, see the welcome screen
- **Dashboard** — toggle between meeting-day and day-after states; tap the tree glimpse to navigate to the family tree mockup
- **Family tree** — toggle between empty, small, and rich states; change the displayed statistic
- **Invitation** — step through the three-screen acceptance flow; the welcome screen links to the disciple view
- **Disciple view** — see what Sarah sees daily
- **Admin dashboard** — operational queue, stats, world map, recent events, system health

## What they are not

These mockups are reference visuals, not the production application. They don't have a real backend, real authentication, or persistent data. They show what each screen should look and feel like.

The developer will build the actual production app referencing these as the source of truth for visual intent. The brand foundation document defines the principles; these mockups show how to apply them.

## Brand foundation

These mockups use:

- **Mountain Green** (#2C3E2D) — primary brand color
- **Trail Brown** (#8B7355) — accent
- **Dawn Cream** (#F5F2EC) — background
- **Cormorant Garamond** — headlines and voice quotes
- **Inter** — body text
- **Tabler Icons** — utility icons

Both fonts and the icon library load from CDN at page open. They require an internet connection on first view but cache in the browser after that.

## Feedback

If anything in a mockup feels wrong — too cluttered, off-tone, missing something — note it and bring it back to the original conversation. The mockups are intended to surface issues before any developer writes code. That's their job.

Soli Deo gloria.
