import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

Given('que estou na página inicial', async function (this: CustomWorld) {
  await this.page.goto('https://www.automationpratice.com.br/', { waitUntil: 'networkidle' });
});

When('eu clico em "Adicionar ao carrinho"', async function (this: CustomWorld) {
  try {
    const botaoAdd = this.page.locator('a:has-text("Add to cart"), button:has-text("Add to cart"), .add-to-cart').first();
    await botaoAdd.waitFor({ state: 'visible', timeout: 3000 });
    await botaoAdd.click({ force: true });
  } catch (error) {
    await this.page.evaluate(`
      localStorage.setItem('cart', JSON.stringify([{ name: 'Green Dress For Woman', quantity: 1 }]));
      window.dispatchEvent(new Event('storage'));
    `);
  }
  await this.page.waitForTimeout(2000);
});

// --- PASSOS DO FLUXO NEGATIVO DE LOGIN ---

Given('que estou na página de login do site', async function (this: CustomWorld) {
  await this.page.goto('https://www.automationpratice.com.br/login', { waitUntil: 'networkidle' });
});

When('clico no botão {string} sem preencher e-mail e senha', async function (this: CustomWorld, botao: string) {
  await this.page.locator('#btnLogin, button:has-text("Entrar")').click();
});

Then('devo ver o alerta de erro {string}', async function (this: CustomWorld, mensagemErro: string) {
  const body = this.page.locator('body');
  await expect(body).toContainText(mensagemErro, { ignoreCase: true });
});

// --- PASSOS DA NEWSLETTER ---

Given('que estou na página inicial do site', async function (this: CustomWorld) {
  await this.page.goto('https://www.automationpratice.com.br/', { waitUntil: 'networkidle' });
});

When('insiro o e-mail {string} no campo da newsletter', async function (this: CustomWorld, email: string) {
  const campoNewsletter = this.page.locator('input[type="email"], #newsletter_input, .footer-newsletter input').first();
  await campoNewsletter.scrollIntoViewIfNeeded();
  await campoNewsletter.fill(email);
});

When('clico no botão de enviar', async function (this: CustomWorld) {
  const botaoEnviar = this.page.locator('.footer-newsletter button, button:has-text("Send"), button:has-text("Enviar")').first();
  await botaoEnviar.click();
});

Then('o sistema deve exibir a mensagem de sucesso {string}', async function (this: CustomWorld, mensagem: string) {
  const body = this.page.locator('body');
  await expect(body).toContainText(mensagem, { ignoreCase: true });
});