import { test, expect } from "@playwright/test";
import { POManager } from "../../../PageObjects/POManager";

test("PoM", async ({ page }) => {
  const userEmail: string = "priyankad230596@gmail.com";
  const password: string = "Satara@1234";
  const productTitle = "ADIDAS ORIGINAL";
  const countryname="India"

  const poManger = new POManager(page);
  const loginPage=poManger.getLoginPage()
  await loginPage.goTo();
  await loginPage.ValidLogin(userEmail, password);
  const dashboardPage = poManger.getDashboardPage();
  await dashboardPage.searchProductsAddCart(productTitle);
  await dashboardPage.NavigateToCartPage();
  const cartPage=poManger.getCartPage()
  await cartPage.verifyProductIsDisplayed(productTitle)
  const orderReviewPage=poManger.getOrderReviewPage()
  await orderReviewPage.searchCountryAndselect(countryname)
  const orderHistoryPage=poManger.getOrderHistoryPage()
  orderHistoryPage.SearchOrderAndselect()

  // await page.pause()



  //  **handle dynamic dropdown**
  
   //this locator for otions window
 ;
  
  //  await page.waitForTimeout(3000)
  
  
  // ** scenario:after ordertake place pull out order id from page**
  

  
 
  // const row = page.locator("tbody tr");
  // await expect(row.first()).toBeVisible() //Or below line
  
  // const rowCount = await row.count();
  // console.log(rowCount);
  // for (let i = 0; i < rowCount; i++) {
  //   let id = await row.nth(i).locator("th").textContent();
  //   if (orderId.includes(id)) {
  //     await row.nth(i).locator('//td/button[text()="View"]').click();
  //     break;
  //   }
  // }
  // const orderIdDEtails = await page.locator(".col-text").textContent();
  // expect(orderId?.includes(orderIdDEtails)).toBeTruthy();
});
