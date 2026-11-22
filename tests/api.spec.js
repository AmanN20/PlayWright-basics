const { test, expect } = require("@playwright/test");

test.describe("API Testing", () => {
  test("should fetch user details successfully", async ({ request }) => {
    // Send GET request to the API
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    // Verify HTTP status code
    expect(response.status()).toBe(200);

    // Convert response into JSON
    const responseBody = await response.json();

    // Verify response body
    expect(responseBody.id).toBe(1);

    expect(responseBody.name).toBe("Leanne Graham");

    expect(responseBody.username).toBe("Bret");

    expect(responseBody.email).toBe("Sincere@april.biz");
  });
});
