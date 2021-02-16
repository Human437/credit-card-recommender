import React from 'react'
import { Link } from 'react-router-dom'
import './home-page.css'
import MoneyFan from './../images/landingPage/pexels-anna-nekrashevich-6801640.jpg'

export default function HomePage(){
return(
    <main role="main">
        <div className = 'parallax1'>
          <header id='heading'>
            <h1 id='heading-h1' className='lp-heading'>Credit Card Recommender</h1>
            <h2 id='heading-h2' className='lp-heading'>Demystify your 1st card</h2>
            <Link to= '/card-recommender'><button id='lp-button' className='lp-heading'>Recommend a Card for Me Now</button></Link>
          </header>
        </div>
        <div id='care'>
          <div id='text-4-care'>
            <h2>Why should I care?</h2>
            <p>Your first five cards are extremely important when it comes to building your credit card portfoio, especially your first card. This first card is what is get you in the game and your credit score rising if you play the game correctly. Now you might be wondering why should I care about my credit score or even what is a credit score? A credit score is what banks and other lenders use to determine how trust worthy you are with their money. A credit score is very important for when you are thinking about getting loan to buy a car or a home. You don't want to be stuck with a low score like 400, otherwise you could be looking at interest rates of up to 12% as opposed to 4% interest if you had a score 750+. Read more about your fico score here. Now let say you don't ever want to buy a house, a car, or anything that would require a loan, why should you care? Well, do you want to get money back or a trip to Hawaii just by going about your day and spending money as you normally would? If that at all sounds interesting you should care about the first five cards you get.</p>
          </div>
          <div id='img-4-care'>
            <img src={MoneyFan} alt='money fan' id='money-fan'/>
          </div>
        </div>
        <div id='trust'>
          <div id='text-4-trust'>
            <h2 id='heading-trust'>Why should I trust you?</h2>
            <p>You don't have to. All the information here is easily accessible through a quick Google search. Now you might be wondering what is the point of the site if I can find all of the information by myself? Good question, the point of this site is educate people who are just getting into the credit card game and don't have the time or simply don't want to spend hours looking up content from many places. This site is aimming to be a one stop shop for beginners who want a to the point card recommendation without any affiliate programs skewing our opinions. You are more than welcome to do your own research and even advise that you do so if you have the time, but we want to make what can seem like an overwhelming experience simple.</p>
          </div>
        </div>
    </main>
  )
}