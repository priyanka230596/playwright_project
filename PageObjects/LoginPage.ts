import{Page,Locator} from '@playwright/test'
 export class LoginPage{
   page:Page;
   userEmail:Locator;
   password:Locator;
   signinbtn:Locator;

   
    constructor(page:any){
        this.page=page
        this.userEmail= page.locator("#userEmail")
        this.password= page.locator("#userPassword");
        this.signinbtn=  page.locator("#login")

        
    }
    
     

     async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     }

     async ValidLogin(userEmail:string,password:string){
        await this.userEmail.fill(userEmail);
        await this.password.fill(password);
        await this.signinbtn.click();

     }


// module.exports=LoginPage
}
