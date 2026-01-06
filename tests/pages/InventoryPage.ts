import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    private readonly url = 'https://www.saucedemo.com/inventory.html'
    constructor(page: Page) {
        super(page);
    }

    async navigateToInventoryPage(): Promise<void> {
        await this.page.goto(this.url);
        this.waitForPageLoad();
    }

    async sortItemsBy(option: 'Name (A to Z)' | 'Name (Z to A)' | 'Price (low to high)' | 'Price (high to low)'): Promise<void> {
        await this.page.locator('.product_sort_container').selectOption({ label: option });
    }

    async addItemToCart(option: '#add-to-cart-sauce-labs-onesie' | '#add-to-cart-sauce-labs-bike-light' |
        '#add-to-cart-sauce-labs-bolt-t-shirt' | '#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)' |
        '#add-to-cart-sauce-labs-backpack' | '#add-to-cart-sauce-labs-fleece-jacket'): Promise<void> {
        await this.locator(option).click();
    }

    async addRandomProductsWithSeed(count: number, seed = 123) {
    const rand = this.seededRandom(seed);
    const buttons = this.page.locator('[data-test^="add-to-cart-"]');

    const used = new Set<number>();

    while (used.size < count) {
        const index = Math.floor(rand() * await buttons.count());
        await buttons.nth(index).click();
        used.add(index);
    }
    }

    async addAllItemsToCart(): Promise<void> {
        const buttons = this.locator('[data-test^="add-to-cart-"]');
        while (await buttons.count() > 0) {
            await buttons.first().click();
        }
    }

    private seededRandom(seed: number) {
        return () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
    }
}