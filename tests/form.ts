import test, { expect } from '@playwright/test'
test("demoqa practice form", async ({ page }) => {
  await page.goto(`https://demoqa.com/automation-practice-form`);
  await  page.locator('.text-center').waitFor({timeout:4000})

  await page.locator('input[placeholder="First Name"]').fill("Priyanka");
  await page.locator('input[placeholder="Last Name"]').fill("Shil");
  await page.locator("#userEmail").fill("priyankaShil@gmail.com");
  await page.locator('//label[@for="gender-radio-2"]').click()
    const contact = await page.locator('input[maxlength="10"]');
  await contact.fill("9123747116");
//    await page.waitForTimeout(2000);

//   await page.waitForTimeout(2000);
  await page.locator('#subjectsInput').fill('Playwright')
//   await page.waitForTimeout(2000);
  await page.locator('//label[@for="hobbies-checkbox-1"]').check()
  await page.locator('//label[@for="hobbies-checkbox-2"]').check()
  await page.locator('//label[@for="hobbies-checkbox-3"]').check()
  // await page.waitForTimeout(2000);
// await page.locator('#hobbies-checkbox-1').check()
// const [upload]= await Promise.all([
//     await page.waitForEvent('filechooser'),
//      page.locator('input[type="file"]').click()
// ])
// const ismultiple=await upload.isMultiple()
// console.log(ismultiple)

// await upload.setFiles(['C:/Users/priya/OneDrive/Pictures/birds.jpg'])

// await page.waitForTimeout(2000);
// file upload
await page.setInputFiles('input[id="uploadPicture"]',["C:/Users/priya/OneDrive/Pictures/birds.jpg"])
// date select
  //  await page.locator('#dateOfBirthInput').fill('23 may 1996')
  const date:any='23'
  const month='5'
  const year='2027'
   const expectedDate='23 may 2027'
  await page.locator('#dateOfBirthInput').click()
  await page.locator('.react-datepicker__year-select').selectOption({value:'2027'})
  await page.locator('.react-datepicker__month-select').selectOption({value:'4'})
  
  await page.locator('.react-datepicker__day ').nth(Number(date-1)).click()
  const birthdate=await page.locator('#dateOfBirthInput').inputValue()
  await expect(birthdate).toEqual(expectedDate)




});
 test ('dropdown',async({page})=>{
  await page.goto(`https://demoqa.com/automation-practice-form`);
  // Click on dropdown to open it
   await page.locator('//*[@id="state"]/div/div[2]/div').click()
   await page.locator('#react-select-3-option-3').click()
   await page.locator('//*[@id="city"]/div/div[2]/div').click()
   await page.locator('#react-select-4-option-1').click()
   await page.locator('textarea[placeholder="Current Address"]').fill('efsffsdfsdf')


 })

//  this locator identified by using right click on inspected code of that webelement and then 
// click copy->copy xpath->then we got following locator
 //*[@id="state"]/div/div[2]/div
