# INTERDEC Developers website

Portable, bilingual website for **INTERNATIONAL TERRA DEVELOPING CORP, LLC**, branded as **INTERDEC Developers**. It uses plain HTML, CSS, and JavaScript with locally hosted fonts and images. No dependency installation, build command, or database is required. Contact forms use Web3Forms for direct message delivery.

The site uses INTERDEC's navy identity and **`#C9A24A` gold**, sampled directly from the supplied November 2026 lot package. Relative links work both at a domain root and under the GitHub Pages `/INTERDEC/` path.

## Preview locally

1. Download or clone the complete repository. If it arrives as a ZIP, extract it before opening any files.
2. Open `index.html` in a current browser. Keep all the HTML, CSS, and JavaScript files together, with the entire `assets` folder beside them.
3. Alternatively, if Python 3 is installed, open a terminal in the repository folder and run `python3 -m http.server 8000`. Open `http://localhost:8000/` in your browser. Press **Ctrl + C** in the terminal to stop the server.
4. Try the EN/ES switch, project tabs, countdown with seconds, invitation, calendar download, lot filters and details, and form validation. Also visit Available Lots, Invest, and Careers.
5. Use the served site or HTTPS deployment when checking form delivery. Message submission requires network access to Web3Forms; email and phone links remain available as direct contact options.

## Files and pages

| File | Purpose |
| --- | --- |
| `index.html` | Home page, project overview, nearby amenities, project team, event, FAQ, and contact section |
| `available-lots.html` | Filterable lot inventory and supplied proposed site plan |
| `invest.html` | Builder/lot program, launch pricing, financing example, and project inquiry |
| `sales-team.html` | Bilingual Big Realty Sales Team, realtor/project manager contacts, project directions, and direct inquiry form |
| `careers.html` | Evergreen invitation to connect professionally with INTERDEC and introduce your background |
| `content.js` | Company contacts, project overview settings, pricing descriptions, event date, and source package path |
| `app.js` | Home-page language switching, tabs, countdown, project/privacy dialogs, and calendar |
| `effects.js` | Shared text reveals, photo depth, pointer lighting, and Home ribbon behavior |
| `pages.js` | Shared subpage language and navigation |
| `forms.js` | Shared Web3Forms submission, validation, bilingual status feedback, and lot inquiry prefilling |
| `lots.js` | Lot filters, result counts, details, and links to the website inquiry form |
| `styles.css` | Base typography, layouts, components, and responsive behavior |
| `design.css` | Architectural styling, gold accents, home-page effects, and responsive refinements |
| `pages.css` | Shared styling for the new pages |
| `lots.css` | Inventory cards, filters, plan, and detail styling |
| `assets/images/package/` | Images extracted from the supplied lot package |
| `assets/documents/puerta-del-sol-lot-package-nov-2026.pdf` | Original eight-page package, available to visitors |
| `assets/fonts/` | Locally hosted fonts and their licenses |
| `ASSET-SOURCES.md` | Image provenance and factual sources |
| `QA-NOTES.md` | Validation notes and limitations |

## Company contacts and story

Vanessa supplied **info@interdecgroup.com** and **+1 (956) 588-8227** as INTERDEC's company contacts. The phone's machine-readable form is `+19565888227`. The project sales team's US phone numbers remain separately labeled.

Start with `content.js` when updating company details. Preserve quotation marks and commas. The home page includes an English/Spanish company story centered on its purpose and values, without unverified founder details or dates. `company.story` and `company.storyEs` optionally replace its opening paragraph.

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

The home hero uses a sharper AI-regenerated aerial concept based on the supplied image. The featured project and site-plan sections retain the original package imagery. Neither proposed layouts nor the regenerated hero should be described as completed construction or a final survey. The separate nearby-retail image shows the surrounding retail corridor; its shopping-center lot labels are not Puerta del Sol inventory. See `ASSET-SOURCES.md` for asset details.

## Contact and careers forms

The Home, Invest, Careers, and Sales Team forms send messages directly through Web3Forms to **info@interdecgroup.com**. Visitors stay on the website and receive inline progress, success, or error feedback. A successful provider response indicates that Web3Forms accepted the submission; mailbox receipt is a separate delivery check. Forms validate required fields, include a hidden spam honeypot, and preserve entered text when submission fails. Sending an inquiry does not reserve a lot.

Web3Forms is configured in `content.js`; its public browser access key is used by `forms.js`. The recipient is bound to that key in Web3Forms and may be the company-designated inbox behind the public `info@interdecgroup.com` alias; changing the site’s displayed email alone does not change the service recipient. No private mail-service secret belongs in browser code. Lot inquiries link to `index.html?lot=…#contact` so the website form can include the selected lot. Careers remains an evergreen invitation for professional introductions, with no implication of active recruitment or a promised response. Résumé or portfolio links can be included in the message.

Form submission transmits the visitor's name, email, optional phone, message, and other entered inquiry details through Web3Forms so INTERDEC can respond. All three forms link to [Web3Forms privacy information](https://web3forms.com/privacy), and Home's privacy dialog describes this processing. Without JavaScript, visitors can contact the company using its email or phone links.

## Publish or move to another host

The current repository is `vanessagza/INTERDEC`, with a GitHub Pages preview at `https://vanessagza.github.io/INTERDEC/`.

1. Upload or commit **all five HTML pages**, **all CSS and JavaScript files**, and the **entire `assets` folder**, including `images/package/`, `documents/`, and `fonts/`.
2. Preserve the folder names and capitalization. Do not upload only `index.html` or nest the site inside an extra folder.
3. For GitHub Pages, use **Settings → Pages → Deploy from a branch → main → /(root)**. An empty `.nojekyll` file can optionally bypass Jekyll processing; it is not currently included.
4. Wait for the Pages deployment to finish in the repository's **Actions** tab. Open the Pages URL and test every page, both languages, downloads, and form behavior. Hard-refresh if an older version is cached.
5. For another static host, upload the same files to its public web directory. No application server or build command is needed. Enable HTTPS and test links at the final domain.
6. Connect the GoDaddy domain only when the hosting choice and DNS change are authorized. Domain purchase does not require GoDaddy hosting. The social-preview image URL in `index.html` may need updating to match the final domain.

## Motion, accessibility, and privacy

The site retains keyboard controls, labeled forms, native dialogs, reduced-motion support, and English/Spanish switching. Desktop pointer effects are disabled for touch input. The site uses native scrolling without scroll hijacking or a replacement cursor. The typography band drifts slowly on a continuous loop while visible, including when the visitor is not scrolling. It pauses offscreen, when the browser tab is hidden, and for reduced-motion preferences.

Language preference can be stored locally in the browser. There are no analytics scripts, embedded maps, third-party font requests, or advertising cookies. Form details are transmitted to Web3Forms when the visitor submits a message; the hosting provider may process technical access logs. Maps open when a visitor follows a directions link. The privacy dialog and form notices describe the current integration.

## Readability and visual refinements

Navigation, labels, captions, and notes use a 14px minimum. Supporting copy uses 16–18px, and form controls use at least 16px. Decorative section/process numbering has been removed; real lot identifiers, dates, counts, and financial figures remain. The hero uses content-led grid rows to keep its actions, featured project, and scroll prompt separated across languages and viewport sizes.

The transparent navy navigation darkens on scroll and uses the supplied transparent white INTERDEC logo. The footer uses the supplied transparent dark mark. Sponsors and project credits sit on white; the company story uses blue. Top Texas Title's supplied white mark receives a navy CSS treatment for readability.

The realtor cards display separate 1254 × 1254 AI-enhanced WebP portraits. The enhancement requests prioritized preserving facial identity and composition; small generative differences can remain. The supplied originals and PDF are retained unchanged. See `ASSET-SOURCES.md`.

## November 17 follow-up

Company contact links and all inquiry fallbacks use `info@interdecgroup.com`. The blue LAND/POTENTIAL/POSSIBILITY ribbon now separates the company intro from the projects section. Desktop menus have wider spacing. Home pointer effects include stronger image movement and lighting, plus a stronger featured-image tilt; touch input and reduced-motion preferences disable those effects.

Available Lots, Invest, and Careers preload their own cinematic photo backgrounds. The Careers background places the couple on the right. Invest uses a separate enhanced aerial in a wide image frame; Top Texas Title's white source mark is darkened on its white partner card. See `ASSET-SOURCES.md` for derivative-image provenance.

## Content upkeep

The current pages contain complete, intentional copy. Commercial lot prices are provided directly by the project sales team. Careers invites professional introductions and connections with INTERDEC.

A regular inventory update process can keep lot availability and program capacity current.

## Mobile menu motion

Every page uses the same nine-link mobile menu, starting with Home/Inicio. The compact glass panel opens from the menu button with a circular reveal, a brief light sweep, and staggered links. It folds away when dismissed; quick close/reopen actions cancel pending hides. Navigating or switching to desktop dismisses immediately. Reduced-motion preferences disable the decorative animations.

## PDF resources and compact inventory

Home includes a dedicated `#downloads` section for saving or opening the unchanged original8-page Puerta del Sol PDF, linked from the project summary and footer. The expanded location section presents the package's address, schools, I-2/US83 access, all nine stores listed within1.4miles, and a labeled AI-enhanced retail illustration with a link to its source.

All52 inventory cards show supplied dimensions/areas directly; detail dialogs preserve source differences. Lots18–26 are reserved, leaving40 residential plus3 commercial available. Six lots have area only in the package, so no linear dimensions are invented. The full inventory is shown by default, making reserved lots visible immediately; filters can narrow to available or reserved. Compact cards use 14px supporting text and 2–6 columns depending on available width.

## Consistent page effects

Available Lots, Invest, and Careers share Home's staggered heading entrance and pointer-following hero photo movement/light. Section headings reveal as they enter the viewport. The Invest aerial and Available Lots plan also use subtle image tilt and lighting inside dedicated image frames; captions and document links stay stationary. The shared controller only runs pointer effects on fine-pointer desktop layouts, disables them for touch/reduced motion, and leaves all content readable without JavaScript. Changed effect assets use versioned URLs so existing visitors receive the new behavior.

## Sales team and project directions — November 18, 2026

The full profiles now live on `sales-team.html`, titled Big Realty Sales Team / Equipo de Ventas Big Realty, with a compact link from Home. The original three realtor contacts are unchanged. Bernardo Diaz is listed separately as Project Manager / Gerente de Proyecto with +1 (956) 588-8227 and an intentionally blank photo area. This is also the current company contact number. The new page uses the same language control, menu, hero/scroll effects and direct Web3Forms inquiry flow as the other pages.

The company-supplied Google Maps pin is stored in `project.mapsURL` and appears on prominent directions links throughout the site, including the Home location/contact sections, event, lot page, Invest, Careers and Sales Team. The calendar also includes the same directions URL. The pin identifies the land, not a company office. The mobile menu has nine links and switches to desktop at1200px.

## Additional project plan

Available Lots displays the original `assets/images/land.jpg` in a dedicated `#site-plan` section before the inventory. Visitors can reach it from the hero, open the full-size image, or download the unchanged JPEG. Printed dimensions in this drawing may differ from the November 2026 inventory used for the cards; both sources remain accessible and are labeled separately.
