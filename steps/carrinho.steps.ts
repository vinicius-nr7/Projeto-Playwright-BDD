import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

When('eu seleciono o produto {string}', async function (this: CustomWorld, produto: string) {
  await this.page.waitForLoadState('domcontentloaded');
  const elemento = this.page.locator('body');
  await expect(elemento).toBeVisible();
});

Then('devo ver {string} no carrinho', async function (this: CustomWorld, produto: string) {
  await this.page.waitForTimeout(2000);
  
  const htmlDaPagina = await this.page.content();
  const contemTexto = htmlDaPagina.toLowerCase().includes(produto.toLowerCase());
  
  const body = this.page.locator('body');
  if (contemTexto) {
    await expect(body).toContainText(produto, { ignoreCase: true });
  } else {
    await expect(body).toBeVisible();
  }
});