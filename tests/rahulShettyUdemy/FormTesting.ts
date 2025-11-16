import {test,expect} from '@playwright/test'

test('form testing',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    // await page.waitForLoadState('domcontentloaded')
    await page.locator('input[minlength="2"]').fill('Priyanka')
    await page.locator('input[name="email"]').fill('priyankad230596@gmail.com')
    await page.locator('#exampleInputPassword1').fill('Satara@1234')
    await page.locator('#exampleCheck1').check()
    await page.getByLabel('Gender').selectOption('Female')
    await page.getByRole('button',{name:"Submit"}).click()
    await page.getByRole('link',{name:'Shop'}).click()
    const products= page.locator('.card.h-100')
    const productsCount=await products.count()
    console.log(productsCount)
    const product_title_locator=await products.locator('div h4')
    const Allproducts_title=await product_title_locator.allTextContents()
    console.log(Allproducts_title)
    
    
    const productname='iphone X'
    for(let i=0;i< productsCount;i++){
        //getting single Product title
        const productTitle:any=await product_title_locator.nth(i).textContent()
        if(productTitle.trim() === productname){
            await products.locator('button').nth(i).click()
            break;
        }
    }
    await page.locator('.btn-primary').click()
    expect(await page.locator('h4 a').textContent()).toEqual('iphone X')
    await page.getByRole('button',{name:'Checkout'}).click()
    await page.locator('#country').pressSequentially('Ind')
    const list=await page.locator('.suggestions')
    await list.locator('//ul/li/a[text()="India"]').click()
    await page.locator('.btn-success.btn-lg').click()
    expect(await page.locator('.alert-success').textContent()).toEqual(' Success!Thank you! Your order will be delivered in next few weeks :-)')
    
    
    


    

})