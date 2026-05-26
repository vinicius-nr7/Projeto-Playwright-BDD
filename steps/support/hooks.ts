import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './world.js';

// Define o tempo limite padrão dos passos para 30 segundos
setDefaultTimeout(30000);

Before(async function (this: CustomWorld) {
  await this.openBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});