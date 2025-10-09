import {test,expect} from '@playwright/test'

test('iframe',async({page})=>{
    await page.goto('https://testpages.eviltester.com/styled/iframes-test.html')
    await page.waitForTimeout(2000)

    const text1= await page.locator('//h1').innerText()
    console.log(text1)

    const text2=await page.locator('//p[contains(text(),"iFrames are nested pages")]').innerText()
    console.log(text2)

    const frame1=await page.frameLocator('#thedynamichtml')

    const text3=await frame1.locator('//body/h1').innerText()
    console.log(text3)
    
})

test('iframe finding and handling',async({page})=>{
    await page.goto('https://www.geeksforgeeks.org/software-testing/difference-between-playwright-and-selenium/')
    await page.waitForTimeout(2000)
//finding total no of frames on webpage
    const allframes=await page.frames()
    console.log(`no of frames=${allframes.length}`)


})
test('demoqa iframe testing',async({page})=>{
    await page.goto(`https://demoqa.com/frames`)
    const allframes=await page.frames()
    console.log(allframes.length)
   const frame1= await page.frameLocator('#frame1')
   const frame=await frame1.locator('#sampleHeading').innerText()
   console.log(frame)
   const frame2=await page.frameLocator('#frame2')
   const nextframe=await frame2.locator('#sampleHeading').innerText()
   console.log(nextframe)
})
