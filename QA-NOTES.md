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
