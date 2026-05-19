## 2024-05-18 - [Prevent Reverse Tabnabbing]
**Vulnerability:** Found `<a>` tags with `target="_blank"` without `rel="noopener noreferrer"` in `src/pages/cv.astro`.
**Learning:** External links opened in a new tab without `noopener noreferrer` can access the original window object via `window.opener`. This exposes the site to Reverse Tabnabbing, where the newly opened page can maliciously redirect or manipulate the original page, potentially leading to phishing or other attacks.
**Prevention:** Always add `rel="noopener noreferrer"` whenever using `target="_blank"` for external links to protect the original page and preserve user security.
