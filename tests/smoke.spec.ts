import { expect, test } from '@playwright/test'

// Smoke tests: confirm the static site builds into pages that actually render the
// key landmarks. These are intentionally shallow — they catch "the build produced
// broken/empty pages" regressions without coupling to copy that changes often.

test('homepage renders hero and recent sections', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/indra87g/i)
    await expect(page.getByText('Indra Sah Noeldy')).toBeVisible()
    await expect(
        page.getByRole('heading', { name: 'Recent Posts' }),
    ).toBeVisible()
    await expect(
        page.getByRole('heading', { name: 'Recent Projects' }),
    ).toBeVisible()
})

test('homepage exposes the skip-to-content a11y link', async ({ page }) => {
    await page.goto('/')
    await expect(
        page.getByRole('link', { name: /skip to content/i }),
    ).toBeAttached()
})

test('cv page is reachable', async ({ page }) => {
    await page.goto('/cv')
    await expect(page).toHaveTitle(/cv/i)
    await expect(page.getByText('Profil')).toBeVisible()
})

test('blog listing renders', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.locator('main')).toBeVisible()
})

test('unknown route serves the custom 404 page', async ({ page }) => {
    await page.goto('/this-route-definitely-does-not-exist')
    await expect(page.getByRole('heading', { name: '404' })).toBeVisible()
    await expect(page.getByRole('link', { name: /go back home/i })).toBeVisible()
})
