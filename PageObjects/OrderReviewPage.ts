import { expect, Locator, Page } from "@playwright/test";
export class OrderReviewPage {
  page: Page;
  dropdown_locator: Locator;
  dropdown: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.dropdown_locator = page.locator('[placeholder*="Select Country"]');
    this.dropdown = page.locator(".ta-results.list-group.ng-star-inserted");
   
  }

  async searchCountryAndselect(countryname: string) {
    await this.dropdown_locator.pressSequentially(countryname);
    await this.dropdown.waitFor();
    const options = this.dropdown.locator("button"); //this locator for all options
    const optCount = await options.count();
    for (let i = 0; i < optCount; i++) {
      let OptText = await options.nth(i).textContent();
      // console.log(OptText)

      if (OptText?.trim() === countryname) {
        await options.nth(i).click();
        break;
      }
    }
    const placeOrderBtn='//a[text()="Place Order "]'
     await this.page.waitForSelector(placeOrderBtn,{state:'visible',timeout:3000})
     await this.page.locator(placeOrderBtn).click()
    await expect( this.page.locator(".hero-primary")).toHaveText(' Thankyou for the order. ')

  }
}
