import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abhishekadad');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abhishek');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').press('CapsLock');
    await page.locator('[data-test="password"]').fill('M');
    await page.locator('[data-test="password"]').press('CapsLock');
    await page.locator('[data-test="password"]').fill('Mindcraft@123');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="login-button"]').click({
        button: 'right'
    });
    await page.locator('[data-test="login-password"]').click();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.locator('[data-test="login-button"]').click({
        button: 'right'
    });
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toMatchAriaSnapshot(`- alert: "Epic sadface: Username and password do not match any user in this service"`);
});