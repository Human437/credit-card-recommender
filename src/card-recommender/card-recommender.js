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
      numberOfCC:{
        value: '',
        touched: false,
      },
      isStudent:{
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

  updateNumberOfCC(cards){
    this.setState({numberOfCC:{value:cards, touched:true}})
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

  validateNumberOfCC(){
    if(this.state.numberOfCC.value === ''){
      return 'You must provide your current number of credit cards'
    }else if(this.state.numberOfCC.value < 0 || this.state.numberOfCC.value > 30){
      return 'You must provide a number between 0 and 30'
    }else if(this.state.numberOfCC.value >=5){
      return 'This tool was designed with beginners in mind and does not account for factors that those who are more advanced in the game may take into consideration. Since you have at least 5 cards, it is likely this tool will not be able to make a suitable recommendation.'
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

  handleSubmit(event){
    event.preventDefault()
  }
  render(){
    return(
      <>
      <h1 id = 'disclaimer'>
        Disclaimer: This tool is not meant as a replacement for your own common sense or knowledge of your current needs and overall goals in the credit card game. This tool is only meant to help beginners in the credit card game make an educated choice for their next card. It should not be the only deciding factor for getting your next credit card.
      </h1>
        <form id="record-dream" onSubmit={e=>{this.handleSubmit(e)}}>
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
            <label htmlFor="dream-title">How many credit cards do you currently have?</label>
            <input type="number" name="dream-title" placeholder="Type the # of cards you have here" required onChange={e=>{this.updateNumberOfCC(e.target.value)}}/>
            {this.state.numberOfCC.touched && (<ValidationError message = {this.validateNumberOfCC()}/>)}
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
                this.validateNumberOfCC() ||
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