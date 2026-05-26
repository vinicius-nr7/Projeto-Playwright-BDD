import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './support/world.js';

Given('que estou na página de cadastro do site', async function (this: CustomWorld) {
  await this.page.goto('https://www.automationpratice.com.br/register', { waitUntil: 'networkidle' });
});

When('preencho o campo de nome com {string}', async function (this: CustomWorld, nome: string) {
  await this.page.locator('#user').fill(nome);
});

When('preencho o campo de e-mail com um e-mail válido', async function (this: CustomWorld) {
  await this.page.locator('#email').fill(`teste_${Date.now()}@qazando.com.br`);
});

When('preencho a senha com {string}', async function (this: CustomWorld, senha: string) {
  await this.page.locator('#password').fill(senha);
});

When('clico no botão {string}', async function (this: CustomWorld, botao: string) {
  await this.page.locator('button:has-text("Cadastrar")').click();
});

Then('devo ver a mensagem de boas-vindas {string}', async function (this: CustomWorld, mensagem: string) {
  await expect(this.page.locator('body')).toContainText(mensagem, { ignoreCase: true });
});

When('eu tento cadastrar um usuário sem preencher o e-mail', async function (this: CustomWorld) {
  await this.page.locator('#user').fill('Vinicius');
  await this.page.locator('#password').fill('123456');
  await this.page.locator('button:has-text("Cadastrar")').click();
});

Then('o sistema deve exibir o alerta {string}', async function (this: CustomWorld, alerta: string) {
  await expect(this.page.locator('body')).toContainText(alerta, { ignoreCase: true });
});