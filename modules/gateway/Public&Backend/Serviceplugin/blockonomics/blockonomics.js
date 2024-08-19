import * as paymentProvider from 'interfaces-psp-v1-payment-service-provider';
import wixPaymentProviderBackend from 'wix-payment-provider-backend';
import { Permissions, webMethod } from "wix-web-module";
import { fetch } from "wix-fetch";
import wixData from 'wix-data';



/**
 * This payment plugin endpoint is triggered when a merchant provides required data to connect their PSP account to a Wix site.
 * The plugin has to verify merchant's credentials, and ensure the merchant has an operational PSP account.
 * @param {import('interfaces-psp-v1-payment-service-provider').ConnectAccountOptions} options
 * @param {import('interfaces-psp-v1-payment-service-provider').Context} context
 * @returns {Promise<import('interfaces-psp-v1-payment-service-provider').ConnectAccountResponse | import('interfaces-psp-v1-payment-service-provider').BusinessError>}
 */
export const connectAccount = async (options, context) => {
    // goto our blockonomics site, and verify the details then return in the below format so that 
    // wix can connect with the associated account id.

    // create a payment page

    return {
        credentials: {
            apikey: options.credentials.apikey,
            callbackurl: options.credentials.callbackurl
        },
        accountId: '{Enter your account id }',
        accountName: '{Enter your email id}'
    };
};
/**
 * This payment plugin endpoint is triggered when a buyer pays on a Wix site.
 * The plugin has to process this payment request but prevent double payments for the same `wixTransactionId`.
 * @param {import('interfaces-psp-v1-payment-service-provider').CreateTransactionOptions} options
 * @param {import('interfaces-psp-v1-payment-service-provider').Context} context
 * @returns {Promise<import('interfaces-psp-v1-payment-service-provider').CreateTransactionResponse | import('interfaces-psp-v1-payment-service-provider').BusinessError>}
 */
export const createTransaction = async (options, context) => {
   
  const  newAddress = await generateNewAddress();
  
   const btcprice = await getBtcPrice(options.order.description.currency);
   const orderamount = options.order.description.totalAmount / 100;
   const btcAmount = orderamount / btcprice;
    let inserttxn = {
      "title": newAddress,
      "plugintxn": "e89b-12d3-a456-42665",
      "wixtxn":options.wixTransactionId,
    };

    await wixData.insert("blockonomics_transaction", inserttxn)
    
    return {
        //reasonCode: 5009,
        pluginTransactionId: "e89b-12d3-a456-42665",
        redirectUrl: `https://aishwaryaadyanthay.wixsite.com/my-site/paymentpage?address=${newAddress}&price=${btcAmount}&redirect=${options.order.returnUrls.successUrl}`
    };
};
/**
 * This payment plugin endpoint is triggered when a merchant refunds a payment made on a Wix site.
 * The plugin has to process this refund request but prevent double refunds for the same `wixRefundId`.
 * @param {import('interfaces-psp-v1-payment-service-provider').RefundTransactionOptions} options
 * @param {import('interfaces-psp-v1-payment-service-provider').Context} context
 * @returns {Promise<import('interfaces-psp-v1-payment-service-provider').CreateRefundResponse | import('interfaces-psp-v1-payment-service-provider').BusinessError>}
 */
export const refundTransaction = async (options, context) => {
    return {
        pluginRefundId: "e89b-12d3-a456-42665"
    };
};

const generateNewAddress = webMethod(
  Permissions.Anyone,
  async () => {
    const fetchOptions = {
      method: "post",
      headers: {
        'Authorization': 'Bearer ' + api_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    };

    const response = await fetch(
      'https://blockonomics.co/api/new_address',
      fetchOptions,
    );

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data.address;
  },
);

const getBtcPrice = webMethod(Permissions.Anyone, async (currency) => {
  const response = await fetch(
    `https://www.blockonomics.co/api/price?currency=${currency}`,
  );
  if (response.ok) {
    const json = await response.json();
    return json.price;
  } else {
    return Promise.reject("Fetch did not succeed");
  }
});

