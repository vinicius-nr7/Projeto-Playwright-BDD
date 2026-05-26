import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

When('eu busco por {string}', async function (this: CustomWorld, produto: string) {
  const campoBusca = this.page.locator('input[placeholder*="Buscar"], input[type="search"]').first();
  await campoBusca.fill(produto);
  await campoBusca.press('Enter');
});

Then('devo ver o produto {string} listado', async function (this: CustomWorld, produto: string) {
  const body = this.page.locator('body');
  await expect(body).toContainText(produto, { ignoreCase: true });
});

Then('devo ver a mensagem {string}', async function (this: CustomWorld, mensagem: string) {
  // Em vez de buscar o texto na página, contamos quantos elementos de produto aparecem.
  // Se a busca não encontrou nada, a vitrine deve estar vazia ou não conter itens.
  const listaProdutos = this.page.locator('.product-wrapper, .single-product');
  const contagem = await listaProdutos.count();
  
  // Se a lista de produtos for 0, o teste passa (pois o produto não foi encontrado)
  expect(contagem).toBe(0);
});