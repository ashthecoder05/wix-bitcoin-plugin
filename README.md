## Requirements:

- WIX account
- Free [Blockonomics](https://www.blockonomics.co/) Wallet Watcher account
- Bitcoin wallet (e.g., Blockchain.info, Trezor, Electrum, Mycelium)


## ### Installation Process:

**1. Create a Payment Provider Plugin**

The process has 3 steps.

- In the Velo Sidebar, go to Service Plugins > Payment

<img width="396" alt="image" src="https://github.com/user-attachments/assets/75dce07b-7aaf-4262-8a2f-b5bee905752f">


- Hover over **Service Plugins** and click
- Select **Payment**.

<img width="433" alt="image" src="https://github.com/user-attachments/assets/fb379d04-4987-41e8-985b-6600e7a0893a">

- Name the plugin "Blockonomics" and click "Add & Edit Code”
<img width="433" alt="image" src="https://github.com/user-attachments/assets/da2bc950-35aa-4d8b-a0b2-36787168ec9b">


1. Implement your plugin with custom code.
- In the new plugin folder, edit `blockonomics-config.js` and `blockonomics.js`
- <img width="532" alt="image" src="https://github.com/user-attachments/assets/9ceb7686-5ed4-443f-95ca-bbac92ce1438">
- Then go to our Blockonomic/Wix-Bitcoin-plugin GitHub repo inside which you will find  folder Public&Backend>Serviceplugin>blockonomics inside which you will copy code of  blockonomics-config.js and blockonomics.js paste in the respevctive file created in the wix
- Inside the blockonomics.js you will have to make the changes in the code at line 77 in the  redirectUrl: add your site URL to exsisting url for example 
- Once this is implemented you will be able to see the payment method to be displayed in Setting> Accetpayment it will be visible as below 
- <img width="1441" alt="image" src="https://github.com/user-attachments/assets/8764f604-2308-45b6-af1f-7b8013e15e80">

2. Implement the callback URL
- In our the Public&Backend>Backend folder you will find a file called http-fuctions.js you need to create the same file in velo as below
- <img width="397" alt="image" src="https://github.com/user-attachments/assets/41585b33-736e-4363-afd8-c8d9f4159cc4">


3. Implement the payment page
- In this step, you  will need to create a file as paymentPage.js in the Wix site editor 
<img width="441" alt="image" src="https://github.com/user-attachments/assets/fb9a4c16-ae64-4fff-8125-a3b0d482f1d0">
- Then copy code from the blockonomics github  location at  Pagecode > MainPage > PaymentPage.js
- 


  

