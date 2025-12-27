import { test, expect } from '@playwright/test'

test.describe('Mobile Navigation Menu', () => {
    test.use({
        viewport: { width: 375, height: 667 }, // iPhone 8
    })

    // Increase timeout for all tests in this suite
    test.setTimeout(60000)

    test('should render correctly in light mode', async ({ page }) => {
        await page.goto('http://localhost:4322', { timeout: 60000 })
        await page.getByLabel('Toggle menu').click()
        await page.waitForSelector('div[class*="opacity-100"]')
        await expect(page).toHaveScreenshot('mobile_nav_light.png')
    })

    test('should render correctly in dark mode', async ({ page }) => {
        await page.goto('http://localhost:4322', { timeout: 60000 })

        // Target the visible theme switcher in the mobile view
        const mobileThemeSwitcher = page
            .locator('div.md\\:hidden')
            .getByLabel('Switch to dark mode')
        await mobileThemeSwitcher.click()

        // The theme change should be applied, no need for manual evaluation
        await page.reload() // Reload to ensure theme is applied

        await page.getByLabel('Toggle menu').click()
        await page.waitForSelector('div[class*="opacity-100"]')
        await expect(page).toHaveScreenshot('mobile_nav_dark.png')
    })
})
