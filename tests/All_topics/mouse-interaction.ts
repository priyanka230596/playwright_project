import {test,expect} from '@playwright/test'
test.describe('descibe example',async()=>{
    test ('mouse interactions',async({page})=>{
    await page.goto("https://www.browserstack.com/");
    await page.waitForTimeout(2000);

    const dropdown_hover = await page.locator('//button[text()="Developers"]');
    await dropdown_hover.hover();
    await page.waitForTimeout(2000);
    await page.locator('//span[text()="Documentation"]').click();

    await page.waitForTimeout(2000);
    await page.goBack();
    await dropdown_hover.hover();
    await page.getByTitle("Open Source").click();
    await page.waitForTimeout(2000);


})

test ('flipkart mouse hover testing',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page .waitForTimeout(2300)
    // Mouse Hover
    await page.getByLabel('Fashion').hover()
    await page .waitForTimeout(2300)
    await page.getByRole('link',{name:'Women Ethnic'}).hover()
    await page .waitForTimeout(2300)
    await page.getByRole('link',{name:'Women Blouse'}).click()
    
})

})

//for right click
test('right click',async({page})=>{
    await page.goto(`https://swisnl.github.io/jQuery-contextMenu/demo/on-dom-element.html`)
    await page.locator(`//span[text()="right click me 1"]`).click({button:'right'})
    await page.waitForTimeout(2000)

    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator(`//span[text()="Copy"]`).click()
    await page.waitForTimeout(5000)

    //right click in blank space on webpage not on element
    await page.mouse.click(1000,500,{button:'right'})
    await page.waitForTimeout(2000)
    //mouse move
    await page.mouse.move(1000,500,{steps:10})
     await page.waitForTimeout(5000)
})
    
// double click
test('double click',async({page})=>{
    await page.goto(`https://webdriveruniversity.com/Actions/index.html`)
    await page.waitForTimeout(2000)
    page.locator('#double-click').dblclick()
    await page.waitForTimeout(2000)
    //drag and drop
    await page.dragAndDrop('#draggable','.ui-widget-header.ui-droppable')
    await page.waitForTimeout(2000)


    
})



