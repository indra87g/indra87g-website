## 2024-05-18 - [Prevent Reverse Tabnabbing]
**Vulnerability:** Found `<a>` tags with `target="_blank"` without `rel="noopener noreferrer"` in `src/pages/cv.astro`.
**Learning:** External links opened in a new tab without `noopener noreferrer` can access the original window object via `window.opener`. This exposes the site to Reverse Tabnabbing, where the newly opened page can maliciously redirect or manipulate the original page, potentially leading to phishing or other attacks.
**Prevention:** Always add `rel="noopener noreferrer"` whenever using `target="_blank"` for external links to protect the original page and preserve user security.
## 2024-05-24 - [Cloudflare Pages Security Headers]
**Vulnerability:** Missing default security headers (e.g., `X-Frame-Options`, `X-Content-Type-Options`) for a Cloudflare Pages deployed Astro site.
**Learning:** Security headers must be explicitly set for Astro projects deployed to Cloudflare Pages using a `public/_headers` file, as the framework/adapter doesn't inject them by default.
**Prevention:** Always include a `_headers` file with basic defense-in-depth headers in projects targeting Cloudflare Pages.
