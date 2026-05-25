## 2025-02-28 - Tooltips for icon-only buttons
**Learning:** Found that social links use the standard HTML `title` attribute for tooltips. This presents a micro-UX opportunity: standard tooltips are often delayed, unstyled, and can't be styled to match the theme. Plus they are sometimes not fully keyboard accessible depending on the OS/Browser combination.
**Action:** Replace `title` attributes on `SocialLinks.astro` with accessible, styled, custom tooltips that appear on hover and focus. I will use the established tooltip pattern seen in `ThemeSwitcher.tsx` but map it to Astro components. I will also make the `SocialLinks.astro` more concise by using a map.

## 2025-02-28 - Theme token consistency in visual feedback
**Learning:** Found that the CV page's `TimeLine.astro` component was using an undefined Tailwind color class (`bg-primary`), causing the timeline visual indicators (dots and lines) to be completely invisible. In a design system that relies on specific theme-aware tokens (like `bg-main`, `border-border`), using generic classes from other templates can break visual feedback and UX.
**Action:** Replace undefined classes with the correct theme tokens to restore the intended visual hierarchy and ensure components adapt correctly to light/dark modes.
