const { test, expect } = require("@playwright/test");
const { TodoPage } = require("../pages/TodoPage");

test.describe("TodoMVC Application Tests using POM", () => {
  let todoPage;

  // Execute before every test
  test.beforeEach(async ({ page }) => {
    // Create TodoPage object
    todoPage = new TodoPage(page);

    // Open TodoMVC
    await todoPage.open();
  });

  // Test 1: Verify application loads
  test("should load the TodoMVC application", async ({ page }) => {
    await expect(page).toHaveURL("https://demo.playwright.dev/todomvc/#/");

    await expect(todoPage.heading).toBeVisible();
  });

  // Test 2: Add two todo items
  test("should add two todo items successfully", async ({ page }) => {
    // Add first todo
    await todoPage.addTodo("Learn Playwright");

    // Add second todo
    await todoPage.addTodo("Learn API Testing");

    // Verify first todo is visible
    await expect(todoPage.getTodo("Learn Playwright")).toBeVisible();

    // Verify second todo is visible
    await expect(todoPage.getTodo("Learn API Testing")).toBeVisible();

    // Verify total todo count
    await expect(todoPage.todoItems).toHaveCount(2);
  });
});
