import { Locator, Page } from "@playwright/test";
export class DashBoardPage {
  page: Page;
  products:Locator;
  productText:Locator;
  cart:Locator
  constructor(page: Page) {
    this.page = page;
   
    this.products = page.locator(".card-body");

    this.productText = page.locator(".card-body b");
    this.cart = page.locator('[routerlink*="cart"]');
  }
  async searchProductsAddCart(productTitle:string) {
    await  this.page.waitForLoadState("networkidle");
    const titles = await this.productText.allTextContents();
    const productcount = await this.products.count();
    console.log(productcount);
    console.log(titles);
    for (let i = 0; i < productcount; i++) {
      console.log(await this.products.nth(i).locator("b").textContent());
      if ((await this.products.nth(i).locator("b").textContent()) === productTitle) {
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }
  async NavigateToCartPage(){
    await this.cart.click()
  }
}
