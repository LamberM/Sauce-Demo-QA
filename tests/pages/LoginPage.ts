import { Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class LoginPage extends BasePage {
  private readonly url = 'https://www.saucedemo.com/'

  constructor(page: Page) {
    super(page);
  }
    async navigateToLoginPage(): Promise<void> {
    await this.page.goto(this.url);
    this.waitForPageLoad();
    }
    
    async login(username: string, password: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}
