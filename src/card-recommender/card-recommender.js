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
      annualIncome:{
        value:'',
        touched: false,
      }   
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

  updateAnnualIncome(income){
    this.setState({annualIncome:{value:income,touched:true}})
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
    const today = new Date()
    const dateOfLastHardInquiry = new Date(this.state.lastHardInquiry.value)
    const years = today.getFullYear() - dateOfLastHardInquiry.getFullYear()
    const months = (years * 12) + (today.getMonth() - dateOfLastHardInquiry.getMonth())
    if(this.state.lastHardInquiry.value === ''){
      return 'You must provide the date of your last hard inquiry'
    }else if(months < 0){
      return 'You must provide a date in the past'
    }
  }

  validateAnnualIncome(){
    if(this.state.annualIncome.value === ''){
      return 'You must provide your annual income'
    }else if(this.state.annualIncome.value <=0){
      return 'You must provide a value greater than 0'
    }
  }

  checkLastHardInquiry(waitMonths){
    const today = new Date()
    const dateOfLastHardInquiry = new Date(this.state.lastHardInquiry.value)
    const years = today.getFullYear() - dateOfLastHardInquiry.getFullYear()
    const months = (years * 12) + (today.getMonth() - dateOfLastHardInquiry.getMonth())
    return months > waitMonths
  }

  handleSubmit(event){
    event.preventDefault()
    switch(Number(this.state.numberOfCC.value)){
      case 0:
        if(this.state.creditScore.value > 400){
          if(this.state.isStudent.value === true){
            this.context.updateUserCards([1])
            // Array containing the id for the discover it student card
          }else{
            this.context.updateUserCards([5])
            // Array containg the id for the regular discover cash back card
          }
        }else{
          this.context.updateUserCards([8])
          // Array containg the id for the secured discover it card
          this.context.updateMsg('Do your best to increase your credit score with the secure card and try to graduate to the unsecured version.')
        }
        break;
      case 1:
        if(this.checkLastHardInquiry(9)){
          if(this.state.creditScore.value >= 650){
            this.context.updateUserCards([8,10])
            this.context.updateMsg('Go for the Chase Freedom Flex if you want to be more envolved in the game and take advantage of the rotating categories. If you want to have a flat 1.5% back on all purchases go for the Chas Freedom Unlimited.')
          }else{
            this.context.updateUserCards([8,10])
            this.context.updateMsg('You should try to raise your score up to 650 before applying for either the Chase Freedom Flex or Chase Freedom Unlimited. Although, you stil may be approved with a credit score less than 650, having a score of at least 650 helps to boost your chances of being approved.')
          }
        }else{
          this.context.updateUserCards([])
          this.context.updateMsg('You should stick to your first credit card for at least 9 months to build up your credit history before applying for another credit card.')
        }
        break;
      case 2:
        if(this.checkLastHardInquiry(2)){
          if(this.state.creditScore.value >= 650){
            this.context.updateUserCards([8,10])
            this.context.updateMsg('Go for the Chase Freedom Flex if you want to be more envolved in the game and take advantage of the rotating categories. If you want to have a flat 1.5% back on all purchases go for the Chas Freedom Unlimited. If you already have one of the Chase Freedom Cards, apply for the one that you don\'t already have.')
          }else{
            this.context.updateUserCards([8,10])
            this.context.updateMsg('You should try to raise your score up to 650 before applying for either the Chase Freedom Flex or Chase Freedom Unlimited. Although, you stil may be approved with a credit score less than 650, having a score of at least 650 helps to boost your chances of being approved.')
          }
        }else{
          this.context.updateUserCards([])
          this.context.updateMsg('You should aim to leave 2 to 3 months between each credit card application so that issuers do not deny you due to you applying for too many credit cards too quickly.' )
        }
        break;
      case 3:
        if(this.checkLastHardInquiry(2)){
          if(this.state.annualIncome.value > 30000){
            if(this.state.creditScore.value >= 700){
              this.context.updateUserCards([3,4])
              this.context.updateMsg('Go for the Chase Sapphire Preferred if you don\'t travel much now, but may want to in the future or if you don\'t think your yearly spend justifies paying the $550 annual fee for the Chase Sapphire Reserved. Go for the Chase Sapphire Reserved if you think that you can take advantage of all the benefits to justify the high annual fee.')
            }else{
              this.context.updateUserCards([3,4])
              this.context.updateMsg('You should try to raise your score up to 700 before applying for either the Chase Sapphire Preferred or Chase Sapphire Reserved. Although, you stil may be approved with a credit score less than 700, having a score of at least 700 helps to boost your chances of being approved.')
            }
          }else{
            this.context.updateUserCards([3,4])
            this.context.updateMsg('Typically annaul income does not play that big of a role in whether or not you can get approved for a credit card, but in case where issuers will have to give you a high credit limit, annual income comes into play. That said you do not meet the bear minimum cut off to be accepted which tends to hover around $30,000. You can choose to lie on your application, but it is not recommended as it can lead to shut down by the issuer and a potential ban.')
          }
        }else{
          this.context.updateUserCards([])
          this.context.updateMsg('You should aim to leave 2 to 3 months between each credit card application so that issuers do not deny you due to you applying for too many credit cards too quickly.' )
        }
        break;
      case 4:
        break;
      default:
        console.log('Something went wrong')
    }
    this.props.history.push('/view-results')
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
            <label htmlFor="dream-title">What is your annual income?</label>
            <input type="number" name="dream-title" placeholder="Type your income here" required onChange={e=>{this.updateAnnualIncome(e.target.value)}}/>
            {this.state.annualIncome.touched && (<ValidationError message = {this.validateAnnualIncome()}/>)}
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
                this.validateLastHardInquiry()||
                this.validateAnnualIncome()
              }
            >
              Submit
            </button>
          </section>
        </form>
      </>
    )
  }
}