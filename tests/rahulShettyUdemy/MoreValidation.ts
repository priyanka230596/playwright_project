import{test,expect} from '@playwright/test'
test('popup validation',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    expect( page.getByPlaceholder('Hide/Show Example')).toBeVisible()
    await page.locator('[value="Hide"]').click()
    expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden()
    await page.locator('[value="Show"]').click()
    expect( page.getByPlaceholder('Hide/Show Example')).toBeVisible()



})