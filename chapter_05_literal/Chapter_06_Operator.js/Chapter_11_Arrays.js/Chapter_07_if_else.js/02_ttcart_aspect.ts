import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="login-credentials"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]').click();
    await page.locator('[data-test="add-to-cart-tta-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-tta-bolt-tshirt"]').click();
    await page.locator('[data-test="add-to-cart-tta-fleece-jacket"]').click();
    await page.locator('[data-test="add-to-cart-tta-practice-backpack"]').click();
    await page.locator('[data-test="add-to-cart-tta-junior-tester-onesie"]').click();
    await page.getByRole('article').filter({ hasText: 'TTA Practice Backpackcarry.' }).locator('[data-test="item-img-link"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.locator('[data-test="remove-tta-fleece-jacket"]').click();
    await page.locator('[data-test="remove-tta-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-tta-bike-light"]').click();
    await page.getByText('This classic TTA t-shirt is').click();
    await page.getByRole('link').filter({ hasText: 'test.all()' }).click();
    await page.locator('[data-test="inventory-container"] path').click();
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/inventory');
});