import { Page } from '@playwright/test';
import UploadComponent from './components/upload.component';

class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    uploadComponent() {
        return new UploadComponent(this.page);
    }

    async cartNavigate() {
        await this.page.goto('/cart')
    }
}

export default CartPage;