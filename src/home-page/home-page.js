import React from 'react'
import { Link } from 'react-router-dom'
import './home-page.css'
import CCRecomenderSS from './../images/initalSSOfCCRecommenderTool.jpg'
import CCResultsSS from './../images/initalSSOfAUserCards.jpg'

export default function HomePage(){
return(
    <main role="main">
      <header role="banner">
        <h1>Credit Card Recommender</h1>
      </header>
      <section>
        <header>
        <Link to= '/articles'><h3>Credit Cards and You</h3></Link>
        </header>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.dailyhive.com%2F20180309110904%2Fvisa-mastercard-credit-cards.jpg&f=1&nofb=1" alt="Credit cards"/>
        <p>Whether you are getting your first credit card or someone who has been in the points and miles game for a while, learn something new here. If you are just getting your first credit card be sure not to miss out on the information we have to offer.</p>
      </section>
      <section>
        <header>
          <Link to='/card-recommender'><h3>Find The Card For You</h3></Link>
        </header>
        <img src={CCRecomenderSS} alt="Credit card recommendation tool"/>
        <p>Use the credit card recommendation tool to find the best card for you at your current stage in the points and miles game. Factors that will be taken into consideration include your current credit score, the number of cards you have from a specific issuer, and intro bonuses from specifc issuers.</p>
      </section>
      <section>
        <header>
        <Link to= '/your-cards/:id'><h3>Keep track of your cards</h3></Link>
        </header>
        <img src={CCResultsSS} alt="Sample User's suggested credit cards"/>
        <p>View the cards that have been recommended to you based on the responses you last provided.</p>
      </section>
    </main>
  )
}