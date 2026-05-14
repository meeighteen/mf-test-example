import { test } from '@playwright/test';

test('modo manual interactivo', async ({ page }) => {
  // 1. IMPORTANTE: Quitar el límite de tiempo de 30s
  test.setTimeout(1000000000); 

  await page.goto('http://localhost:3000');
  await page.pause();
});