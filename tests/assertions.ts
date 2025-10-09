import {test,expect} from "@playwright/test"

test('assertions',async({page})=>{
    await page.goto('https://www.myntra.com/')
    await page.waitForTimeout(2000)
   const womenbutton= await page. locator('a[data-index="1"]')
    await womenbutton.click()
    await expect(womenbutton).toHaveAttribute('data-index', '1')
    
})

test ('saucedemo',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(2000)

    await page.locator('input#user-name').fill('standard_user')
    await page.locator('input#password').fill('secret_sauce')
    await page.waitForTimeout(2000)
    
    // const login_btn=await page.locator('input#login-button')
    // await expect(login_btn).toBeEnabled()   //for checking btn is enbled or not
    
     await page.locator('input#login-button').click()
     await page.waitForTimeout(2000)
     await expect(page).toHaveTitle('Swag Labs') //this assertion is used for detect after success login given title is showing or not
    //  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') //this assertion is used to detect  after login success page is navigating to given url or not
})

test('evilstar  with assertions',async({page})=>{
    await page.goto('https://testpages.eviltester.com/styled/index.html')
    await page.getByRole('link',{name:'HTML Form Example'}).click()
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://testpages.eviltester.com/styled/basic-html-form-test.html')

    await page.locator('input[name="username"]').fill('devi')
    await page.locator('//input[@name="password"]').fill('1234')
    await page.locator('textarea[name="comments"]').fill('i will be very happy if i got job in well named orgnisation')
    await page.waitForTimeout(2000)
    const checkbox=await page.locator('input[value="cb2"]')
    await  checkbox.check()
    await expect(checkbox).toBeChecked()
    const radio=await page.locator('input[value="rd2"]')
    await radio.click()
    await expect(radio).toBeEnabled()
    const multiselect_value=await page.locator('select[multiple="multiple"]')
    await multiselect_value.selectOption('ms3')// by value
    await expect(multiselect_value).toBeEnabled()
    const dropdown=await page.locator('select[name="dropdown"]')
    await dropdown.selectOption('dd5')
    await expect(dropdown).toBeTruthy()

   const cancel_btn= await page.locator('input[value="cancel"]')
   await cancel_btn.click()
   await expect(page).toHaveURL('https://testpages.eviltester.com/styled/basic-html-form-test.html')

    const submit_btn=await page.locator('input[value="submit"]')
    await submit_btn.click()
    await expect(page).toHaveTitle('Processed Form Details')
    await page.waitForTimeout(2000)
})

