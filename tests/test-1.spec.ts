import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page1.goto('https://virtual.tdea.edu.co/login/index.php');
  await page1.getByRole('textbox', { name: 'Nombre de usuario' }).click();
  await page1.getByRole('textbox', { name: 'Nombre de usuario' }).fill('ricardo.rendon');
  await page1.getByRole('textbox', { name: 'Contraseña' }).click();
  await page1.getByRole('textbox', { name: 'Contraseña' }).fill('LoRe2006');
  await page1.getByRole('button', { name: 'Acceder' }).click();
});