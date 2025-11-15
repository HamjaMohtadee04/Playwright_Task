const { test, expect } = require('@playwright/test');
test.setTimeout(120000);
test('A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out', async ({ page }) => {

  //navigate to website
  await page.goto('/');
  await page.waitForTimeout(5000);

  //user login
  await page.fill('#user-name', 'standard_user');
  await page.waitForTimeout(5000);
  await page.fill('#password', 'secret_sauce');
  await page.waitForTimeout(5000);

  await Promise.all([
    page.waitForNavigation(),
    page.click('#login-button')
  ]);
  await page.waitForTimeout(5000);

   //add to cart 
  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(5000);
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.waitForTimeout(5000);

  //verify the product
  await Promise.all([
    page.waitForNavigation(),
    page.click('.shopping_cart_link')
  ]);
  await page.waitForTimeout(5000);
  const productName = page.locator('.inventory_item_name');
  await expect(productName).toHaveText('Sauce Labs Backpack');
  await page.waitForTimeout(5000);
  await page.click('#react-burger-menu-btn');
  await page.waitForTimeout(5000);

 //user logout
  await page.waitForSelector('#logout_sidebar_link');
  await page.waitForTimeout(5000);
  await page.click('#logout_sidebar_link');
  await page.waitForTimeout(5000);

  //user returned to login page
  await expect(page).toHaveURL(/saucedemo/);
  await page.waitForTimeout(5000);
});
