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
- Same way create the  three labels one for the heading and other two label for "Address" & "Price " to get the label ID as shown below you will get the label ID as #text1
- 
- Replace the heading label id at code line number 19 as shown in the image below a and b
- a) <img width="714" alt="image" src="https://github.com/user-attachments/assets/efcfba64-65da-4647-89e9-e7753f0361dd">
- b) <img width="686" alt="image" src="https://github.com/user-attachments/assets/1e25ab2c-4407-4dc4-966d-b9b06bcfcee0">
- Replace the Address label id at code line number 22 as shown in the image below a and b
- a) <img width="284" alt="image" src="https://github.com/user-attachments/assets/4272bed8-ee88-4a27-ac05-68c990cc5584">
- b) <img width="375" alt="image" src="https://github.com/user-attachments/assets/4685c5be-862a-4976-954d-880067b9f46a">
- Replace the Address label id at code line number 36 as shown in the image below a and b
- a) <img width="355" alt="image" src="https://github.com/user-attachments/assets/11fd016e-0fbb-4435-a082-ddac779f03a4">
- b) <img width="681" alt="image" src="https://github.com/user-attachments/assets/1ff4a5fb-00f9-4398-abda-f1b6344ce8d6">



  
  


4. Create a database bl

## ### Setting up the blockonomics store for wix website :
- Manual method:
a) Customer gets their Wix store address (e.g., https://example.wixsite.com/my-site)
b) Our URL extension is added (_functions/blockonomicscallback?secret=)
c) Customer generates a secret and adds it at the end of the URL
Example: https://example.wixsite.com/my-site/_functions/blockonomicscallback?secret=123353
  
  


  

