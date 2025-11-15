const { test, expect } = require('@playwright/test');
test.setTimeout(120000);

test('verifying a user logs in with credentials, adds products to the cart and verifies it, and logs out', async ({ page }) => {
//navigate to website
await page.goto('/');
await page.waitForTimeout(5000);

// user login
await page.locator('#user-name').fill('standard_user');
  await page.waitForTimeout(5000);
  await page.locator('#password').fill('secret_sauce');
  await page.waitForTimeout(5000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('#login-button').click()
  ]);
  await page.waitForTimeout(5000);

//adding product to cart
 await expect(page).toHaveURL(/inventory/);
 await page.waitForTimeout(5000);
await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.waitForTimeout(5000);
  await Promise.all([
    page.waitForNavigation(),
    page.locator('.shopping_cart_link').click()
  ]);
  await page.waitForTimeout(5000);

//verifying product in cart
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');
  await page.waitForTimeout(5000);

//user logging out 
  await page.locator('#react-burger-menu-btn').click();
  await page.waitForTimeout(5000);
  await page.locator('#logout_sidebar_link').waitFor();
  await page.waitForTimeout(5000);
  await page.locator('#logout_sidebar_link').click();
  await page.waitForTimeout(5000);

//verifying user returned to login page
  await expect(page).toHaveURL(/saucedemo/);
  await page.waitForTimeout(5000);
});
