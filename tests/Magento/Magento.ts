import {Page,test} from "@playwright/test"

// await page.locator('').fill()
// await page.locator('').click()

// test('register functionality',async({page})=>{
//     await page.goto('https://magento-demo.mageplaza.com/')
//     await page.waitForTimeout(2000)

//     await page.locator('#idrRiNxEwI').click()
//     await page.waitForTimeout(2000)//*[@id="idrRiNxEwI"]
//     await page.locator('#firstname').fill('arijit')
//     await page.locator('#lastname').fill('shil')
//     await page.locator('#email_address').fill('arijitshil290722@gmail.com')
//     await page.locator('#password').fill('Satara@1234')
//     await page.locator('#password-confirmation').fill('Satara@1234')
//     await page.locator('#show-password').check()
//     await page.locator('//button/span[text()="Create an Account"]').click()

// })
test('login functionality',async({page})=>{
    await page.goto('https://magento-demo.mageplaza.com/')
    await page.waitForTimeout(2000)

    // const loginlink=
    await page.locator('//li/a[text()="Sign In"][1]').click()
    // await loginlink.waitFor({state:'visible',timeout:60000})
    // await loginlink.click()
    await page.waitForTimeout(2000)
    await page.locator('#email').fill('roni_cost@example.com')
    await page.locator('#pass').fill('roni_cost3@example.com')
    await page.locator('//label/span[text()="Show Password"]').check()
    await page.locator('.action.login.primary').click()

})
