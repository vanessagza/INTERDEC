# INTERDEC Developers website

A complete, portable website for **INTERNATIONAL TERRA DEVELOPING CORP, LLC**, branded as **INTERDEC Developers**. The design uses the supplied navy and gray logo, warm neutrals, bold typography, and a featured Puerta del Sol development.

This is plain HTML, CSS, and JavaScript. There is no installation, compilation, database, framework, API key, or paid dependency. Images and fonts are included locally. It works at a domain root or a GitHub Pages repository subpath.

## 1. Open it on your computer

1. Download and extract `INTERDEC-Website.zip` into a normal folder. Do not open the HTML from inside the ZIP.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari. Keep `styles.css`, `content.js`, `app.js`, and the `assets` folder beside it.
3. Explore the page. Try the residential/commercial tabs, project details (+), development accordion, event invitation, calendar download, FAQ, and EN/ES switch.
4. The contact form prepares an inquiry for review. With the company email still blank, you can copy or download the draft. It does not claim to send a message.
5. Clipboard access can be restricted when opening a local HTML file. The download-text option still works; the copy button works on supported HTTPS sites.

## 2. Files to edit

| File | Purpose |
| --- | --- |
| `index.html` | Page sections, English copy, Spanish translations, links, SEO description |
| `styles.css` | Colors, typography, page layout, responsiveness, and animation |
| `content.js` | Company contact details, story, project prices/sizes, project phone, partnership wording, and event settings |
| `app.js` | Tabs, language switching, countdown, dialogs, calendar and inquiry downloads |
| `assets/images/` | Original logo, invitation poster, illustrative hero, and sample neighborhood photography |
| `assets/fonts/` | Locally hosted fonts and their licenses |
| `.nojekyll` | Prevents GitHub Pages from applying a Jekyll build |
| `ASSET-SOURCES.md` | Image provenance, font sources, and original factual sources |

### Fill in the missing information

Start with `content.js`. It contains comments next to the editable settings. Preserve quotation marks and commas when replacing strings. Keep an apostrophe escaped as `\'` if you use single-quoted strings, or use double-quoted strings around that value.

1. Set `company.email` to a real, monitored inbox. The site then displays a mail link and adds an **Open email app** button to the inquiry preview. This still uses the visitor's email application; it is not a server-delivered form.
2. Fill in `company.phone`, `company.phoneDisplay`, and `company.officeAddress`. The machine-readable phone should include the country code, such as `+1` followed by the number.
3. Add `company.story` and optionally `company.storyEs`. An English story is reused in both languages if a Spanish version is not provided. The placeholder label disappears when a story is supplied.
4. Add `project.residentialSize`, `project.commercialSize`, `project.residentialPrice`, and `project.commercialPrice` only when approved. Until then, visible bracketed placeholders are deliberate.
5. Confirm the project relationship and set `project.partnership` and `project.partnershipEs` to approved wording.
6. For other text, edit the English content directly in `index.html`. The corresponding `data-es` attribute contains the Spanish version. Preserve the element's ID, classes, and other attributes.
7. Replace the illustrative images with actual, authorized project photos when available. Update the adjacent image captions and accessible `alt` descriptions to describe the replacement honestly.

### Puerta del Sol facts used

The supplied invitation announces:

| Detail | Invitation information |
| --- | --- |
| Name | Puerta del Sol |
| City | Donna, Texas |
| Residential lots | 49 |
| Commercial lots | 3 |
| Ceremony | Wednesday, December 2, 2026, 10:30 AM |
| Location | Salinas Blvd & Mile 10 N Rd, Donna, TX 78537 |
| Refreshments | Food and drinks provided |
| Project inquiry number | (956) 456-1788 |

**Project attribution needs confirmation.** The poster says “another project developed by” above AVIG Development's logo and lists INTERDEC among the sponsors. The site features Puerta del Sol without claiming that INTERDEC is its sole developer or owner. The project details dialog preserves this distinction and includes a role placeholder.

The invitation's phone number is labeled as a Puerta del Sol contact. It has not been assumed to be INTERDEC's company phone. No prices, financing, lot dimensions, project completion dates, specific infrastructure promises, testimonials, company age, or past-project statistics have been invented.

The calendar uses **10:30 AM in Donna, Texas**, which is **16:30 UTC on December 2, 2026**. No ceremony end time was supplied, so none is invented. The countdown uses the same instant across time zones. After the announced date passes, the event text changes to a historical announcement and the add-to-calendar button is hidden.

The invitation, static descriptions, and FAQ repeat the originally announced lot counts and date. If those facts change, update the related English and Spanish copy in `index.html` as well as the settings and calendar description.

## 3. Test it on GitHub Pages

These steps publish the preview online. A public repository makes the source files public, so do not put private documents, credentials, contracts, or API keys in the website folder.

1. Sign in to GitHub and create a repository, for example `interdec-website`. Use a visibility supported by your GitHub plan for Pages.
2. Upload the **extracted files and folders**, not the ZIP itself. `index.html` must appear at the repository's top level. Avoid accidentally uploading a second enclosing `INTERDEC-Website` folder.
3. Include the `assets` folder with its `images` and `fonts` subfolders. Confirm the capitalization is unchanged; hosted file paths are case-sensitive.
4. Include `.nojekyll`. If your computer hides files whose names start with a dot, reveal hidden files first or add this empty file using GitHub's file editor.
5. Commit the uploaded files to `main`.
6. Open the repository's **Settings → Pages**.
7. Under **Build and deployment → Source**, select **Deploy from a branch**.
8. Select the `main` branch and the `/(root)` folder, then save.
9. Wait for the Pages deployment to finish. GitHub will show the preview URL, usually `https://YOUR-USERNAME.github.io/interdec-website/` for that repository name. Open the actual URL GitHub provides.
10. Test desktop and mobile layouts, both languages, project tabs, invitation viewing, the calendar download, and the inquiry preview. If an old version is cached after you upload changes, do a hard refresh.

There is no need to connect `interdecgroup.com` for this preview. All in-page links and local asset paths are relative, so a repository subpath works without changing the code.

Official GitHub Pages setup reference: https://docs.github.com/en/pages/quickstart

## 4. Move it to your chosen hosting service

1. Finish and review the company details, project attribution, lot information, photographs, and final privacy text.
2. Upload `index.html`, `styles.css`, `content.js`, `app.js`, and the complete `assets` folder into the host's public web directory. On many traditional hosts this is called `public_html`, `www`, or the domain's document root. Use the directory your provider specifies.
3. Keep the original relative folder structure. No application server or build command is required.
4. Use the DNS values given by your chosen host to connect the GoDaddy domain. Buying the domain at GoDaddy does not require choosing GoDaddy hosting. DNS has deliberately not been changed as part of this delivery.
5. Enable HTTPS using your host's supported setup and test the live domain.
6. The social-preview image in `index.html` is prepared for `https://interdecgroup.com/assets/images/interdec-logo.jpg`. If the final domain or image changes, update that `og:image` value. Until the custom domain is live, a GitHub Pages link preview might not retrieve it.

## 5. Contact form choices

**Current behavior:** local draft → preview → copy/download → optionally open a configured email application. Nothing is silently submitted, saved to a database, or marked as delivered.

If you later want visitors to click one button and have their inquiry delivered automatically, connect a form service or your chosen host's backend. That is a separate integration requiring a real receiving address and service endpoint. Do not put private email-service keys into browser JavaScript. Update the privacy text and success/error behavior when connecting that service.

## 6. Before the public launch

- Replace the bracketed company email, phone, office, story, lot-size, and price placeholders.
- Confirm AVIG/INTERDEC project attribution, actual sales availability, and the project contact.
- Replace sample photography with approved project photos where possible.
- Add any approved company biography, team details, other developments, or sales materials you want included.
- Approve the final English and Spanish copy and company privacy policy.
- Decide whether the current email-draft flow meets your needs or connect real form delivery.
- Confirm directions point to the correct entrance and reconfirm event details.
- Test at the final domain after DNS and HTTPS are configured.

## Accessibility and privacy

The site includes keyboard focus styles, a skip link, labeled inputs, native dialogs, keyboard-operable lot tabs, reduced-motion support, semantic headings, and responsive navigation. EN/ES selection is stored locally when the browser permits it. There are no analytics scripts, embedded maps, tracking pixels, third-party font requests, or advertising cookies. Maps open only when the visitor follows the directions link.
