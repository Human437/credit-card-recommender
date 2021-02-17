# Credit Card Recommender

 Too often people grow up not knowing much about credit cards or in a household where credit cards are demonized, while in reality they are pretty useful tools to get cash back and travel opportunities if used correctly. This app was created with the intention of helping those who are new to credit cards make an educated choice with regards to the user's first 5 credit cards. You will input your information to get a credit card recommendation based on your credit score, the number of cards you currently have, annual income, student status, and last hard inquiry.

This is the front-end client of the app. You can view it live [here](credit-card-recommender.vercel.app)!

To check out the app, you can create your own account and get a credit card recommended for you today or just the provided dummy account to see the results that have been generated for the dummy account. 

#### Dummy Account Info
- Email: john-doe@dummy-account.com
- Password: aB3!bnmv

### New User Demo
![](./src/images/newUser.gif)

### Returning User Demo
![](./src/images/returningUser.gif)

### Technology Used
- React
  - Create React App
  - React Router
- HTML 5
- CSS
- Vercel

### Back-end
This client should be used in conjunction with the API made for this project which can be found [here](https://github.com/Human437/credit-card-recommender-api).

### Try it for yourself
You will need to have the API running in order to try the project  

Run `npm install` to get all the dependencies you need for the project  

Create a `.env.local` file and populate it to test locally

````
REACT_APP_BEARER_TOKEN=INSERT YOUR TOKEN HERE
REACT_APP_API_User_ENDPOINT=INSERT YOUR USER ENDPOINT HERE
REACT_APP_API_Cards_ENDPOINT=INSERT YOUR CARDS ENDPOINT HERE
````
To deploy to Vercel run `npm run deploy`