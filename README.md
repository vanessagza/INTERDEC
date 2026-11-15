# INTERDEC Developers website

Portable, bilingual website for **INTERNATIONAL TERRA DEVELOPING CORP, LLC**, branded as **INTERDEC Developers**. It uses plain HTML, CSS, and JavaScript with locally hosted fonts and images. No dependency installation, build command, database, API key, or paid service is required.

The site uses INTERDEC's navy identity and **`#C9A24A` gold**, sampled directly from the supplied November 2026 lot package. Relative links work both at a domain root and under the GitHub Pages `/INTERDEC/` path.

## Preview locally

1. Download or clone the complete repository. If it arrives as a ZIP, extract it before opening any files.
2. Open `index.html` in a current browser. Keep all the HTML, CSS, and JavaScript files together, with the entire `assets` folder beside them.
3. Alternatively, if Python 3 is installed, open a terminal in the repository folder and run `python3 -m http.server 8000`. Open `http://localhost:8000/` in your browser. Press **Ctrl + C** in the terminal to stop the server.
4. Try the EN/ES switch, project tabs, countdown with seconds, invitation, calendar download, lot filters and details, and inquiry previews. Also visit Available Lots, Invest, and Careers.
5. Copying text can be restricted when opening a local file. Downloading the draft remains available; clipboard support is generally better on a served page or HTTPS site.

## Files and pages

| File | Purpose |
| --- | --- |
| `index.html` | Home page, project overview, nearby amenities, project team, event, FAQ, and contact section |
| `available-lots.html` | Filterable lot inventory and supplied proposed site plan |
| `invest.html` | Builder/lot program, launch pricing, financing example, and project inquiry |
| `careers.html` | Careers introduction and expression-of-interest inquiry; no unconfirmed vacancies are advertised |
| `content.js` | Company contacts, project overview settings, pricing descriptions, event date, and source package path |
| `app.js` | Home-page language switching, tabs, countdown, dialogs, calendar, and inquiry drafts |
| `effects.js` | Optional scroll and pointer enhancements on the home page |
| `pages.js` | Shared subpage language, navigation, and local inquiry-draft behavior |
| `lots.js` | Lot filters, result counts, details, and lot-specific email drafts |
| `styles.css` | Base typography, layouts, components, and responsive behavior |
| `design.css` | Architectural styling, gold accents, home-page effects, and responsive refinements |
| `pages.css` | Shared styling for the new pages |
| `lots.css` | Inventory cards, filters, plan, and detail styling |
| `assets/images/package/` | Images extracted from the supplied lot package |
| `assets/documents/puerta-del-sol-lot-package-nov-2026.pdf` | Original eight-page package, available to visitors |
| `assets/fonts/` | Locally hosted fonts and their licenses |
| `ASSET-SOURCES.md` | Image provenance and factual sources |
| `QA-NOTES.md` | Validation notes and limitations |

## Company contacts and remaining placeholders

Vanessa supplied **contact@interdecgroup.com** and **+52 81 1414 5035** as INTERDEC's company contacts. The phone's machine-readable form is `+528114145035`. The project sales team's US phone numbers remain separately labeled.

Start with `content.js` when updating company details. Preserve quotation marks and commas. The company history/story and office address remain placeholders because that information has not been provided. `company.storyEs` can hold the Spanish story; otherwise the English story is reused in both languages.

For page copy, edit the English text and its matching `data-es` Spanish attribute. Some facts repeat across pages; when changing prices, inventory, terms, or event information, review all affected pages and both languages. Keep existing IDs and control attributes intact.

## Project facts and source limits

The project information comes from the supplied **Puerta del Sol — Lot & Builder Package, November 2026**, the financing flyer, and the original groundbreaking invitation.

- Puerta del Sol is in Donna, Texas, Hidalgo County, at Salinas Blvd & Mile 10 N Rd.
- The package describes 49 residential lots and 3 commercial lots. Its November 2026 snapshot lists 40 residential lots available and lots 18–26 reserved. Commercial lots 50–52 are listed as available. The website is a static snapshot, not a live reservation system.
- Typical residential dimensions in the inventory table are 42.5′ × 129.5′, approximately 5,504 sq ft. Table exceptions are lots 18 (8,117 sq ft), 19 (8,638 sq ft), and 29 (6,940 sq ft). Commercial lots 50, 51, and 52 are 16,150, 11,702, and 16,796 sq ft respectively.
- Some dimensions printed on the proposed plan image differ from the inventory table. Lot details preserve those source differences where applicable. Confirm final recorded dimensions with the project team before purchase.
- Launch pricing is $55,000 USD per cash lot and $57,000 USD per financed lot, with first-10-lot conditions described in the package. Prices are reviewed after the first 10 cash lots sell; the site does not track how many promotional lots remain.
- The program matches cash purchases with an equal number of financed lots, starting at two cash lots, and caps financed lots at 15. Planned finished, recorded delivery is April–May 2027; that is a project target, not a verified completion date.
- The PDF's example uses April 10, 2027 delivery: $1,000 deposit per financed lot at signing; no payments in May, June, and July 2027; eight $1,250 payments from August 10, 2027 through March 10, 2028; final balance due April 10, 2028. The eight payments are not the full lot price. A financed lot must be paid off before an early home-sale closing. The document does not supply an APR or promise returns.
- The proposed 1,250 sq ft, 3-bedroom/2-bath home and near-$205,000 finished sale price are package targets, not an included completed home or guaranteed resale value.
- The materials credit AVIG Development as developer, and Allen Lozano BIG Realty and INTERDEC with bringing the project together. They do not establish INTERDEC as sole owner/developer.
- The ceremony is announced for Wednesday, December 2, 2026 at 10:30 AM in Donna (CST), equivalent to 16:30 UTC. The countdown uses that instant and includes seconds. No end time is invented. After the date passes, event wording changes and the calendar action is hidden.

The home hero and project image now use the supplied aerial with a proposed lot-plan overlay. It must not be described as a photograph of a completed development. The separate nearby-retail image shows the surrounding retail corridor; its shopping-center lot labels are not Puerta del Sol inventory. See `ASSET-SOURCES.md` for asset details.

## Contact and careers forms

Forms prepare a local draft for review, download, or opening in the visitor's email application. They do **not** silently submit data, deliver email automatically, store applications, or reserve a lot. The visitor sends the message from their own email application to the configured company address. Careers accepts expressions of interest without inventing open positions or employment terms.

Automatic submission would require a separate form service or backend integration, followed by updated privacy wording and delivery/error testing. Never put private email-service keys in browser JavaScript.

## Publish or move to another host

The current repository is `vanessagza/INTERDEC`, with a GitHub Pages preview at `https://vanessagza.github.io/INTERDEC/`.

1. Upload or commit **all four HTML pages**, **all CSS and JavaScript files**, and the **entire `assets` folder**, including `images/package/`, `documents/`, and `fonts/`.
2. Preserve the folder names and capitalization. Do not upload only `index.html` or nest the site inside an extra folder.
3. For GitHub Pages, use **Settings → Pages → Deploy from a branch → main → /(root)**. An empty `.nojekyll` file can optionally bypass Jekyll processing; it is not currently included.
4. Wait for the Pages deployment to finish in the repository's **Actions** tab. Open the Pages URL and test every page, both languages, downloads, and draft actions. Hard-refresh if an older version is cached.
5. For another static host, upload the same files to its public web directory. No application server or build command is needed. Enable HTTPS and test links at the final domain.
6. Connect the GoDaddy domain only when the hosting choice and DNS change are authorized. Domain purchase does not require GoDaddy hosting. The social-preview image URL in `index.html` may need updating to match the final domain.

## Motion, accessibility, and privacy

The site retains keyboard controls, labeled forms, native dialogs, reduced-motion support, and English/Spanish switching. Desktop pointer effects are disabled for touch input. Motion follows native scrolling; there is no scroll hijacking or replacement cursor. The typography band moves only while scrolling, and reduced-motion settings disable decorative motion.

Language preference can be stored locally in the browser. There are no analytics scripts, embedded maps, third-party font requests, or advertising cookies. Maps open when a visitor follows a directions link. Review the company privacy text before final launch and update it if integrations change.
