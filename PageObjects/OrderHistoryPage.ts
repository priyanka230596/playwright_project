import { expect, Locator, Page } from "@playwright/test";
export class OrderHistoryPage {
  page: Page;
//   placeOrderBtn: string;
   orderId_locator:Locator;
   myOrder_link:Locator
   row:Locator;
    orderIdDEtails_locator:Locator

  constructor(page: Page) {
    this.page = page;
    // this.placeOrderBtn = '//a[text()="Place Order "]';
     this.orderId_locator = page.locator('//td/label[@class="ng-star-inserted"]');
     this.myOrder_link=page.locator('button[routerlink*="myorders"]')
     this.row = page.locator("tbody tr");
     this. orderIdDEtails_locator=page.locator(".col-text")
    
  }
  async SearchOrderAndselect() {
const orderId:any=await this.orderId_locator.textContent()


console.log(orderId)
await this.myOrder_link.click()
const row= this.row
// await expect(row.first()).toBeVisible() //Or below line
await this.page.locator('tbody').waitFor()
const rowCount=await row.count()
console.log(rowCount)
for(let i=0;i<rowCount;i++)
  {
    let id=await row.nth(i).locator('th').textContent()
    if(orderId.includes(id) ){
      await row.nth(i).locator('//td/button[text()="View"]').click()
      break;

    }
  }
  const orderIdDEtails=await this.orderIdDEtails_locator.textContent()
   expect(orderId?.includes(orderIdDEtails)).toBeTruthy()
  }
}
