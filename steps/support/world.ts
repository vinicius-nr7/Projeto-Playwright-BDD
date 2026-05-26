import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser() {
this.browser = await chromium.launch({ headless: false, slowMo: 1000 });
    this.context = await this.browser.newContext({
      viewport: { width: 1366, height: 768 }
    });
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);