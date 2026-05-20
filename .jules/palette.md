## 2024-05-20 - [Add Skip-to-Content Link]
**Learning:** Found nested `<main>` tags within `src/layouts/Base.astro`. Replaced inner `<main>` tag with `<div>` which is critical for making `tabindex="-1"` and `focus:outline-none` on target element work cleanly.
**Action:** Always check the element being used as the `#main-content` target to ensure it is structurally valid HTML so that focus handling and screen reader announcements behave properly.
