import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { ShoppingPage } from './pages/ShoppingPage';

test.describe('TS-SHOP-002 Adding Product', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let shoppingPage: ShoppingPage;


  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    shoppingPage = new ShoppingPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

  });

  test('TC-SHOP-009: Adding one different product into empty cart ', async ({ page }) => {
    await inventoryPage.addItemToCart('#add-to-cart-sauce-labs-fleece-jacket');
    await shoppingPage.navigateToShoppingPageByButton();

    const itemCount = await shoppingPage.getCartItemsCount();
    const productName = shoppingPage.locator('.inventory_item_name');

    expect(itemCount).toBe(1);
    expect(productName).toContainText('Sauce Labs Fleece Jacket');
  });
  test('TC-SHOP-010: Adding multiple products into cart ', async ({ page }) => {
    await inventoryPage.addItemToCart('#add-to-cart-sauce-labs-fleece-jacket');
    await inventoryPage.addItemToCart('#add-to-cart-sauce-labs-backpack');
    await inventoryPage.addItemToCart('#add-to-cart-sauce-labs-bike-light');
    await shoppingPage.navigateToShoppingPageByButton();

    const itemCount = await shoppingPage.getCartItemsCount();
    const productNames = shoppingPage.locator('.inventory_item_name');

    expect(itemCount).toBe(3);
    expect(productNames).toContainText(['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  });
  test('TC-SHOP-011: Adding all products into cart', async ({ page }) => {
    await inventoryPage.addAllItemsToCart();
    await shoppingPage.navigateToShoppingPageByButton();

    const itemCount = await shoppingPage.getCartItemsCount();
    const productNames = shoppingPage.locator('.inventory_item_name');

    expect(itemCount).toBe(6);
    expect(productNames).toContainText(['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']);
  });
});