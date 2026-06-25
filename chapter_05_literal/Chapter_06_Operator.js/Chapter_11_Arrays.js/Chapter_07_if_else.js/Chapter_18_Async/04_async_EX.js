import { test, expect } from '@playwright/test';

test('has a title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    page.locator();
});
let r = page.locator();