import { test, expect } from "@playwright/test";
import AboutPage from "../pages/about.page";

test.describe('Home', () => {
    let aboutPage;

    test.beforeEach(async ({ page }) => {
        aboutPage = new AboutPage(page);
        await aboutPage.AboutNavigate();
    })

    test('Open About page and verify title', async ({ page }) => {

        // verify title
        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    });

});
