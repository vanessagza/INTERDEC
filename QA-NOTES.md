# Website verification

Verified on November 15, 2026, in Chromium using the local website preview.

## Passed

- Desktop rendering with the supplied logo, locally loaded fonts, hero image, and project photography.
- Phone layouts in 320px and 390px iframe viewports and a tablet layout in a 768px iframe viewport. These are real CSS viewport checks, not physical-device tests.
- No horizontal page overflow at the checked phone and tablet widths, including the Spanish translation.
- English/Spanish switching, with the selected project type preserved.
- Residential/commercial tab switching and corresponding inquiry-interest selection.
- Mobile navigation opens, follows its project link, and closes.
- The development accordion opens the selected step and closes the previous step; FAQ answers expand.
- The privacy dialog opens and closes with Escape. No application console errors were observed.
- Project details dialog includes the supplied facts and the project-partnership placeholder.
- Original invitation opens in a native dialog and has a download link.
- Calendar button produces a downloadable `.ics` file for the announced event.
- The downloaded calendar contains `DTSTART:20261202T163000Z`, equivalent to 10:30 AM in Donna, and no invented ceremony end time.
- Required contact fields and local inquiry preview work. A test visitor's commercial-lot choice is preserved in the draft.
- Copy and downloadable-text actions work in the served preview. No inquiry is sent during this flow.
- Local asset references and in-page anchors resolve; IDs are unique.
- HTML, CSS, JavaScript, the hero image, and local fonts load successfully in the browser preview.
- JavaScript syntax checks pass for `app.js` and `content.js`.

## Still to confirm with the company

Company contact details, company story, precise project role and partners, approved photography, lot dimensions and prices, sales availability, the event entrance, and the final privacy text.

The live GoDaddy domain, final hosting provider, external email delivery, and a physical mobile device have not been tested. The default inquiry form deliberately prepares a local draft. It requires a configured real email address to offer the visitor an email-app handoff; server-side form delivery is a later integration.

## Architectural style update — November 15, 2026

Additional Chromium checks after adding `design.css`, `effects.js`, and decorative markup:

- English and Spanish at 320, 390, 700, 768, 900, 1024, 1280, 1440, and 1920px: no horizontal page overflow or hero-control/project-card collisions. The English headline was refined to stay on one line per phrase at 320px.
- Floating navigation, keyboard-operated project tabs, project/invitation dialogs, Escape closing, mobile navigation, language persistence, inquiry preview, and inquiry text download passed.
- Calendar downloads in both languages retain `DTSTART:20261202T163000Z`, with no invented end time. Process accordion and FAQ interactions passed.
- Pointer lighting, subtle button movement, image tilt, and scroll-linked typography passed. Pointer effects are disabled on touch/mobile; reduced-motion settings disable effects and immediately show content, including when the setting changes while the page is open.
- The site and new assets load under the `/INTERDEC/` repository subpath. No JavaScript exceptions or failed asset requests were observed in these checks. JavaScript syntax checks passed.
- Reading content and the no-script notice remain available with JavaScript disabled. With only the optional enhancement script unavailable, the application retains its existing controls.

These checks used local Chromium browser emulation, not physical devices or other browser engines. The updated files have not been deployed to GitHub Pages or final hosting as part of this style update. No company/project facts or image assets changed.
