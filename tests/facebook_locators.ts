import{test,expect}  from '@playwright/test'
test ('facebook test',async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(2000)

    await page.getByPlaceholder("Email address or phone number").fill("9579796607")
    await page.getByTestId('royal-pass').fill('ritika@1234')
    // await page.getByTestId('royal-login-button').click()
    // await page.getByRole("link",{name:'Forgotten password?'}).click()
    await page.getByRole('button',{name:'Create new account'}).click()
    await page.waitForTimeout(4000)
})
test ('facebbok create account page',async({page})=>{
    await page.goto('https://www.facebook.com/r.php?entry_point=login')
    // await page.waitForTimeout(2000)
    // for inputbox-firstname
    await page.getByLabel('First name').fill('elon')
     // for inputbox-surname
    await page.getByLabel('Surname').fill('Musk')
    // dropdown-date dropdown
    await page.getByLabel('Day').selectOption({label:'23'})
    // dropdown-month dropdown
    await page.getByLabel('Month').selectOption({label:'May'})
    await page.getByLabel("Year").selectOption({label:'1996'})
    //radio button -using getByLabel
    await page.getByLabel('Female').check()
    //radio button using = css selector
    await page.locator('input[type="radio"][value="2"]').check()
    await page.waitForTimeout(2000)
})

test('amazon searchbox testing',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
    
    // for search input box
     // await page.getByPlaceholder('Search Amazon.in').fill("mobiles")
    // search by using enter key
    // await page.keyboard.press('Enter')
    // search by using search icon
    // await page.locator('#nav-search-submit-button').click()
    
    // for all dropdown
    // await page.locator('#searchDropdownBox').selectOption('Amazon Fresh')
    // await  page.keyboard.press('Enter')
    // await page.waitForTimeout(2000)

    // for cart option
    await page.locator('#nav-cart-count-container').click()
    await page.waitForTimeout(2000)

    })

    