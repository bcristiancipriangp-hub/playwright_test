import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe('Home', () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })
    
    
    test('Open HomePage and verify title', async ({ page }) => {
        //homePage = new HomePage(page);

        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        // verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });

    test('Click get started button using CSS selector', async ({ page }) => {
        //homePage = new HomePage(page);

        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        await expect(page).not.toHaveURL(/.*#get-started/);

        // click the button
        //await page.locator('#get-started').click();
        await homePage.getStartedBtn.click();

        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    });

    test('Verify heading text is visible using text selector.', async ({ page }) => {
        //homePage = new HomePage(page);

        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        // find home text
        //const headingText = page.locator('text="Think different. Make different."');
        const headingText = await homePage.headingText;

        // verify heading text is visible
        await expect(headingText).not.toBeHidden();
        await expect(headingText).toBeVisible();
    });

    test('Verify home link is enabled using text and css selector.', async ({ page }) => {
         //homePage = new HomePage(page);
        // open url
        //await page.goto("https://practice.sdetunicorns.com");
       // await homePage.navigate();

        // find the home text
        //const homeText = page.locator('#zak-primary-menu >> text=Home');
        //const homeText = page.locator('#zak-primary-menu:has-text("Home")');
        const homeText = homePage.homeLink;

        // verify home text is visible
        await expect(homeText).toBeEnabled();
    });

    test('Verify search icon is visible using xpath selector.', async ({ page }) => {
        // homePage = new HomePage(page);
        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        // find the search icon
        //const searchIcon = page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]');
        const searchIcon = homePage.searchIcon;

        // verify home text is visible
        await expect(searchIcon).toBeVisible();
    });

    test('Verify text for all nav links.', async ({ page }) => {
         //homePage = new HomePage(page);
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        // find the nav links
        //const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        const navLinks = homePage.navLinks;

        // verify nav links text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    });

    test('Verify text for one nav link (Blog).', async ({ page }) => {
         //homePage = new HomePage(page);
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        // find the nav links
        //const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
        const navLinks = homePage.navLinks.nth(3);

        // verify nav links text
        expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
    });

    test('Verify text for all nav links using loop.', async ({ page }) => {
         //homePage = new HomePage(page);
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        // open url
        //await page.goto("https://practice.sdetunicorns.com");
        //await homePage.navigate();

        // find the nav links
        //const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        const navLinks = homePage.navLinks;

        //print out all the links
        for (const el of await navLinks.elementHandles()) {
         console.log(await el.textContent());
        }

        // verify nav links text
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    });

});
