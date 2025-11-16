import { test, expect } from "@playwright/test";
import { POManager } from "../../../PageObjects/POManager";
import testData from "../../../utils/productsTestData.json";
const testDataObj = JSON.parse(JSON.stringify(testData));
console.log(testDataObj);
for (let data of testDataObj) {
  test(`POM of${data.productTitle}`, async ({ page }) => {
    const poManger = new POManager(page);
    const loginPage = poManger.getLoginPage();
    await loginPage.goTo();
    await loginPage.ValidLogin(
      data[" userEmail"],
      data[" password"]
    );
    const dashboardPage = poManger.getDashboardPage();
    await dashboardPage.searchProductsAddCart(data.productTitle);
    await dashboardPage.NavigateToCartPage();
    const cartPage = poManger.getCartPage();
    await cartPage.verifyProductIsDisplayed(data.productTitle);
    const orderReviewPage = poManger.getOrderReviewPage();
    await orderReviewPage.searchCountryAndselect(data.countryname);
    const orderHistoryPage = poManger.getOrderHistoryPage();
    orderHistoryPage.SearchOrderAndselect();

    
  });
}
