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

## Readability and home hero update — November 16, 2026

- Small navigation, labels, captions, notes, and controls now have a 12px minimum; former 12–13px supporting copy is 14px. Existing type at 14px and above retains its prior size.
- Computed heading and large numeric sizes were compared against the preceding Git version on all four pages, in English and Spanish at 320, 390, 768, 1024, and 1440px. No large-type size changes were found.
- Desktop navigation counters and mobile menu number markup were removed. Project/lot numbers and section indexes remain part of their content.
- Layout checks show no horizontal page overflow or hero control/card collisions; mobile and tablet spacing accommodates the larger copy and captions.
- The home hero now uses `puerta-del-sol-hero-hd.webp`, a sharper 1536 × 1024 AI-regenerated concept based on the supplied aerial, encoded as WebP without resizing. The preload matches the displayed asset. It is not an exact photographic restoration; detailed features and proposed lot outlines can differ. Original project/plan images remain unchanged.
- Home countdown, contacts, bilingual lot values, inquiry drafts/downloads, calendar, filters/details, subpage draft forms, navigation, language persistence, no-JavaScript reading, links, assets, and `/INTERDEC/` subpath checks passed after the update. No browser exceptions or failed asset requests were observed.

## Full visual and functional check — November 17, 2026

- Fixed the hero action/scroll-prompt overlap by placing content, project card, and bottom controls in separate grid rows/columns instead of competing absolute positions.
- Replaced the white navigation rectangle with a full-width translucent navy header that darkens on scroll. Switched header/footer to the supplied transparent logos, removing the beige-backed website mark.
- Removed decorative numbering; retained factual lot identifiers, counts, prices, and dates. Raised small text to at least 14px and supporting copy to 16–18px.
- Sponsors and project credits now sit on white, with all six sponsor marks visible, including a navy treatment of the white Top Texas Title mark. The mission/story section is blue.
- Added three 1254 × 1254 AI-enhanced realtor portraits as separate WebP assets, keeping supplied originals and the package unchanged.
- Replaced the company-story placeholder with bilingual mission copy, the office placeholder with visit-arrangement guidance, and the privacy placeholder with company contact information.
- Fixed Spanish countdown overflow at 320px and launch-fact intrinsic grid overflow. Aligned mobile-menu resize breakpoints with the desktop navigation; corrected the home menu's language-change accessible label.

### Verified

Local Chromium/Playwright checked all four pages in EN/ES at 320, 390, 768, 1024, 1280, 1440, and 1920px (56 combinations). No horizontal page overflow, header collisions, or hero action/project-card/scroll-prompt collisions were found. Desktop and phone screenshots were visually inspected, including sponsor logos, project credits, and the blue story.

Functional browser checks passed 21 groups with no JavaScript exceptions or failed HTTP requests: mobile navigation/Escape/inert behavior; language persistence; home tabs and keyboard controls; project, invitation, privacy and inquiry dialogs; countdown; calendar download with the correct ceremony instant; inquiry drafts/downloads/email-app links; inventory counts, filters, search, reset, empty state and lot details; Invest/Careers drafts; no-JavaScript readability; reduced-motion layout; post-event countdown and calendar hiding. No test messages were sent.

Static checks found no missing local assets/links/anchors, duplicate HTML IDs, or visible unfinished copy placeholders. JavaScript syntax and `git diff --check` pass. Checks used Chromium emulation, not physical devices. Direct GitHub Pages requests remain blocked by environment network policy; publish status is checked through the repository's public Actions page when available.
