import  test from '@playwright/test'
test('css selector1',async({page})=>{
    await page.goto('https://bookcart.azurewebsites.net/register')
    await page.waitForTimeout(2000)
    //css locator with class for  first name
    await page.locator('mat-label.ng-tns-c508571215-1').fill('Priyanka')
    // css locator with attribute for last name
    await page.locator('input[placeholder="Last Name"]').fill('Shil')
    // css  locator with class for username
    await page.locator('input.ng-tns-c508571215-3').fill('Priyanka shil')
    // css locator with attribute for password
    await page.locator('input[placeholder="Password"] ').fill('Satara@1234')
    await page.locator('input[formcontrolname="confirmPassword"]').fill('Satara@1234')
     //  css locator with attribute for radio
    await page.locator('input[type="radio"]').last().click()
    await page.waitForTimeout(2000)
    // directly copied  from browser using copy->copy selector option
    await page.locator('body > app-root > div > app-user-registration > div > mat-card > mat-card-content > form > mat-card-actions').click()
    await page.waitForTimeout(2000)
     
})

test ('xpath1',async({page})=>{
    await page.goto('https://bookcart.azurewebsites.net/register')
    await page.waitForTimeout(2000)
    await page.locator('//mat-label[@class="ng-tns-c508571215-1"]').fill('Priyanka')
    await page.locator('//input[@placeholder="Last Name"]').fill('Shil')
    await page.locator('//input[@placeholder="User name"]').fill('Priyanka shil')
    await page.locator('//input[@placeholder="Password"] ').fill('Satara@1234')
    await page.locator('//input[@formcontrolname="confirmPassword"]').fill('Satara@1234')
    await page.locator('//input[@type="radio"]').last().click()
    await page.waitForTimeout(2000)
    await page.locator('//span[text()="Register"]').click()
    await page.waitForTimeout(2000)
     
})