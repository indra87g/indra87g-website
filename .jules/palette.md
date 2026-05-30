## 2025-02-28 - Tooltips for icon-only buttons
**Learning:** Found that social links use the standard HTML `title` attribute for tooltips. This presents a micro-UX opportunity: standard tooltips are often delayed, unstyled, and can't be styled to match the theme. Plus they are sometimes not fully keyboard accessible depending on the OS/Browser combination.
**Action:** Replace `title` attributes on `SocialLinks.astro` with accessible, styled, custom tooltips that appear on hover and focus. I will use the established tooltip pattern seen in `ThemeSwitcher.tsx` but map it to Astro components. I will also make the `SocialLinks.astro` more concise by using a map.

## 2025-02-28 - Theme token consistency in visual feedback
**Learning:** Found that the CV page's `TimeLine.astro` component was using an undefined Tailwind color class (`bg-primary`), causing the timeline visual indicators (dots and lines) to be completely invisible. In a design system that relies on specific theme-aware tokens (like `bg-main`, `border-border`), using generic classes from other templates can break visual feedback and UX.
**Action:** Replace undefined classes with the correct theme tokens to restore the intended visual hierarchy and ensure components adapt correctly to light/dark modes.


## 2025-02-28 - Nested `<head>` Tags
**Learning:** Found that `<head>` elements in nested Astro components can lead to invalid HTML because the `<head>` might already be managed by a layout component, causing double `<head>` tags in the output.
**Action:** Remove inner `<head>` wrapper tags in nested components when they are intended to be injected into a layout that already handles the `<head>` correctly.
