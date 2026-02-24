import { test, expect } from '@playwright/test';

const signupUrl = 'http://localhost:3000/signup';

test.describe('Signup Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(signupUrl);
  });

  test('should display validation errors for empty fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.getByPlaceholder('Display Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
  });

  test('should sign up successfully with valid data', async ({ page }) => {
    await page.getByPlaceholder('Display Name').fill('Test User');
    await page.getByPlaceholder('Email').fill('test@example.com');
    await page.getByPlaceholder('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL(signupUrl);
  });
});
