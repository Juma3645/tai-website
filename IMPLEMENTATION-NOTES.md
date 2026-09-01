# TAI Website — latest implementation notes

## Included in this round

- Replaced the homepage wording that described TAI as a "South Sudanese NGO" with "women-led NGO".
- Changed homepage and About field-location wording to **Our field presence**.
- Clarified that TAI **formed and trained Community Protection Committees (CPCs)** in Akoka County.
- Added a complete **News & Updates** route, homepage preview, article pages and source notes.
- Added October 2025 flood-related editorial drafts using externally verifiable humanitarian reporting.
- Added a verified named field voice from a public Radio Tamazuj report: Monyngok Abiel Arop, identified there as the local RRC coordinator in Pigi County.
- Added restrained scroll-reveal and image hover motion, with reduced-motion support retained.
- Added `robots.txt` and `sitemap.xml`.
- Preserved the existing React/Vite/React Router/CSS architecture.
- Contact form is configured for Web3Forms using `VITE_WEB3FORMS_ACCESS_KEY` rather than committing the access key to Git.
- Added News to the main navigation and footer.
- Made Home explicitly return to the top even when already on the Home route.

## Web3Forms

Create a local `.env` file from `.env.example`:

`VITE_WEB3FORMS_ACCESS_KEY=your-existing-key`

For Vercel, add the same variable under Project Settings → Environment Variables for Production (and Preview if desired).

## Editorial caution

The flood stories are deliberately written as **humanitarian-context/editorial updates**, not as claims that TAI delivered flood assistance unless that activity is independently verified. The source note on each article identifies the public material used. Review the wording before treating any item as an official TAI activity report.
