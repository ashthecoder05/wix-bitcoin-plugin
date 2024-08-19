/*************************
backend/http-functions.js
*************************

'backend/http-functions.js' is a reserved Velo file that lets you expose APIs that respond to fetch requests from external services.

In this file you create APIs to expose the functionality of your site as a service. That is, other people can use 
the functionality of your site by writing code that calls your site's APIs, as defined by the functions you create here.

Using the provided code (below this comment block) as an example, users of your HTTP functions can call your API using the following patterns: 

Production endpoints:

 • Premium site:
   https://mysite.com/_functions/multiply?leftOperand=3&rightOperand=4
 • Free sites:
   https://username.wixsite.com/mysite/_functions/multiply?leftOperand=3&rightOperand=4

Test endpoints:
 • Premium sites:
   https://mysite.com/_functions-dev/multiply?leftOperand=3&rightOperand=4
 • Free sites:
   https://username.wixsite.com/mysite/_functions-dev/multiply?leftOperand=3&rightOperand=4
  https://aishwaryaadyanthaya.wixsite.com/my-site/_get_blockonomicscallback
---
About HTTP functions: 
https://support.wix.com/en/article/velo-exposing-a-site-api-with-http-functions

API Reference:
https://www.wix.com/velo/reference/wix-http-functions

**********************/

// The following is an example of an HTTP function, which gets the product of 2 operands. Adapt the code below for your specific use case.

import { ok, badRequest } from 'wix-http-functions';
import wixPaymentProviderBackend from 'wix-payment-provider-backend';
import wixData from "wix-data";

export async function get_blockonomicscallback(request) {
 
   const response = {
       "headers": {
           "Content-Type": "application/json"
       }
   };

   

     const addr = request.query["addr"];

      const object = await wixData.query("blockonomics_transaction").eq("title", addr).find()
      
      const submitEventRequest = {
        event: {
          transaction : {
            wixTransactionId: object.items[0].wixtxn,
            pluginTransactionId: object.items[0].plugintxn,
          }
        }
      };
       await wixPaymentProviderBackend.submitEvent(submitEventRequest);

       response.body = {
          
       };
       return ok(response);
       
   
}
