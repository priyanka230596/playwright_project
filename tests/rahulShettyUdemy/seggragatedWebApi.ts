// import { test, request, expect } from "@playwright/test";
// import { ApiUtils } from "./utils/ApiUtils";
// // by using below code we can login once and sotre token in localstorage so we dont want to perform login step repeteadly
// // this done by using api

// const loginPayload = {
//   userEmail: "priyankad230596@gmail.com",
//   userPassword: "Satara@1234",
// };
// const placeOrderPayload = {
//   orders: [{ country: "India", productOrderedId: "68a961959320a140fe1ca57e" }],
// };
// let response: Promise<any>
// test.beforeAll(async () => {
//   const apicontext = await request.newContext();
//   const ApiUtils1=new ApiUtils(apicontext,loginPayload)
//   response=await ApiUtils1.createOrder(placeOrderPayload)
//   //login api
  
// // verify create order is success 
//   //place order api
 
// });
// test("overall ecom testing by using Api2", async ({ page }) => {
    
//   //for inserting token
//   page.addInitScript((value) => {
//     window.localStorage.setItem("token", value);
//   }, response.token);
//   await page.goto("https://rahulshettyacademy.com/client/");

//   await page.locator('button[routerlink*="myorders"]').click();
//   const row = page.locator("tbody tr");
//   // await expect(row.first()).toBeVisible() //Or below line
//   await page.locator("tbody").waitFor();
//   const rowCount = await row.count();
//   console.log(rowCount);
//   for (let i = 0; i < rowCount; i++) {
//     let id = await row.nth(i).locator("th").textContent();
//     if (response.orderId.includes(id)) {
//       await row.nth(i).locator('//td/button[text()="View"]').click();
//       break;
//     }
//   }
//   const orderIdDEtails = await page.locator(".col-text").textContent();
//   await page.pause();
//   expect(response.orderId?.includes(orderIdDEtails)).toBeTruthy();
// });
// function createOrder(placeOrderPayload: { orders: { country: string; productOrderedId: string; }[]; }) {
//     throw new Error("Function not implemented.");
// }

