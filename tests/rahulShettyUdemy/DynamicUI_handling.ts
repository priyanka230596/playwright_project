import { test, Page, expect } from "@playwright/test";

test("register on rahul's website", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.waitForTimeout(2000);

  await page.locator('//a[text()="Register"]').click();
  await page.locator("#firstName").fill("Priyanka");
  await page.locator("#lastName").fill("Shil");
  await page.locator("#userEmail").fill("priyankad230596@gmail.com");
  await page.locator("#userMobile").fill("9579796607");
  const dropdown = page.locator("[formcontrolname=occupation]");
  await dropdown.click();
  await dropdown.selectOption({ value: "3: Engineer" });
  await page.locator("[formcontrolname=gender]").nth(1).click();
  await page.locator("#userPassword").fill("Satara@1234");
  await page.locator("#confirmPassword").fill("Satara@1234");
  await page.locator('//input[@formcontrolname="required"]').check();
  await page.locator("#login").click();
  await page.waitForTimeout(2000);
});

test("login and dynamic ui", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("priyankad230596@gmail.com");
  await page.locator("#userPassword").fill("Satara@1234");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  const products = await page.locator(".card-body");
  const productcount = await products.count();
  console.log(productcount);
  const titles = await page.locator(".card-body b").allTextContents();
  // console.log(titles);
  const productTitle = "ADIDAS ORIGINAL";
  for (let i = 0; i < productcount; i++) {
    console.log(await products.nth(i).locator("b").textContent())
    if ((await products.nth(i).locator("b").textContent()) === productTitle) {
       await  products.nth(i).locator('text= Add To Cart').click()
        break;
    }
    
  }
  // await page.pause()
  await page.locator('[routerlink*="cart"]').click()
  await page.locator("div[class='cartSection']").first().waitFor()
 const checkProductInCartAdded= await page.locator('h3:has-text("ADIDAS ORIGINAL")').isVisible()
 expect(checkProductInCartAdded).toBeTruthy()
 await page.locator('//button[text()="Checkout"]').click()
//  **form**
// await page.locator('[value="4542 9931 9292 2293"]').fill('1234567891234567')
// const dropdownOfDate=await page.locator('//div/select[@class="input ddl"]')
// await dropdownOfDate.nth(0).selectOption({value:'04'})
// await dropdownOfDate.nth(1).selectOption({value:'05'})
// await page.locator("//input[@value='4542 9931 9292 2293']").fill('1234567812345678')
// await page.locator("//div[@class='form__cc']//div[1]//div[1]//input[1]").fill('123')
// await page.locator('/html/body/app-root/app-order/section/div/div/div[2]/div/div/div[3]/div[1]/form/div/div[3]/div/input').fill('Priyanka')
// await page.locator('/html/body/app-root/app-order/section/div/div/div[2]/div/div/div[3]/div[1]/form/div/div[3]/div/input')



//  **handle dynamic dropdown**
 await page.locator('[placeholder*="Select Country"]').pressSequentially('ind')
 const dropdown=page.locator('.ta-results.list-group.ng-star-inserted') //this locator for otions window
 await dropdown.waitFor()
 const options=dropdown.locator('button') //this locator for all options
 const optCount=await options.count()
 for(let i=0;i<optCount;i++){
  let OptText=await  options.nth(i).textContent()
  // console.log(OptText)

  if( OptText?.trim() === "India"){
    await options.nth(i).click()
    break;

  }
 }
 await page.waitForTimeout(3000)
 const placeOrderBtn='//a[text()="Place Order "]'
 await page.waitForSelector(placeOrderBtn,{state:'visible',timeout:3000})
 await page.locator(placeOrderBtn).click()
await expect( page.locator(".hero-primary")).toHaveText(' Thankyou for the order. ')
// ** scenario:after ordertake place pull out order id from page**
const orderId:any=await page.locator('//td/label[@class="ng-star-inserted"]').textContent()


console.log(orderId)
await page.locator('button[routerlink*="myorders"]').click()
const row= page.locator('tbody tr')
// await expect(row.first()).toBeVisible() //Or below line
await page.locator('tbody').waitFor()
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
  const orderIdDEtails=await page.locator('.col-text').textContent()
   expect(orderId?.includes(orderIdDEtails)).toBeTruthy()

});


