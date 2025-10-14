import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {
    let contactPage : ContactPage;
    
        test('Fill contact form and verify success message', async ({ page }) => {
            contactPage = new ContactPage(page);
        // open url
        //await page.goto("https://practice.sdetunicorns.com/contact");
        await contactPage.contactNavigate();

        // fill in the input fields
        //await page.locator('.contact-name input').fill('Peter');
        //await page.locator('.contact-email input').fill('peter@gmail.com');
        //await page.locator('.contact-phone input').fill('0744555687');
        //await page.locator('.contact-message textarea').fill("Hi! I'm Peter. Please let me in.");
        //await contactPage.contactName.fill('Peter');
        //await contactPage.contactEmail.fill('peter@gmail.com');
        //await contactPage.contactPhone.fill('0744555687');
        //await contactPage.contactMessage.fill("Hi! I'm Peter. Please let me in.");

        // click submit
        //await page.locator('button[type=submit]').click();
        //contactPage.buttonSubmit.click();

        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(3));

        // add a soft assertion
        //await expect.soft(page.locator('.contact-message textarea')).toHaveText("")
        //await expect.soft(contactPage.contactMessage).toHaveText("")

        //to make sure an assertion works
        expect(test.info().errors.length).toBeLessThan(2);

        //verify submit message
        //const successAlert = page.locator('div[role="alert"]');
        //const successAlert = contactPage.successText;
        await expect(contactPage.successText).toHaveText('		Thanks for contacting us! We will be in touch with you shortly	');
        await expect(contactPage.successText).toHaveCSS("background-color","rgb(75, 206, 97)")
       
    });

 });