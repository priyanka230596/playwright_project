import { LoginPage } from "./LoginPage"
import { DashBoardPage } from "./DashboardPage"
import {CartPage} from './CartPage'
import { Page } from "@playwright/test"
import { OrderReviewPage } from "./OrderReviewPage"
import { OrderHistoryPage } from "./OrderHistoryPage"
export class POManager{
    loginPage:LoginPage
    dashboardPage:DashBoardPage
    cartPage:CartPage
    orderReviewPage:OrderReviewPage
    orderHistoryPage:OrderHistoryPage
    constructor(page:Page){
        this.loginPage= new LoginPage(page)
       this.dashboardPage=new DashBoardPage(page)
       this.cartPage=new CartPage(page)
       this.orderReviewPage=new OrderReviewPage(page) 
       this.orderHistoryPage=new OrderHistoryPage(page)
    }
    getLoginPage(){
    return this.loginPage
   }
   getDashboardPage(){
    return this.dashboardPage
   }
   getCartPage(){
    return this.cartPage
   }
   getOrderReviewPage(){
    return this.orderReviewPage
   }
   getOrderHistoryPage(){
    return this.orderHistoryPage
   }
}


