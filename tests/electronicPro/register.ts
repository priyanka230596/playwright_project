import { test, expect, Page } from "@playwright/test";

test("register", async ({ page }) => {
  await page.goto("https://electronicpro.odoo.com/");
  await page.waitForTimeout(2000);

  await page.locator(".nav-link.o_nav_link_btn.ms-2.border.px-3").click();
  await page.locator(`//a[text()="Don't have an account?"]`).click();
  await page.locator("#name").fill("Abhijit");
  await page.locator("#login").fill("abhijitshil2@gmail.com");
  await page.locator("#password").fill("abhijit@1234");
  await page.locator("#confirm_password").fill("abhijit@1234");
  await page.locator(".btn.btn-primary.mb-1").click();
});

test("login", async ({ page }) => {
  await page.goto("https://electronicpro.odoo.com/");
  await page.waitForTimeout(2000);

  await page.locator(".nav-link.o_nav_link_btn.ms-2.border.px-3").click();
  await page.locator("#login").fill("abhijitshil1@gmail.com");
  await page.locator("#password").fill("abhijit@1234");
  await page.locator("//button[text()='Log in']").click();
});

test("shop", async ({ page }) => {
  await page.goto("https://electronicpro.odoo.com/");
  await page.waitForTimeout(2000);

  await page.locator('//div/ul/li/a/span[text()="Shop"][1]').click()
  await page.locator('//a[text()="Anker Power Bank 20,000mAh"]').click()
//   await page.locator('//a[text()="EcoBook Breeze 13"]').click()
  await page.locator('#add_to_cart').click()
  await page.locator('//span[text()="My Cart"]').click()
  await page.waitForTimeout(2000)
  await page.locator('//a/span[text()="Checkout"]').click()
  await page.locator('#o_name').fill('Abhijit')
  await page.locator('#o_email').fill('abhijitshil1@gmail.com')
  await page.locator('#o_phone').fill('9579796607')
  await page.locator('#o_company_name').fill('cfgfn')
  await page.locator('#o_vat').fill('7668')
  await page.locator('#o_street').fill('shymangar')
  await page.locator('#o_street2').fill('natungram')
  await page.locator('#o_city').fill('Kolkata')
  await page.locator('#o_zip').fill('743127')
  await page.locator('#o_state_id').selectOption({value:'612'})
  await page.waitForTimeout(2000)
  await page.locator('//*[@id="wrap"]/div/div[1]/div[3]/div/div/div[2]/div/a[1]').click()
  await page.waitForTimeout(2000)

});
//*[@id="wrap"]/div/div[1]/div[3]/div/div/div[2]/div/a[1]