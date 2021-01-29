import React from 'react'
import './card-recommender.css'
import RecommenderContext from './../recommenderContext'
import ValidationError from './../validationError'

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
        value: '',
        touched: false,
      },
      isStudent:{
        value: '',
        touched: false,
      },
      bigUpcomingExpenses:{
        value: '',
        touched: false,
      },
      lastHardInquiry:{
        value: '',
        touched: false,
      },    
    }
  }

  static contextType = RecommenderContext;

  updateCreditScore(cs){
    this.setState({creditScore:{value:cs,touched:true}})
  }

  updatePoints(point){
    this.setState({points:{value:point,touched:true}})
  }

  updateNumberOfCC(cards){
    this.setState({numberOfCC:{value:cards, touched:true}})
  }

  updateAvgSpendPerMonth(avgSpend){
    this.setState({avgSpendPerMonth:{value:avgSpend,touched:true}})
  }

  updateNumberOfChaseCards(chaseCards){
    this.setState({numberofChaseCards:{value:chaseCards,touched:true}})
  }

  updateNumberOfHardInquiries(inquiries){
    this.setState({numberOfHardInquiries:{value:inquiries,touched:true}})
  }

  updateOpenedAmex(openedAmex){
    this.setState({openedAmex:{value:openedAmex,touched:true}})
  }

  updateIsStudent(student){
    this.setState({isStudent:{value:student,touched:true}})
  }

  updateLastHardInquiry(date){
    this.setState({lastHardInquiry:{value:date,touched:true}})
  }

  validateCreditScore(){
    if(this.state.creditScore.value === ''){
      return 'Your credit score is required'
    }else if(this.state.creditScore.value>850 || this.state.creditScore.value<0){
      return 'Credit score must between 0 and 850'
    }
  }

  validatePoints(){
    if(this.state.points.value === ''){
      return 'You must choose points or cash back'
    }
  }

  validateNumberOfCC(){
    if(this.state.numberOfCC.value === ''){
      return 'You must provide your current number of credit cards'
    }else if(this.state.numberOfCC.value < 0 || this.state.numberOfCC.value > 30){
      return 'You must provide a number between 0 and 30'
    }
  }

  validateAvgSpendPerMonth(){
    if(this.state.avgSpendPerMonth.value === ''){
      return 'You must provide a value for your average spend per month'
    }else if(this.state.avgSpendPerMonth.value <= 0){
      return 'You must provie a value greater than 0'
    }
  }

  validateNumberOfChaseCards(){
    if(this.state.numberofChaseCards.value === ''){
      return 'You must provide a value for the current number of Chase Credit cards you have applied for in the last 2 years (24 months)'
    }else if(this.state.numberofChaseCards.value < 0 || this.state.numberofChaseCards.value > 5){
      return 'You must provide a value between 0 and 5'
    }
  }

  validateNumberOfHardInquiries(){
    if(this.state.numberOfHardInquiries.value === ''){
      return 'You must provide the number of hard inquiries you\'ve had in the last 6 months'
    }else if(this.state.numberOfHardInquiries.value < 0 || this.state.numberOfHardInquiries.value > 6){
      return 'You must provide a number between 0 and 6'
    }
  }

  validateOpenedAmex(){
    if(this.state.openedAmex.value === ''){
      return 'You must choose yes or no'
    }
  }

  validateIsStudent(){
    if(this.state.isStudent.value === ''){
      return 'You must choose yes or no'
    }
  }

  validateLastHardInquiry(){
    if(this.state.lastHardInquiry.value === ''){
      return 'You must provide the date of your last hard inquiry'
    }
  }
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
            <input 
              type="number" 
              name="dream-title" 
              placeholder="Type your credit score here" 
              required 
              onChange={e=>this.updateCreditScore(e.target.value)}
            />
            {this.state.creditScore.touched && (<ValidationError message = {this.validateCreditScore()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">What are you trying to optimize htmlFor?</label>
            <p>Points or cash back. If cash back is selected, cards used solely for travel will not be recommended.</p><br/>
            <select value={this.state.points.value} onChange={e=>{this.updatePoints(e.target.value)}}>
              <option value =''>-Select-</option>
              <option value={true}>Points</option>
              <option value={false}>Cash Back</option>
            </select>
            {this.state.points.touched && (<ValidationError message = {this.validatePoints()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How many credit cards do you currently have?</label>
            <input type="number" name="dream-title" placeholder="Type the # of cards you have here" required onChange={e=>{this.updateNumberOfCC(e.target.value)}}/>
            {this.state.numberOfCC.touched && (<ValidationError message = {this.validateNumberOfCC()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How much spend do you normally have per month and would like to put on a card?</label>
            <input type="number" name="dream-title" placeholder="Type how much you spend per month here" required onChange={e=>{this.updateAvgSpendPerMonth(e.target.value)}}/>
            {this.state.avgSpendPerMonth.touched && (<ValidationError message = {this.validateAvgSpendPerMonth()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How many non business credit cards have you gotten in the last 24 months from Chase? This affects 5/24. Link to article about 5/24</label>
            <input type="number" name="dream-title" placeholder="Type the number here" required onChange={e=>{this.updateNumberOfChaseCards(e.target.value)}}/>
            {this.state.numberofChaseCards.touched && (<ValidationError message = {this.validateNumberOfChaseCards()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">How many hard inquiries have you had in the last 6 months? This affects your ability to get cards from Citi.</label>
            <input type="number" name="dream-title" placeholder="Type the number here" required onChange={e=>{this.updateNumberOfHardInquiries(e.target.value)}}/>
            {this.state.numberOfHardInquiries.touched && (<ValidationError message = {this.validateNumberOfHardInquiries()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="AmexAccount">Have you opened any acounts with American express in the pass?</label><br/>
            <select value={this.state.openedAmex.value} onChange={e=>{this.updateOpenedAmex(e.target.value)}}>
              <option value =''>-Select-</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            {this.state.openedAmex.touched && (<ValidationError message = {this.validateOpenedAmex()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="dream-title">Are you a student?</label><br/>
            <select value={this.state.isStudent.value} onChange={e=>{this.updateIsStudent(e.target.value)}}>
              <option value =''>-Select-</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            {this.state.isStudent.touched && (<ValidationError message = {this.validateIsStudent()}/>)}
          </section>
          <section className="form-section overview-section">
            <label htmlFor="lastHardInquiry">When was your last hard inquiry?</label>
            <input type="date" id = 'lastHardInquiry' name="lastHardInquiry" placeholder="Type date here" required onChange={e=>{this.updateLastHardInquiry(e.target.value)}}/>
            {this.state.lastHardInquiry.touched && (<ValidationError message = {this.validateLastHardInquiry()}/>)}
          </section>
          <section className="button-section">
            <button 
              type="submit"
              disabled={
                this.validateCreditScore() ||
                this.validatePoints() ||
                this.validateNumberOfCC() ||
                this.validateAvgSpendPerMonth() ||
                this.validateNumberOfChaseCards() ||
                this.validateNumberOfHardInquiries() ||
                this.validateOpenedAmex() ||
                this.validateIsStudent() ||
                this.validateLastHardInquiry()
              }
            >
              Submit
            </button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </>
    )
  }
}