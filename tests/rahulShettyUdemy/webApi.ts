// by using below code we can login once and sotr token in localstorage so we dont want to perform login step repeteadly
// this done by using api
import { test, request, expect } from "@playwright/test";
const loginPayload = {
  userEmail: "priyankad230596@gmail.com",
  userPassword: "Satara@1234",
};
let token: any;
test.beforeAll(async () => {

  const apicontext = await request.newContext();
  const loginResponse = await apicontext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login", //url taken from network->Header->requestURL
    { data: loginPayload }
  );
  expect(loginResponse.ok()).toBeTruthy()
  const loginResponseJSON=await loginResponse.json();
  token=await loginResponseJSON.token;
  console.log(token)

});
test("place order",async({page})=>{
    page.addInitScript((value)=>{
        window.localStorage.setItem('token',value)
    },token)
    await page.goto('https://rahulshettyacademy.com/client/')
    // await page.locator('#userEmail').fill('priyankad230596@gmail.com')
    // await page.locator('#userPassword').fill('Satara@1234')
    // await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    const products=page.locator('.card-body')
    const titles=await page.locator('.card-body b').allTextContents()
    console.log(titles)
    const count=await products.count()
    console.log(count)
})
