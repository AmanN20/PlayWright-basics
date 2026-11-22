import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("Learn Playwrright");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .fill("Learn API Testing");
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page
    .getByRole("listitem")
    .filter({ hasText: "Learn Playwrright" })
    .getByLabel("Toggle Todo")
    .check();
});
