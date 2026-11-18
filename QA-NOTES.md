# Website verification

## November 2026 project-package update

Verified November 15, 2026 using local Chromium browser emulation. The site remains plain HTML/CSS/JavaScript, with no build or dependency installation.

### Passed

- All four pages (`index.html`, `available-lots.html`, `invest.html`, `careers.html`) in English and Spanish at 320, 390, 768, 1024, and 1440px: no horizontal page overflow or browser exceptions.
- Exact PDF gold `#C9A24A`, supplied aerial/proposed-plan images, portraits, partner logos, and the downloadable original eight-page PDF load correctly.
- Countdown includes seconds, updates once per second, and hides the countdown/calendar action after the announced event; no negative values.
- Company email is `info@interdecgroup.com`; company phone is `+52 81 1414 5035`. Project sales contacts remain separately labeled.
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

## Follow-up image, contact, and motion checks — November 17, 2026

- Company email and all fallbacks, privacy text, no-JavaScript text, and inquiry links changed to `info@interdecgroup.com`; no old address remains in active HTML/JS/docs.
- Home ribbon now immediately follows the company intro and precedes projects. Desktop menu gaps increased with no header collision at the desktop breakpoint.
- Home hero image now pans visibly with the pointer and has stronger lighting; the featured project image has stronger tilt and zoom. Reduced-motion, mobile touch, and wide touch disable these effects.
- All three subpages use new photo backgrounds and matching image preloads. Careers puts the couple on the right; Available Lots removes street names and annotations from the decorative plan backdrop.
- Invest displays the separately enhanced wide aerial with less sky and no letterboxing. Its Top Texas Title mark is visible. Mobile investment statistics now stack to avoid crowding.

The repeated 21-group functionality suite passes with no JavaScript exceptions or failed requests. Extra checks confirm all new hero assets return HTTP200, matching preloads, decoded project imagery, ribbon order, pointer-driven transforms, stronger featured-image tilt, and motion disabled for reduced-motion and both narrow/wide touch. CSS checks cover72 page/viewport/language combinations, including widths320,390,768,1100,1101,1152,1280,1440,1920 in English and Spanish. Desktop and phone screenshots were visually checked for text readability, photo composition, statistics spacing, and image framing. Syntax and diff checks pass. No test messages sent.

## Continuous ribbon and compact mobile navigation — November 17, 2026

- Replaced the scroll-driven ribbon shift with a slow80-second linear loop. Four identical groups provide continuous coverage; the loop moves by exactly one group's width. The band continues moving without scrolling or pointer input and pauses offscreen, in a hidden tab, and for reduced-motion preferences.
- Replaced the full-screen mobile menu with a compact translucent navy dropdown, readable sans-serif links, and no arrows. Landscape uses two columns. Existing Escape/link/resize dismissal remains, and tapping outside now closes the menu.
- Audited all company copy: no visible unfinished content placeholders remain. The office address, commercial lot prices, and specific career openings still use general substitute wording. Optional factual history and a company-authored privacy policy can be added later. The current mission story and site-practices privacy explanation are complete.

Verified24 menu combinations (all4pages in English/Spanish at320×568,390×844,667×375): all links fit without internal menu scrolling, no arrows, no browser exceptions, and toggle/Escape/outside-tap/desktop-resize dismissal restores the page's interaction. Screenshots confirm compact glass styling. Browser checks confirm continuous ribbon movement while scrollY is unchanged, equal repeat-group widths/content, a seamless one-group loop, offscreen pause, and reduced-motion animation disabled. JavaScript syntax and diff checks pass.

## Consistent navigation and final content cleanup — November 17, 2026

All four mobile menus now contain the same seven links and bilingual labels: Projects, Our approach, The company, Available lots, Invest, Careers, and Get in touch. Home-section links from secondary pages explicitly target `index.html#…`; the current secondary page is marked with `aria-current`. Navigation opens with a subtle260ms fade/slide/scale entrance, disabled for reduced-motion preferences.

Removed the office/visits block and unused office configuration/rendering. Careers now offers a complete invitation to connect professionally without the no-vacancies/general-interest disclaimer or unprovided job requirements. Its existing form and email-draft/download behavior remain intact.

Targeted Chromium checks passed24 mobile combinations (four pages × English/Spanish ×320×568,390×844,667×375): identical seven-link labels and correct destinations, all items fit without menu scrolling, Escape/outside-tap/desktop-resize restores page interaction, entrance animation restarts on reopening, and reduced-motion disables animation. Home's office/visits block is absent. Careers inquiry preview, company email link and text download pass at all three sizes. No browser exceptions. Static asset/link/fragment/unique-ID checks, JavaScript syntax, and diff checks pass.

## Eight-link glass menu reveal — November 17, 2026

Added Home/Inicio as the first mobile menu item on all four pages. Replaced the basic popup with a500ms circular reveal from the toggle, a brief light sweep, and staggered links finishing within610ms. Dismissal uses a180ms circular fold; it snapshots the current clip/transform so closing during the opening animation does not flash the fully open panel. Reopening cancels pending hides. Link navigation, desktop resize and dialog opening dismiss immediately. Reduced-motion preferences disable all panel/link/sheen motion and hide immediately. Small portrait screens use44px rows to fit all eight links plus the tagline.

Targeted Chromium checks passed24 page/language/viewport combinations at320×568,390×844,667×375 in EN/ES: correct eight labels/links, no menu scrolling/clipped items, opening/stagger/exit animation, quickclose/reopen/toggle handling, Escape/outside/link/resize clearing page inert state, and immediate reduced-motion behavior. Early-close snapshot continuity was verified on all four pages. No browser exceptions. Opening/final screenshots were visually inspected; JavaScript syntax and diff checks pass.

## PDF download, location, and compact lot inventory — November 18, 2026

- Added a dedicated Home download section with save/open actions for the unchanged original eight-page PDF, linked from the featured project and footer. Download metadata shows the approximate decimal file size (2.5MB).
- Expanded page-3 location material into an image-led section: address, city/county, schools, I-2/US83 access and exactly nine stores listed within1.4miles. Added a1536×1024 AI-enhanced retail illustration, labeled and linked to the original.
- All52 cards show package measurements directly. The46 supplied width/depth pairs are42.5′×129.5′ with approximately5,504sqft. The six area-only lots retain their published areas without invented linear dimensions. Detail dialogs preserve14 differing proposed-plan annotations alongside inventory-table facts.
- Lots18–26 are reserved. The default filter now displays all52 lots so reserved lots are immediately visible; available-only returns43 (40residential +3commercial), reserved-only returns9.
- Cards now measure about174–178px tall, with2–6 columns by viewport width and14px supporting text.

Passed104 English/Spanish lot-dialog checks for52 source records: width/depth, area, status, differing plan rows and email drafts. Search, reset, empty state and filter counts pass; the final all-statuses default/reset was separately verified in both languages. At320,390,768,1440px in EN/ES there is no page/card text overflow. Location/store/fact/image checks pass at all those widths. Downloaded PDF bytes exactly match the repository original (2,475,515bytes,8pages; SHA256625551561512d259b6a7e10710011c2fe7f662f606b88d67c5971371e2cae7be); browser-open action works. No browser exceptions or failed asset requests. Desktop/phone screenshots visually inspected. Static local-link/asset/fragment/unique-ID checks, JavaScript syntax, and diff checks pass.

## Shared subpage entrances and photo effects — November 18, 2026

Available Lots, Invest, and Careers now load the shared effects controller. Hero titles use Home's staggered titleUnfold entrance, with supporting text and actions following in sequence. Section headings reveal as they enter view. Hero photos follow the desktop pointer with image depth and a warm spotlight. Invest's project aerial and Available Lots' plan have dedicated hover frames, with captions/links outside the moving layer; full images remain untransformed at rest. Versioned script/style URLs refresh the changed assets for existing visitors.

Passed24 final-layout comparisons (three subpages × EN/ES ×320/390/768/1440px): original hero/heading dimensions retained, text fully visible after entrance, no horizontal overflow. Pointer movement/spotlight/reset pass on all three heroes; photo tilt/light/reset pass on both image frames. Full plan remains contained and untransformed at rest. Reduced motion shows text immediately and disables effects; narrow and wide touch have no pointer effects; no-JavaScript reading passes. Twelve controls smoke groups verify eight-link menus, inventory filters/reset/counts, inquiry previews, email links and downloads. Home hero/featured-image/ribbon effects remain functional. No browser exceptions or failed assets. Static links, assets, query-versioned resources, fragments, unique IDs, syntax and diff checks pass.

## Direct Web3Forms submissions — November 18, 2026

Home, Invest and Careers now share `forms.js` for direct JSON POST submissions to Web3Forms. The user-supplied public client access key is configured in `content.js`; its receiving address is controlled and verified in Web3Forms and must be info@interdecgroup.com. No private mailbox password or SMTP credential is used. Form buttons no longer open an email application or a local draft dialog. Lot inquiries navigate to the website form with a validated lot parameter, visible lot context and the correct residential/commercial interest.

Added client validation, trimmed values, reply-to email, form-specific subjects, a spam honeypot, accessible bilingual status messages, pending/duplicate protection and a20-second abort timeout. Controls are disabled during submission. Success requires HTTP success plus a boolean `success:true` response; only confirmed success resets the fields. Failure, timeout, malformed responses and network errors preserve the message and allow retry. Privacy notices now describe submission through Web3Forms and link the provider's privacy page. Versioned scripts/styles avoid stale cached draft handlers.

Mocked Playwright checks passed across three forms × EN/ES ×390/1440px. Verified required fields, invalid email, whitespace, honeypot, key presence without logging its value, reply-to/subjects/interest/optional fields, success/reset and no draft/mailto navigation. Error checks cover false/nonboolean success, HTTP400 despite successflag,429, malformed JSON, network failure and simulated timeout; duplicate prevention, locale changes, preserved values and retries pass. Lot18/50 context passes in both languages. No-JavaScript manual contact fallbacks, all four menus and Home/Invest photo effects pass. No browser exceptions or failed local assets. Static references, query-versioned assets, anchors, IDs, JS syntax and diff checks pass.

No real test email was sent. This environment blocks direct access to api.web3forms.com, so live provider acceptance and mailbox receipt remain unverified. After deployment, submit a test on the public site and confirm it reaches the mailbox associated with the verified Web3Forms key.

## Sales Team, company contact and exact project directions — November 18, 2026

Added `sales-team.html` with English Big Realty Sales Team and Spanish Equipo de Ventas Big Realty headings, shared hero/text/photo effects, the three existing realtor profiles and a new Bernardo Diaz profile. Bernardo is Project Manager / Gerente de Proyecto, phone +1 (956) 588-8227, with an intentionally blank square photo area. Home now has a compact team introduction instead of individual profiles; project-participant credits remain on the team page. The current company phone and all no-JavaScript fallbacks use Bernardo's number; the three realtor phone numbers are unchanged.

Prominent directions links use the exact user-supplied Google Maps pin throughout Home, Available Lots, Invest, Careers and Sales Team, including the Home location/contact sections, event and lot-plan section. The calendar includes the same URL with its original ceremony date unchanged. Mobile navigation is consistent across all five pages with nine links, and desktop navigation starts at1200px to fit the additional team link. The new bottom inquiry form shares the existing Web3Forms controller and privacy notice.

Passed100 responsive/language CSS checks and50 page-content cases with no overflow, header collisions or old-phone references. Thirty mobile menu cases at320×568,390×844,667×375 in EN/ES fit all nine items without scrolling; dismissal, resize and inert clearing pass. Exact1199→1200 breakpoint checks pass on all five pages. Profiles, roles, phones, blank photo area, no-JavaScript contact fallbacks, new hero effects and profile reveals pass. All four call rows fit at1200px with SVG icons. Sales Team form validation/error/retry/success passes mocked submissions at390/1440 in EN/ES; no real emails were sent. Static assets, links, query versions, anchors, unique IDs, syntax and diff checks pass. Existing PDF/lot facts remain unchanged.

Pending item: the newly pasted green annotated plan is visible only as a chat preview, with no downloadable original exposed to the workspace. It has not been regenerated, traced, substituted or added as a guessed measurement source. Its addition awaits the original JPG/PNG/PDF file or direct download link, requested from the user. All other requested changes are included in this release.

## Uploaded lot plan added — November 19, 2026

Resolved the pending image item: Vanessa uploaded `assets/images/land.jpg` in commit ff95185. Added this exact 1280 × 1118 JPEG as the primary image in Available Lots' `#site-plan` section, positioned before the inventory and linked from the hero. Visitors can open the full-size image or download it; the original PDF plan remains available separately. The drawing is displayed uncropped, including on hover, and has not been regenerated, resampled or altered. Existing inventory measurements/statuses are unchanged and labeled as coming from the November 2026 package.

Passed EN/ES browser checks at 320, 390, 768 and 1440px: image HTTP200 and natural dimensions, correct uncropped aspect ratio, full-size new tab, accessible localized link label, correct download filename and original bytes, no page overflow, correct section order and hero anchor. Menu and inventory smoke checks pass with 52 lots and lots18–26 reserved. Removed unsupported Unicode arrow glyphs in the new section in favor of an SVG/plain label. Static links/assets/anchors/IDs and diff checks pass.

The downloaded and displayed source matches the user-uploaded file byte for byte: SHA256 a17685992be8f9bd7e5bf5107ca29155c1435520b515fb0cb76faea186711b1e. This image request is now complete.
