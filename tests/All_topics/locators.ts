import test from '@playwright/test'
test('locators',async({page})=>{
    await page.goto('https://www.amazon.in/')
    //  by getByrole
    // await page.getByRole('link',{name:'Sign in'}).click()
    // await  page.waitForTimeout(3000)

    // getbylabels
    // await page.getByLabel('Search Amazon.in',{exact:true}).first().click()
    // await  page.waitForTimeout(3000)
    // await page.getByLabel('Amazon.in',{exact:true}).first().click()
    // await  page.waitForTimeout(3000)

    

    // // by id
    // await page.locator('#twotabsearchtextbox').fill('car')
    // await  page.waitForTimeout(3000)
    
    // by  attributes-using placeholder attribute
    // await page.locator('[placeholder="Search Amazon.in"]').fill('mobiles')
    //  await  page.waitForTimeout(3000)

    // //  by class attribute
    // await page.locator('.nav-input nav-progressive-attribute').first().fill('saree')
    // await  page.waitForTimeout(3000)

    await page.getByText('MX Player').click()
    await  page.waitForTimeout(3000)

})
test('facebook login page',async({page})=>{
    await page.goto('https://www.facebook.com/')
    // await page.waitForTimeout(2000)
     
    await page.reload()

    //using id
    // await page.locator('#email').fill('priyanka shil')
    // await page.waitForTimeout(2000)

    // using class-not working showing error

    // await page.locator('.inputtext._55r1._6luy').fill('arijit shil')
    // await page.waitForTimeout(2000)

    // using attribute
    await page.locator('[aria-label="Email address or phone number"]').fill('priyankaldas23@gmail.com')
    await page.waitForTimeout(2000)

    await page.locator('[placeholder="Password"]').fill('ritika@1234')
    await page.waitForTimeout(2000)

    await page.locator('[name="login"]').click()
    await page.waitForTimeout(2000)
    

})

test('css selector',async({page})=>{
    await page.goto('https://www.naukri.com/')
    await page.waitForTimeout(2000)

    await page.locator('#login_Layer').click()
     await page.waitForTimeout(2000)

     await page.locator('input[placeholder="Enter your active Email ID / Username"]').fill('priyankashil9163@gmail.com')
     await page.locator('input[placeholder="Enter your password"]').fill('priyanka9163')
     await page.waitForTimeout(2000)
     await page.locator('button[type="submit"]').click()
     await page.waitForTimeout(2000)
     
     
})

test('xpath-attribute',async({page})=>{
     await page.goto('https://www.naukri.com/')
     await page.waitForTimeout(2000)
    //  bu using xpath  attribute

     await page.locator('//a[@id="login_Layer"]').click()
     await page.waitForTimeout(2000)
     await page.locator('//input[@placeholder="Enter your active Email ID / Username"]').fill('priyankashil9163@gmail.com')
     await page.locator('//input[@placeholder="Enter your password"]').fill('priyanka9163')
     await page.waitForTimeout(2000)

     await page.locator('//button[@type="submit"]').click()
     await page.waitForTimeout(2000)
    })

    test('xpath-text',async({page})=>{
     await page.goto('https://www.naukri.com/')
     await page.waitForTimeout(2000)
    //  bu using xpath  attribute

     await page.locator('//a[text()="Login"]').click()
     await page.waitForTimeout(2000)

        
    })