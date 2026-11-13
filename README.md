# CILO Global website redesign

A responsive, static multi-page website concept for CILO Global. Built with HTML, CSS and vanilla JavaScript so it can be hosted on Cloudflare Pages, GitHub Pages or any static web host without a build step.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Pages

- `index.html` — homepage
- `services.html` — all eight core service areas
- `services/*.html` — dedicated pages for each service
- `industries.html` — SME/growing business, enterprise/public sector and industry segments
- `digital-experiences.html` — website design and development capability plus clearly labelled concept portfolio directions
- `about.html` — company approach and values
- `contact.html` — enquiry form preview

## Before publishing

1. Confirm final logo files and replace the text-based CILO mark if needed.
2. Add verified company email, phone number, address and social links if desired.
3. Connect the contact form to a real company inbox or CRM. It is intentionally a non-sending preview at this stage.
4. Replace the three concept portfolio examples with genuine work when approved. They are labelled as concept explorations, not client case studies.
5. Review all service wording and confirm the final company profile content.
6. Add analytics, privacy/cookie notices and any required legal pages before production launch.

## Content accuracy notes

- No customer names, testimonials, certifications, contracts or project outcomes have been invented.
- The company profile's vendor names are not displayed as confirmed formal/current partners.
- Digital Experiences is included as a separate capability based on the company's stated website design/development offering.

## Deployment

This is a static site: no build command is required and the output directory is the repository root (`/`).
