# Website verification

## November 2026 project-package update

Verified November 15, 2026 using local Chromium browser emulation. The site remains plain HTML/CSS/JavaScript, with no build or dependency installation.

### Passed

- All four pages (`index.html`, `available-lots.html`, `invest.html`, `careers.html`) in English and Spanish at 320, 390, 768, 1024, and 1440px: no horizontal page overflow or browser exceptions.
- Exact PDF gold `#C9A24A`, supplied aerial/proposed-plan images, portraits, partner logos, and the downloadable original eight-page PDF load correctly.
- Countdown includes seconds, updates once per second, and hides the countdown/calendar action after the announced event; no negative values.
- Company email is `contact@interdecgroup.com`; company phone is `+52 81 1414 5035`. Project sales contacts remain separately labeled.
- Residential/commercial project tabs and their translated sizes/pricing work. Homepage inquiry previews, text downloads, calendar downloads, dialogs, and email-app handoff work. Calendar retains `DTSTART:20261202T163000Z` with no invented end time.
- Available Lots contains all 52 records. Filters return 43 available total, 40 available residential, 9 reserved residential, and 3 commercial. Lot search, no-results state, reset, exceptions, proposed-plan view, keyboard details, and lot-specific email drafts work.
- Inventory identifies lots 18–26 as reserved in the November 2026 package. Detailed records preserve differences between the inventory table's typical dimensions and certain site-plan area annotations.
- Invest preserves the published launch limits, cash matching, $1,000 deposit, 12-month term, dated payment example, eight $1,250 installments, final balance, and early-sale payoff requirement. Planned delivery and target home pricing are labeled as package projections/concepts.
- Careers contains a general-interest inquiry form without invented vacancies. Careers and Invest validate inputs, prepare local previews, download text, and address email-app drafts to the company inbox. No test message was sent.
- Cross-page language persistence, mobile navigation, native dialogs, Escape closing, keyboard tabs, and reduced-motion behavior pass.
- Root and `/INTERDEC/` subdirectory serving both work; local links, assets, anchors, and unique HTML IDs were checked. No failed HTTP asset requests were observed.
- No-JavaScript visitors can read the pages and all 52 lot records; dynamic filters, translation controls, and draft previews require JavaScript. Form submit buttons remain disabled until their scripts load.
- JavaScript syntax and `git diff --check` pass.

### Limits and remaining company content

Inventory and pricing are a November 2026 snapshot, not a live booking system. Confirm current lot status, final plat dimensions, launch eligibility, and contract terms with the project sales team. The supplied aerials contain proposed lot overlays and do not show completed construction.

Company history, office address, specific career openings, and final privacy policy remain unprovided. Forms prepare local drafts and open the visitor's email application; automatic form delivery and mailbox receipt have not been tested or implemented.

Checks used Chromium emulation, not physical devices or other browser engines. Direct access to the live GitHub Pages URL is blocked by this environment's network policy; deployment status is checked through GitHub Actions. GoDaddy DNS and final hosting have not been changed.
