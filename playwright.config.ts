import { defineConfig, devices } from '@playwright/test'

// Astro's preview server serves the static `dist/` build on this port by default.
const PORT = 4321
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    // Fail the build on CI if someone left a `test.only` in the suite.
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: 'list',
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
    // Build, then preview the static output. `reuseExistingServer` lets local runs
    // attach to an already-running `bun run preview` instead of rebuilding.
    webServer: {
        command: 'bun run build && bun run preview',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
})
