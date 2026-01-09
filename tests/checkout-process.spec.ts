import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { ShoppingPage } from './pages/ShoppingPage';
import { CheckoutPage } from './pages/CheckoutPage';

test.describe('TS-SHOP-004 Checkout process', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let shoppingPage: ShoppingPage;
  let checkoutPage: CheckoutPage;


  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    shoppingPage = new ShoppingPage(page);
    checkoutPage = new CheckoutPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

  });

  test('TC-SHOP-017: Create checkout process with products and correct data', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();
    await checkoutPage.navigateToCheckoutPage();

    await checkoutPage.fillCheckoutInformation('John', 'Doe', '90210');
    await checkoutPage.continueToNextCheckoutStep();
    await checkoutPage.finishCheckout();

    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html');
  });

  test('TC-SHOP-018: Create checkout process with products and empty first name ', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();
    await checkoutPage.navigateToCheckoutPage();

    await checkoutPage.fillCheckoutInformation('', 'Doe', '90210');
    await checkoutPage.continueToNextCheckoutStep();

    let errorMessage = await checkoutPage.getErrorMessage();

    expect(errorMessage).toBe('Error: First Name is required');
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  });

  test('TC-SHOP-019: Create checkout process with products and empty last name ', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();
    await checkoutPage.navigateToCheckoutPage();

    await checkoutPage.fillCheckoutInformation('John', '', '90210');
    await checkoutPage.continueToNextCheckoutStep();

    let errorMessage = await checkoutPage.getErrorMessage();

    expect(errorMessage).toBe('Error: Last Name is required');
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  });

  test('TC-SHOP-020: Create checkout process with products and empty postal code ', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();
    await checkoutPage.navigateToCheckoutPage();

    await checkoutPage.fillCheckoutInformation('John', 'Doe', '');
    await checkoutPage.continueToNextCheckoutStep();

    let errorMessage = await checkoutPage.getErrorMessage();

    expect(errorMessage).toBe('Error: Postal Code is required');
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  });


  test.fail('BUG-1: With incorrect data, checkout process will blocked with error message. We need working validation', async ({ page }) => {
    test('TC-SHOP-021: Create checkout process with products and incorrect data', async ({ page }) => {
      await inventoryPage.addRandomProductsWithSeed(3);
      await shoppingPage.navigateToShoppingPageByButton();
      await checkoutPage.navigateToCheckoutPage();

      await checkoutPage.fillCheckoutInformation('123', '123', 'London');
      await checkoutPage.continueToNextCheckoutStep();

      let errorMessage = await checkoutPage.getErrorMessage();

      expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
      expect(errorMessage).toBe('Error: Wrong input data');
    });
  });

  test.fail('BUG-2: Without products in cart, checkout process will blocked with error message', async ({ page }) => {
    test('TC-SHOP-022: Create checkout process without products', async ({ page }) => {
      await shoppingPage.navigateToShoppingPageByButton();
      await checkoutPage.navigateToCheckoutPage();

      let errorMessage = await checkoutPage.getErrorMessage();

      expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
      expect(errorMessage).toBe('Error: Your cart is empty');
    });
  });
  test('TC-SHOP-023: Cancel checkout process ', async ({ page }) => {
    await inventoryPage.addRandomProductsWithSeed(3);
    await shoppingPage.navigateToShoppingPageByButton();
    await checkoutPage.navigateToCheckoutPage();
    await checkoutPage.cancelCheckout();

    expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
  });
});