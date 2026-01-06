import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('TS-AUTH-001 User Login Process', () => {
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('TC-AUTH-001: Valid login credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Products')).toBeVisible();
  });
    test('TC-AUTH-002: Invalid password', async ({ page }) => {
    await loginPage.login('standard_user', 'Test123!');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  });
    test('TC-AUTH-003: Empty fields', async ({ page }) => {
    await loginPage.login('', '');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
  });
  test('TC-AUTH-004: Locked account', async ({ page }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
  });
});
