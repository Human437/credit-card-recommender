import React from 'react'
import './card-recommender.css'
import RecommenderContext from './../recommenderContext'

export default class CardRecommender extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  static contextType = RecommenderContext;

  render(){
    return(
      <>
        <form id="record-dream">
          <section className="form-section overview-section">
            <label for="dream-title">Credit Score</label>
            <p>If you don't know your credit score you can find it by using <a href="https://www.creditkarma.com/">credit karma</a> or looking at the score provided by your issuer. This is necessary to determine what cards you will likely be approved for.</p>
            <input type="text" name="dream-title" placeholder="Type your credit score here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">What are you trying to optimize for?</label>
            <p>Points or cash back. If cash back is selected, cards used solely for travel will not be recommended.</p>
            <input type="text" name="dream-title" placeholder="Type what you want to optimize for here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">How much spend do you normally have per month and would like to put on a card?</label>
            <input type="text" name="dream-title" placeholder="Type how much you spend per month here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">How many non business credit cards have you gotten in the last 24 months from Chase? This affects 5/24. Link to article about 5/24</label>
            <input type="text" name="dream-title" placeholder="Type the number here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">How many hard inquiries have you had in the last 6 months? This affects your ability to get cards from Citi.</label>
            <input type="text" name="dream-title" placeholder="Type the number here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">Have you opened any acounts with American express in the pass?</label>
            <input type="text" name="dream-title" placeholder="Type yes no here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">Are you a student?</label>
            <input type="text" name="dream-title" placeholder="Type yes no here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">Are there any big upcoming expenses?</label>
            <input type="text" name="dream-title" placeholder="Type yes no here" required/>
          </section>
          <section className="form-section overview-section">
            <label for="dream-title">When was your last hard inquiry?</label>
            <input type="text" name="dream-title" placeholder="Type date here" required/>
          </section>
          <section className="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </>
    )
  }
}