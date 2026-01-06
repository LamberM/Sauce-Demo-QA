import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    private readonly url = 'https://www.saucedemo.com/checkout-step-one.html'
    constructor(page: Page) {
        super(page);
    }

    async navigateToCheckoutPage(): Promise<void> {
        await this.page.goto(this.url);
        this.waitForPageLoad();
    }
    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async continueToNextCheckoutStep(): Promise<void> {
        await this.page.locator('[data-test="continue"]').click();
        this.waitForPageLoad();
    }
    async finishCheckout(): Promise<void> {
        await this.page.locator('[data-test="finish"]').click();
        this.waitForPageLoad();
    }
    async cancelCheckout(): Promise<void> {
        await this.page.locator('[data-test="cancel"]').click();
        this.waitForPageLoad();
    }
    async getErrorMessage(): Promise<string> {
        return await this.page.locator('[data-test="error"]').innerText();
    }
}