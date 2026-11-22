const { test, expect } = require("@playwright/test");

// Group related TodoMVC tests
test.describe("TodoMVC Application Tests", () => {
  // Execute before every test
  test.beforeEach(async ({ page }) => {
    // Open the TodoMVC application
    await page.goto("https://demo.playwright.dev/todomvc");
  });

  // Test 1: Verify the application loads correctly
  test("should load the TodoMVC application", async ({ page }) => {
    // Verify page URL
    await expect(page).toHaveURL("https://demo.playwright.dev/todomvc/#/");

    // Verify page heading
    await expect(page.getByText("todos", { exact: true })).toBeVisible();
  });

  // Test 2: Add two todo items
  test("should add two todo items and verify them", async ({ page }) => {
    // Locate the todo input textbox
    const todoInput = page.getByPlaceholder("What needs to be done?");

    // Add first todo
    await todoInput.fill("Learn Playwright");
    await todoInput.press("Enter");

    // Add second todo
    await todoInput.fill("Learn API Testing");
    await todoInput.press("Enter");

    // Verify both todo items are visible
    await expect(page.getByText("Learn Playwright")).toBeVisible();

    await expect(page.getByText("Learn API Testing")).toBeVisible();

    // Verify total number of todo items
    await expect(page.locator(".todo-list li")).toHaveCount(2);
  });
});
