## 2024-05-20 - [Add Skip-to-Content Link]
**Learning:** Found nested `<main>` tags within `src/layouts/Base.astro`. Replaced inner `<main>` tag with `<div>` which is critical for making `tabindex="-1"` and `focus:outline-none` on target element work cleanly.
**Action:** Always check the element being used as the `#main-content` target to ensure it is structurally valid HTML so that focus handling and screen reader announcements behave properly.
## 2025-02-23 - [Active Navigation Link Indicators & Focus State]
**Learning:** Hardcoded navigation links without a dynamic way to show the current active page or clear keyboard focus states cause a significant drop in spatial orientation for users. Using `Astro.url.pathname` and `aria-current="page"` alongside focus visible classes drastically improves accessibility and navigational confidence.
**Action:** Always ensure that `aria-current="page"` is dynamically assigned on standard navigation links and that keyboard-navigable elements have a visible `focus-visible` outline or ring style.
## 2024-05-25 - [Accessibility & Feedback for Icon-Only Links]
**Learning:** Icon-only links (like social links) often rely solely on the `title` attribute, which is insufficient for screen readers and does not provide an interactive visual state. Providing explicit `aria-label` attributes and ensuring visible focus states (`focus-visible:ring-2 focus-visible:ring-main`) and hover animations greatly enhance accessibility and the interactive feel of the component.
**Action:** Always verify that icon-only interactive elements (links or buttons) include an `aria-label` and have robust focus and hover feedback classes applied.
## 2024-05-23 - [Tactile Keyboard Focus States]
**Learning:** Playful design elements (like brutalist push-down hover effects on cards) often exclude keyboard users who rely on standard outlines. Expanding these exact translation/shadow visual changes to `focus-visible` ensures an equitable, delightful experience for keyboard navigation while still providing a clear focus outline.
**Action:** Always replicate interactive hover translations or shadow changes to `focus-visible` classes so that keyboard users experience the same tactile feedback as mouse users.
