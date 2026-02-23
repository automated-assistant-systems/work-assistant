import { test, expect } from '@playwright/test';

// Test for the /login route

test.describe('Login Page', () => {
  test('should render login page with required fields', async ({ page }) => {
    await page.goto('/login');

    // Assert the presence of input fields
    const emailInput = page.getByPlaceholder('Email');
    const passwordInput = page.getByPlaceholder('Password');
    const signInButton = page.getByRole('button', { name: 'Sign In' });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(signInButton).toBeVisible();
  });
});