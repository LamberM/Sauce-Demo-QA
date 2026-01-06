import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test.describe('TS-SHOP-001 Sorting Product', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-SHOP-005: Sort by name (A-Z)', async ({ page }) => {
    await inventoryPage.sortItemsBy('Name (A to Z)');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('.inventory_item_name').last()).toHaveText('Test.allTheThings() T-Shirt (Red)');
  });
    test('TC-SHOP-006: Sort by name (Z-A)', async ({ page }) => {
    await inventoryPage.sortItemsBy('Name (Z to A)');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
    await expect(page.locator('.inventory_item_name').last()).toHaveText('Sauce Labs Backpack');
  });
    test('TC-SHOP-007: Sort by price (low to high)', async ({ page }) => {
    await inventoryPage.sortItemsBy('Price (low to high)');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Onesie');
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
    await expect(page.locator('.inventory_item_name').last()).toHaveText('Sauce Labs Fleece Jacket');
    await expect(page.locator('.inventory_item_price').last()).toHaveText('$49.99');

  });
  test('TC-SHOP-008: Sort by price (high to low)', async ({ page }) => {
    await inventoryPage.sortItemsBy('Price (high to low)');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Fleece Jacket');
    await expect(page.locator('.inventory_item_price').first()).toHaveText('$49.99');
    await expect(page.locator('.inventory_item_name').last()).toHaveText('Sauce Labs Onesie');
    await expect(page.locator('.inventory_item_price').last()).toHaveText('$7.99');
  });
});
