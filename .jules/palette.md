## 2025-02-28 - Tooltips for icon-only buttons
**Learning:** Found that social links use the standard HTML `title` attribute for tooltips. This presents a micro-UX opportunity: standard tooltips are often delayed, unstyled, and can't be styled to match the theme. Plus they are sometimes not fully keyboard accessible depending on the OS/Browser combination.
**Action:** Replace `title` attributes on `SocialLinks.astro` with accessible, styled, custom tooltips that appear on hover and focus. I will use the established tooltip pattern seen in `ThemeSwitcher.tsx` but map it to Astro components. I will also make the `SocialLinks.astro` more concise by using a map.

## 2025-02-28 - Theme token consistency in visual feedback
**Learning:** Found that the CV page's `TimeLine.astro` component was using an undefined Tailwind color class (`bg-primary`), causing the timeline visual indicators (dots and lines) to be completely invisible. In a design system that relies on specific theme-aware tokens (like `bg-main`, `border-border`), using generic classes from other templates can break visual feedback and UX.
**Action:** Replace undefined classes with the correct theme tokens to restore the intended visual hierarchy and ensure components adapt correctly to light/dark modes.

## 2025-02-28 - Missing visual and screen reader indicators for external links
**Learning:** Found that external links (`target="_blank"`) across multiple components (CV certificates, Footer commit dialog) lack both visual indicators for sighted users and auditory indicators for screen reader users. This means users are not informed before clicking that they will be taken out of the current context.
**Action:** Consistently apply an inline `tabler:external-link` icon (hidden from screen readers via `aria-hidden="true"`) alongside an `.sr-only` span text like "(opens in a new tab)" to all external links. Additionally, wrap these links in `inline-flex items-center gap-1` to ensure correct alignment between the text and icon.

## 2024-05-18 - Mobile Menu Accessibility and UX
**Learning:** Custom dropdown/menu components (like the React mobile nav) are confusing for keyboard and screen-reader users without explicit closure methods (Escape key) and an easy way to back out (click outside). Missing `aria-controls` disconnects the toggle from the actual menu content.
**Action:** Always implement "Escape to close" and "Click outside to close" paired with `aria-controls` for any custom dropdown component to provide an accessible and expected UX.
