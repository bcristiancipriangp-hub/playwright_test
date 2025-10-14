import { Locator, Page } from '@playwright/test';

class ContactPage {
    private page: Page;
    contactName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    contactMessage: Locator;
    buttonSubmit: Locator;
    successText: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.contactName = page.locator('.contact-name input');
        this.contactEmail = page.locator('.contact-email input');
        this.contactPhone = page.locator('.contact-phone input');
        this.contactMessage = page.locator('.contact-message textarea');
        this.buttonSubmit = page.locator('button[type=submit]');
        this.successText = page.locator('div[role="alert"]');

    }

    async contactNavigate() {
        await this.page.goto('/contact')
    }

    async submitForm(name: string, email: string, phone: string, message: string) {
        await this.contactName.fill(name)
        await this.contactEmail.fill(email)
        await this.contactPhone.fill(phone)
        await this.contactMessage.fill(message)
        await this.buttonSubmit.click()
    }
}

export default ContactPage;