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
- In our the Public&Backend>Backend folder you will find a file called http-fuctions.js you need to create the same file in wix studio as below
- <img width="397" alt="image" src="https://github.com/user-attachments/assets/41585b33-736e-4363-afd8-c8d9f4159cc4">
- You need to copy the code from Public&Backend > Backend >  http-fuctions.js file 

3. Implement the payment page
- In this step, you  will need to create a file as paymentPage.js in the Wix site editor 
- <img width="441" alt="image" src="https://github.com/user-attachments/assets/fb9a4c16-ae64-4fff-8125-a3b0d482f1d0">
- Then copy code from the blockonomics github  location at  Pagecode > MainPage > PaymentPage.js
-  In the PaymentPage.js at line 55 replace the value of variable url with your site value to the exsisting site
-  There are few more manual change you will need to do is create a two input box and label from wix editor as shown in the image below 
- <img width="1062" alt="image" src="https://github.com/user-attachments/assets/317f6ed2-15cf-43b8-90bd-d97c6d94c3a7">
-  To create a input box you need follow the steps as shown in the screenshot below 
- <img width="1339" alt="image" src="https://github.com/user-attachments/assets/ac719c9b-6eea-43d4-8499-e0b3ebe51ef6">
- Once both the  Input box  is created you need to get input box id and paste it into the code at the respective place.
- For example  first image shows how to get input box id  as #input3 in the below image same way do it for the input box 2 as we need two input box one to display the address and other for price 
- <img width="440" alt="image" src="https://github.com/user-attachments/assets/9de6a380-52ba-4bb4-a0a0-7deb1440c40d">
- Replace the input id  in the file PaymentPage.js  code at line 23  and 37 in the file  which is shown in the image below with input id you get from the input box created on the wix page 
- <img width="440" alt="image" src="https://github.com/user-attachments/assets/7d89cf76-af46-4072-800b-c0ff46a06e1b">
- <img width="440" alt="image" src="https://github.com/user-attachments/assets/1d5bbabc-21af-4c26-8fd2-0b10aa3b0cc1">
- The same way create the  three labels one for the heading and the other two labels for "Address" & "Price ". To get the label ID as shown below you will get the label ID as #text1
- <img width="1083" alt="image" src="https://github.com/user-attachments/assets/e9b9daa6-c063-448d-8851-3c513d906481">
- Replace the heading label id at code line number 19 as shown in the image below a and b
- a) <img width="714" alt="image" src="https://github.com/user-attachments/assets/efcfba64-65da-4647-89e9-e7753f0361dd">
- b) <img width="686" alt="image" src="https://github.com/user-attachments/assets/1e25ab2c-4407-4dc4-966d-b9b06bcfcee0">
- Replace the Address label id at code line number 22 as shown in the image below a and b
- a) <img width="284" alt="image" src="https://github.com/user-attachments/assets/4272bed8-ee88-4a27-ac05-68c990cc5584">
- b) <img width="375" alt="image" src="https://github.com/user-attachments/assets/4685c5be-862a-4976-954d-880067b9f46a">
- Replace the Address label id at code line number 36 as shown in the image below a and b
- a) <img width="355" alt="image" src="https://github.com/user-attachments/assets/11fd016e-0fbb-4435-a082-ddac779f03a4">
- b) <img width="681" alt="image" src="https://github.com/user-attachments/assets/1ff4a5fb-00f9-4398-abda-f1b6344ce8d6">



4. Create a database name "blockonomics_config" and "blockonomics_transaction"
- To create a database you need select Database> Your Collections > + button > Create Collection
- <img width="497" alt="image" src="https://github.com/user-attachments/assets/1fb44a55-db30-4961-ab34-cf9a7b1c7d06">
- Need to create two database tables one table "blockonomics_config" with fields for configs records as shown below
- <img width="533" alt="image" src="https://github.com/user-attachments/assets/6ac02f8d-d411-4809-a2cd-ab5736ebe9f9">

- Declare the field name and field Types  as image below 
- secret
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/62fa15e9-4f63-4358-ae23-655b5e877039">

- apikey
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/2e4e910f-b317-421a-95c2-99940286124e">

- Other table blockonomics_transaction for saving the transaction details with fields for transaction records as shown below
- <img width="1012" alt="image" src="https://github.com/user-attachments/assets/c9e4f77e-5a72-41a9-beeb-360a41bd9191">

- Declare the field name and field Types  as image below
- addr
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/fccdd8f6-31df-4dc6-8955-62ffda3ba71e">
- plugintxn
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/577961bf-fcf2-44fa-9b69-d0d6d2c2eef6">
- wixtxn
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/9f4f4b75-92ff-45f5-92d9-7b32e0d39901">
- status
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/512124ab-de94-4dd1-bbe8-affebfe48dff">
- txid
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/a7d4ce81-a7f7-4529-ab7b-a96c2f8afdb8">
- value
- <img width="622" alt="image" src="https://github.com/user-attachments/assets/79edb9c0-ff35-44a4-8e3c-edb8ec166a6f">
    


## ### Setting up the blockonomics store for wix website :
1. Setup the API key and Secret
- <img width="1228" alt="image" src="https://github.com/user-attachments/assets/0ae888f0-253c-4455-a625-9fa6736df834">
- Add the api key which you get from blockonomics site and add it to setting page
- Add the secret  of your choice by your choice  for example it can abdhdhjdhdn    
- <img width="1254" alt="image" src="https://github.com/user-attachments/assets/b40a0f9e-5909-41e0-a372-52632221248f">
2. Create the callback URL:
- Customer gets their Wix store address (e.g., https://example.wixsite.com/my-site)
- Our URL extension is added (_functions/blockonomicscallback?secret=)
- Customer generates a secret and adds it at the end of the URL
- Example: https://example.wixsite.com/my-site/_functions/blockonomicscallback?secret=123353
3. Add the callback URL to the blockonomics store which you have created in the previous steps 2
4. That is how the blockonomics payment is setup on the wix store 
  
  


  

