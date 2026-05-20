## 2024-05-18 - Dynamic ARIA Labels and SVG Titles
**Learning:** For toggle buttons that control state (like a mobile menu), a static `aria-label` like "Toggle menu" is less informative than a dynamic one ("Open menu" / "Close menu"). Additionally, inner SVG `<title>` tags can cause screen readers to announce conflicting or redundant labels when the parent button already has an `aria-label`. SVGs in descriptive buttons should be explicitly hidden with `aria-hidden="true"`.
**Action:** Use state-aware `aria-label`s on interactive toggles, and use `aria-hidden="true"` to explicitly hide decorative SVGs instead of relying on `<title>` tags when the parent element provides accessibility.

## 2026-05-19 - Keyboard Focus on Interactive Elements
**Learning:** Interactive elements like the Latest commit button and its dialog close button lack clear visual focus indicators for keyboard navigation. While some native elements get basic focus rings, adding utility classes like `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main` makes keyboard navigation significantly clearer without affecting mouse users.
**Action:** Add explicit `focus-visible` utility classes to button elements to ensure clear keyboard navigability, and make sure icon-only/symbol-only buttons like an `&times;` close button have an explicit `aria-label` (e.g., "Close dialog").
