import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { ShoppingPage } from './pages/ShoppingPage';

test.describe('TS-SHOP-003 Shopping cart functions', () => {
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

  test('TC-SHOP-012: Navigate to cart with products ', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();

    const itemCount = await shoppingPage.getCartItemsCount();

    expect(itemCount).toBe(3);
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
  });
  test('TC-SHOP-013: Navigate to cart without products ', async ({ page }) => {
    await shoppingPage.navigateToShoppingPageByButton();

    const itemCount = await shoppingPage.getCartItemsCount();

    expect(itemCount).toBe(0);
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
  });
  test('TC-SHOP-014: Remove product from cart', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();

    await shoppingPage.removeItemFromCart();

    const itemCount = await shoppingPage.getCartItemsCount();
    const productNames = shoppingPage.locator('.inventory_item_name');

    expect(itemCount).toBe(2);
  });
  test('TC-SHOP-015: Remove all products (clear cart) ', async ({ page }) => {
    await inventoryPage.addAllItemsToCart();
    await shoppingPage.navigateToShoppingPageByButton();

    await shoppingPage.removeAllItemsFromCart();

    const itemCount = await shoppingPage.getCartItemsCount();

    expect(itemCount).toBe(0);
  });
  test('TC-SHOP-016: Click continue shopping button ', async ({ page }) => {
    await shoppingPage.navigateToShoppingPageByButton();

    await shoppingPage.useCountinueShoppingButton();

    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
  });
});