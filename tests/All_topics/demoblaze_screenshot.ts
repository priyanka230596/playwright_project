import {test,expect} from '@playwright/test'
test('demoblaze',async({page})=>{

     //handling alert
    page.on('dialog',async(dialog)=>{
        console.log( dialog.message())
        await dialog.accept()
    })
    // await page.setViewportSize({width:1920,height:1080})
    await page.goto('https://demoblaze.com/')
    await  page.waitForTimeout(2000)

      //login
    await page.getByRole('link',{name:"Log in"}).click()
    await page.locator('input#loginusername').fill('priyanka-test1')
    await page.locator('input#loginpassword').fill('arijit1')
    await page.getByRole('button',{name:'Log in'}).click()
    await expect(page).toHaveTitle('STORE')

    await page.getByRole('link',{name:'Laptops'}).click()
    await page.getByRole('link',{name:'Sony vaio i5'}).click()
    await page.getByRole('link',{name:"Add to cart"}).click()
    await page .waitForTimeout(2000)

    await page.locator('//a[text()="Cart"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//button[text()="Place Order"]').click()
    

    //fill details
    await page.locator('#name').fill('priyanka-test1')
    await page.locator('#country').fill('India')
    await page.locator('#city').fill('Kolkata')
    await page.locator('#card').fill('23434242')
    await page.locator('#month').fill('5')
    await page.locator('#year').fill('2026')
    // await page.waitForTimeout(2000)
    await page.locator('//button[text()="Purchase"]').click()
    await page.waitForTimeout(2000)

    //screenshot 
    await page.screenshot({path:'screenshot/status.png'})


    })