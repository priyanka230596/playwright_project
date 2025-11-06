import {test,expect} from '@playwright/test'
test('calender testing',async({page})=>{
    const date='23';
    const month:any='5';
    const year='2027'
    const expectedList=[month,date,year]

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    await page.locator('.react-date-picker').click()
    await page.locator('.react-calendar__navigation__label__labelText--from').click()
    await page.locator('.react-calendar__navigation__label__labelText--from').click()
    await page.getByText(year).click()
    await page.locator('//button[@class="react-calendar__tile react-calendar__year-view__months__month"]').nth(Number(month-1)).click()
    await page.locator('//abbr[text()="'+date+'"]').click()
    //assertion
    //find locator which is common to the date,month and year
    const inputs= page.locator('.react-date-picker__inputGroup__input')
    for(let i=0;i<expectedList.length;i++)
        {
           const value= await inputs.nth(i).inputValue()
           expect(value).toEqual(expectedList[i])
        }




    


})