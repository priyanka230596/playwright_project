import { test } from "@playwright/test";

test("window popup handling", async ({ page }) => {
  await page.goto(`https://www.flipkart.com/`);
  await page.waitForTimeout(2000);

  await page.locator(`input[name='q']`).fill("iphone");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Enter");
  
  //listen for new window
  const [newpage]=await Promise.all([
    page.waitForEvent("popup"),
    page.locator('(//a[@class="CGtC98"])[2]').click()
  ])
  //interact with new window
  await newpage.waitForLoadState()
  console.log( await newpage.title())
  await newpage.waitForTimeout(2000)
  await newpage.locator('//button[@class="QqFHMw vslbG+ In9uk2"]').click()


});

test("window handling", async ({ page }) => {
  await page.goto(`https://www.flipkart.com/`);
  await page.waitForTimeout(2000);
await page.locator('//span[text()="Electronics"]').hover()
await page.locator('//a[text()="Cameras & Accessories"]').hover()
await page.locator('//a[text()="DSLR & Mirrorless"]').click()
 
const [newwindow]= await Promise.all([
    await page.waitForEvent('popup'),
    await page.locator('(//div[@class="KzDlHZ"])[3]').click()
])

await newwindow.waitForLoadState()
console.log(await newwindow.title())

  
});

test('demoqa windows poup handling',async({page})=>{
  
})
