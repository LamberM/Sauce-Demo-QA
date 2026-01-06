import { Page, Locator } from '@playwright/test';

export class BasePage {

    constructor(protected page: Page) { }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }

    getByRole(role: 'button' | 'link' | 'textbox' | 'checkbox' | 'radio' | 'heading' | 'img' | 'listitem' | 'table' | 'row' | 'cell', options?: { name?: string | RegExp; exact?: boolean }): Locator 
        { return this.page.getByRole(role, options); }

    locator(selector: string): Locator { return this.page.locator(selector); } 

}