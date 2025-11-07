import{test,expect} from '@playwright/test'
test('popup validation',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    expect( page.getByPlaceholder('Hide/Show Example')).toBeVisible()
    await page.locator('[value="Hide"]').click()
    expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden()
    await page.locator('[value="Show"]').click()
    expect( page.getByPlaceholder('Hide/Show Example')).toBeVisible()

    //alert popup
page.once('dialog',dialog =>dialog.accept())
await page.locator('#alertbtn').click()
// confirm popup
 page.once('dialog',dialog=>dialog.accept())
await page.locator('#confirmbtn').click()
// mouse hover
await page.locator('#mousehover').hover()
// iframe
const FramePage=page.frameLocator('#courses-iframe')
// in below line original locator is li a[href="lifetime-access"] but showing 2 matching element 
// but out of 2 one of the ele ment is hidden so inorder to select only visible element we  added :visible in locator
await FramePage.locator('li a[href="lifetime-access"]:visible').click()
const text= await FramePage.locator('.text h2').textContent()
const arr:any=text?.split(' ')
const grabtext=arr[1]
console.log(grabtext)



})