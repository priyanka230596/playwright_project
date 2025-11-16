// by using below code we can login once and sotre token in localstorage so we dont want to perform login step repeteadly
// this done by using api
import { test, request, expect } from "@playwright/test";
const loginPayload = {
  userEmail: "priyankad230596@gmail.com",
  userPassword: "Satara@1234",
};
const placeOrderPayload = {
  orders: [{ country: "India", productOrderedId: "68a961959320a140fe1ca57e" }],
};
let token: any;
let orderId: any;
test.beforeAll(async () => {
  const apicontext = await request.newContext();
  //login api
  const loginResponse = await apicontext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login", //url taken from network->Header->requestURL
    { data: loginPayload }
  );
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJSON = await loginResponse.json();
  token = await loginResponseJSON.token;
  console.log(token);
// verify create order is success 
  //place order api
  const orderResponse = await apicontext.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: placeOrderPayload,
      headers: {
        Authorization: token,
        "content-Type": "application/json",
      },
    }
  );
  const orderResponseJson = await orderResponse.json();
  console.log(orderResponseJson);
  orderId = orderResponseJson.orders[0];
});
test("overall ecom testing by using Api", async ({ page }) => {
  //for inserting token
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);
  await page.goto("https://rahulshettyacademy.com/client/");

  await page.locator('button[routerlink*="myorders"]').click();
  const row = page.locator("tbody tr");
  // await expect(row.first()).toBeVisible() //Or below line
  await page.locator("tbody").waitFor();
  const rowCount = await row.count();
  console.log(rowCount);
  for (let i = 0; i < rowCount; i++) {
    let id = await row.nth(i).locator("th").textContent();
    if (orderId.includes(id)) {
      await row.nth(i).locator('//td/button[text()="View"]').click();
      break;
    }
  }
  const orderIdDEtails = await page.locator(".col-text").textContent();
  await page.pause();
  expect(orderId?.includes(orderIdDEtails)).toBeTruthy();
});
