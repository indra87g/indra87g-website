## 2025-02-28 - Tooltips for icon-only buttons
**Learning:** Found that social links use the standard HTML `title` attribute for tooltips. This presents a micro-UX opportunity: standard tooltips are often delayed, unstyled, and can't be styled to match the theme. Plus they are sometimes not fully keyboard accessible depending on the OS/Browser combination.
**Action:** Replace `title` attributes on `SocialLinks.astro` with accessible, styled, custom tooltips that appear on hover and focus. I will use the established tooltip pattern seen in `ThemeSwitcher.tsx` but map it to Astro components. I will also make the `SocialLinks.astro` more concise by using a map.

## 2025-02-28 - Theme token consistency in visual feedback
**Learning:** Found that the CV page's `TimeLine.astro` component was using an undefined Tailwind color class (`bg-primary`), causing the timeline visual indicators (dots and lines) to be completely invisible. In a design system that relies on specific theme-aware tokens (like `bg-main`, `border-border`), using generic classes from other templates can break visual feedback and UX.
**Action:** Replace undefined classes with the correct theme tokens to restore the intended visual hierarchy and ensure components adapt correctly to light/dark modes.

## 2025-02-28 - Missing visual and screen reader indicators for external links
**Learning:** Found that external links (`target="_blank"`) across multiple components (CV certificates, Footer commit dialog) lack both visual indicators for sighted users and auditory indicators for screen reader users. This means users are not informed before clicking that they will be taken out of the current context.
**Action:** Consistently apply an inline `tabler:external-link` icon (hidden from screen readers via `aria-hidden="true"`) alongside an `.sr-only` span text like "(opens in a new tab)" to all external links. Additionally, wrap these links in `inline-flex items-center gap-1` to ensure correct alignment between the text and icon.

## 2025-02-28 - Custom dropdown and mobile menu accessibility
**Learning:** Found that custom dropdown and mobile menu components built with React (e.g., `MobileNav.tsx`) were missing critical accessibility expected interactions: closing on `Escape` keypress, closing on clicking outside the component, and linking the toggle button to the expanding menu with `aria-controls`. Without these, keyboard and screen reader users can get trapped or disoriented.
**Action:** When implementing or reviewing custom toggles or dropdown menus, ensure `useEffect` hooks bind `keydown` (for Escape) and `mousedown` (for click-outside) event listeners, and use `aria-controls` on the toggle mapped to the `id` of the menu content.

## 2025-02-12 - Custom 404 Empty State
**Learning:** Default browser or framework 404 pages lack context and branding, often causing users to leave immediately. Implementing a custom 404 empty state page is a simple yet powerful micro-UX improvement that provides helpful guidance, maintains branding consistency, and gives users a clear path forward (like returning to the homepage).
**Action:** Always verify if a web project has a custom 404 page; if missing, implement a branded empty state with a clear primary action to improve user retention and UX when hitting broken links.

## 2026-06-17 - Spacing and alignment standardizations
**Learning:** Found that layout and alignment heavily affect the overall brand tone. A developer-centric design uses strict left-alignment and tighter component packing ("Compact over spacious") instead of loose, centered layouts.
**Action:** Remove centered alignment from text and layouts where possible, keeping elements consistently pinned to the left edge of the grid. Apply tighter padding on components to convey density and information-richness.
