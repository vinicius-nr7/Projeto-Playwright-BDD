import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // slowMo faz o Playwright esperar 500ms entre cada ação
    launchOptions: {
      slowMo: 500, 
    },
    headless: false, // Garante que o navegador vai abrir
  },
});