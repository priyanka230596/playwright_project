import {test,expect} from '@playwright/test'
test('roboticqa-basic ui',async({page})=>{
    await page.goto('https://roboticqa.com/')
    await page.waitForTimeout(2000)

    await page.locator('input#identifier').fill('standard_user')
    await page.locator('input#password').fill('password123')
    await page.getByRole('button',{name:"Sign In"}).click()

    await expect(page).toHaveTitle('RoboticQA Cart - Home')
   
    await page.getByRole('tab',{name:'Testing Ground'}).click()
    await page.locator('label[for="terms2"]').check()
    await page.locator('label[for="r2"]').click()
    await page.locator('#test-input').fill('i am happy')
    await page.locator('#test-textarea').fill('jayguru')
    await page.getByRole('button',{name:'Add'}).click()
    await page.waitForTimeout(2000)
    await page.locator('')

})

test('iframe-roboticqa',async({page})=>{
    await page.goto('https://roboticqa.com/')
    await page.waitForTimeout(2000)
    await page.locator('input#identifier').fill('standard_user')
    await page.locator('input#password').fill('password123')
    await page.getByRole('button',{name:"Sign In"}).click()

    await expect(page).toHaveTitle('RoboticQA Cart - Home')
   
    await page.getByRole('tab',{name:'Testing Ground'}).click()
    await page.waitForTimeout(2000)
      
    const frame1=await page.frame({url:'https://roboticqa.com/nested-iframe-content.html'})

    const heading=await frame1?.locator('//body/h2').innerText()
    console.log(heading)

    await frame1?.locator('input#popup-text').fill('jayguru')
    await page.waitForTimeout(2000)
    await frame1?.getByRole('button',{name:'Show Popup'}).click()
    await page.waitForTimeout(5000)
})

test('handling alerts',async({page})=>{
    await page.goto("https://testpages.eviltester.com/styled/alerts/alert-test.html")

    // simple alert
     page.once('dialog',async(dialog)=>{
        await page.waitForTimeout(2000)
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator('input#alertexamples').click()
    await page.waitForTimeout(2000)

    // confirm alert
    page.once('dialog',async(dialog1)=>{
        await page.waitForTimeout(2000)
        console.log(`dialobox message is ${dialog1.message()}`)
        await dialog1.dismiss()
    })
    await page.locator('input#confirmexample').click()
    await page.waitForTimeout(2000)

    // prompt box
    page.once('dialog',async(prompt)=>{
        await page.waitForTimeout(2000)
        console.log(prompt.message())
        await prompt.accept("10")
    })
    await page.locator('input#promptexample').click()
     await page.waitForTimeout(2000)

})

test('alert homework',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    // simple alert
//   await page.locator('//a[contains(text(),"Alert with OK ")]').click()

    page.once('dialog',async(dialog)=>{

        console.log(dialog.message())
        await dialog.accept()
    })
    
    await page.locator('.btn.btn-danger').click()
    

    // confirm alert
    await page.getByRole('link',{name:"Alert with OK & Cancel "}).click()
    page.once('dialog',async(confirm)=>{
        console.log(confirm.message())
        await confirm.accept()
    })
    await page.locator('.btn.btn-primary').click()


    // prompt box
    await page.getByRole('link',{name:"Alert with Textbox "}).click()
    page.once('dialog',async(prompt)=>{
        console.log(prompt.message())
        await prompt.accept("priyanka")
    })
    await page.locator('.btn.btn-info').click()
    
})