// export class ApiUtils{
//     apicontext

//     loginPayload
    
//     constructor(apicontext:any,loginpayload:any){
//         this.apicontext=apicontext
//         this.loginPayload=loginpayload

//     }

//     async getToken(){
//         const loginResponse = await this.apicontext.post(
//     "https://rahulshettyacademy.com/api/ecom/auth/login", //url taken from network->Header->requestURL
//     { data: this.loginPayload }
//   );
 
//   const loginResponseJSON = await loginResponse.json();
//   const token = await loginResponseJSON.token;
//   console.log(token);
//   return token;
//     }

//     async createOrder(placeOrderPayload: any){
//         let response:{token:any;orderId:any}={
//             token: "",
//             orderId: ""
//         }
    
//          response.token=await this.getToken()
//          const orderResponse = await this.apicontext.post(
//             "https://rahulshettyacademy.com/api/ecom/order/create-order",
//             {
//               data: placeOrderPayload,
//               headers: {
//                 Authorization: this.getToken(),
//                 "content-Type": "application/json",
//               },
//             }
//           );
//           const orderResponseJson = await orderResponse.json();
//           console.log(orderResponseJson);
//           const orderId = orderResponseJson.orders[0];
//           response.orderId=orderId
//           return orderId;

//     }
// }