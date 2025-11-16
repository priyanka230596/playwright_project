import test from '@playwright/test'
test('2wayautomation',async({page})=>{
    await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box')
    await page.locator('[name="name"]').nth(0).fill('priyanka')
    await page.locator('input[type="text"]').nth(1).fill('Shil')
    await page.locator('input[type="radio"]').nth(1).click() //select married radio
    await page.locator('input[type="checkbox"]').nth(0).check()
    await page.locator('input[type="checkbox"]').nth(1).check()
    // await page.locator('//option[text()="India"]').selectOption({value:'India'})
    await page.locator('//option[text()="Month"]').selectOption({value:'1'})
    await page.locator('//option[text()="Day"]').selectOption({value:'1'})
    await page.locator('//option[text()="Year"]').selectOption({value:'1'})


})