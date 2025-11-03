import {test,Page} from '@playwright/test'

test("register on rahul's website",async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.waitForTimeout(2000)

    await page.locator('//a[text()="Register"]').click()
    await page.locator("#firstName").fill('Priyanka')
    await page.locator("#lastName").fill('Shil')
    await page.locator("#userEmail").fill('priyankad230596@gmail.com')
    await page.locator("#userMobile").fill('9579796607')
    const dropdown=page.locator('[formcontrolname=occupation]')
    await dropdown.click()
    await dropdown.selectOption({value:"3: Engineer"})
    await page.locator('[formcontrolname=gender]').nth(1).click()
    await page.locator('#userPassword').fill('Satara@1234')
    await page.locator('#confirmPassword').fill('Satara@1234')
    await page.locator('//input[@formcontrolname="required"]').check()
    await page.locator('#login').click()
    await page.waitForTimeout(2000)

    
})

test(`login on rahul's website`,async({page})=>{
    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill('priyankad230596@gmail.com')
    await page.locator('#userPassword').fill('Satara@1234')
    await page.locator('#login').click()
    await page.waitForLoadState('networkidle')
    const titles=await page.locator('.card-body b').allTextContents()
    console.log(titles)
})

// test('dynamic UI handling',async({page})=>{
//     await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash')
    
    
// })