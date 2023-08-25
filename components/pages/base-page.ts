import { Page, expect, Locator } from '@playwright/test';


export class BasePage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

}