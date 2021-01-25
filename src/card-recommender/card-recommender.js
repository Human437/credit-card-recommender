import React from 'react'
import './card-recommender.css'
import RecommenderContext from './../recommenderContext'

export default class CardRecommender extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      creditScore: {
        value: '',
        touched: false,
      },
      points:{
        value: '',
        touched: false,
      },
      numberOfCC:{
        value: '',
        touched: false,
      },
      avgSpendPerMonth:{
        value: '',
        touched: false,
      },
      numberofChaseCards:{
        value: '',
        touched: false,
      },
      numberOfHardInquiries:{
        value: '',
        touched: false,
      },
      openedAmex:{
        value: false,
        touched: false,
      },
      isStudent:{
        value: false,
        touched: false,
      },
      bigUpcomingExpenses:{
        value: false,
        touched: false,
      },
      lastHardInquiry:{
        value: '',
        touched: false,
      },    
    }
  }

  static contextType = RecommenderContext;

  render(){
    return(
      <>
      <h1 id = 'disclaimer'>
        Disclaimer: This tool is not meant as a replacement for your own common sense or knowledge of your current needs and overall goals in the credit card game. This tool is only meant to help you make an educated choice for your next card. It should not be the only deciding factor for getting your next credit card.
      </h1>
        <form id="record-dream">
          <section className="form-section overview-section">
            <label htmlFor="dream-title">Credit Score</label>
            <p>If you don't know your credit score you can find it by using <a href="https://www.creditkarma.com/">credit karma</a> or looking at the score provided by your issuer. This is necessary to determine what cards you will likely be approved for.</p>
            <input type="number" name="dream-title" placeholder="Type your credit score here" required/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">What are you trying to optimize htmlFor?</label>
            <p>Points or cash back. If cash back is selected, cards used solely htmlFor travel will not be recommended.</p><br/>
            <input type="radio" id="yesPoints" name='Points' value={true}/>
            <label htmlFor="yesPoints">Points</label>
            <input type="radio" id="noStudent" name="Points" value={false}/>
            <label htmlFor="noPoints">Cash Back</label><br/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How many credit cards do you currently have?</label>
            <input type="number" name="dream-title" placeholder="Type the # of cards you have here" required/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How much spend do you normally have per month and would like to put on a card?</label>
            <input type="number" name="dream-title" placeholder="Type how much you spend per month here" required/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How many non business credit cards have you gotten in the last 24 months from Chase? This affects 5/24. Link to article about 5/24</label>
            <input type="number" name="dream-title" placeholder="Type the number here" required/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How many hard inquiries have you had in the last 6 months? This affects your ability to get cards from Citi.</label>
            <input type="number" name="dream-title" placeholder="Type the number here" required/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="AmexAccount">Have you opened any acounts with American express in the pass?</label><br/>
            <input type="radio" id="yesAmex" name="AmexAccount" value={true}/>
            <label htmlFor="yesAmex">Yes</label>
            <input type="radio" id="noAmex" name="AmexAccount" value={false}/>
            <label htmlFor="noAmex">No</label><br/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">Are you a student?</label><br/>
            <input type="radio" id="yesStudent" name='Student' value={true}/>
            <label htmlFor="yesStudent">Yes</label>
            <input type="radio" id="noStudent" name="Student" value={false}/>
            <label htmlFor="noStudent">No</label><br/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">Are there any big upcoming expenses?</label><br/>
            <input type="radio" id="yesBigUpcomingExpense" name='BigUpcomingExpense' value={true}/>
            <label htmlFor="yesBigUpcomingExpense">Yes</label>
            <input type="radio" id="noStudent" name="BigUpcomingExpense" value={false}/>
            <label htmlFor="noBigUpcomingExpense">No</label><br/>
          </section>
          <section className="form-section overview-section">
            <label htmlFor="lastHardInquiry">When was your last hard inquiry?</label>
            <input type="date" id = 'lastHardInquiry' name="lastHardInquiry" placeholder="Type date here" required/>
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