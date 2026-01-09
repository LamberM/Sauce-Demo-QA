import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShoppingPage extends BasePage {
    private readonly url = 'https://www.saucedemo.com/cart.html'
    constructor(page: Page) {
        super(page);
    }

    async navigateToShoppingPageByButton(): Promise<void> {
        await this.locator('[data-test="shopping-cart-link"]').click();
        this.waitForPageLoad();
    }

    async getCartItemsCount(): Promise<number> {
        const cartItems = this.page.locator('.cart_item');
        return await cartItems.count();
    }

    async navigateToCheckoutUsingButton(): Promise<void> {
        await this.locator('[data-test="checkout"]').click();
        this.waitForPageLoad();
    }
    async useCountinueShoppingButton(): Promise<void> {
        await this.locator('[data-test="continue-shopping"]').click();
        this.waitForPageLoad();
    }
    async removeAllItemsFromCart(): Promise<void> {
        const buttons = this.locator('[data-test^="remove-"]');
        while (await buttons.count() > 0) {
            await buttons.first().click();
        }
    }
    async removeItemFromCart(): Promise<void> {
        await this.locator(`[data-test^="remove-"]`).first().click();
    }
}