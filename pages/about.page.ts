import { Page } from '@playwright/test';

class AboutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async AboutNavigate() {
        await this.page.goto('/about')
    }
}

export default AboutPage;