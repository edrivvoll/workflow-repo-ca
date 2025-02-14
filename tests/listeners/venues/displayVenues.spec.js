import test, { expect } from "@playwright/test";

test.describe("Venues", () => {
  test("Verifies that when the venue details page", async ({ page }) => {
    await page.goto("/");

    // Making sure container is visible before clicking
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();

    // Clicking first venue
    await venueContainer.locator("a").first().click();

    // Verifying content
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
