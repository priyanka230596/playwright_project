import{expect, Locator, Page} from '@playwright/test'
export class CartPage{
    page:Page
    cartProducts:Locator
    checkoutBtn:Locator


    constructor(page:Page){
        this.page=page
        this.cartProducts=  page.locator("div[class='cartSection']")
        this.checkoutBtn= page.locator('//button[text()="Checkout"]')
        
        
    }
    async verifyProductIsDisplayed(productTitle:string){
        await this.cartProducts.first().waitFor()
        const checkProductInCartAdded=(await this.getProductLocator(productTitle)).isVisible()
        expect(checkProductInCartAdded).toBeTruthy()
        await this.checkoutBtn.click()

    }
    async getProductLocator(productTitle:string){
        return this.page.locator('h3:has-text("'+productTitle+'")')
    }
}