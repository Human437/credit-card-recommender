import React from 'react'
import './sign-in.css'
import RecommenderContext from './../recommenderContext'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import ValidationError from './../validationError'
import config from './../config'

export default class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: {
        value: '',
        touched: false,
      },
      password: {
        value: '',
        touched: false,
      },
      isEmailInDb:true,
      isPasswordCorrect:true,
    }
  }

  static contextType = RecommenderContext;

  updateEmail(email){
    this.setState({email:{value:email,touched:true},isEmailInDb:true})
  }

  updatePassword(password){
    this.setState({password:{value:password,touched:true},isPasswordCorrect:true})
  }

  validateEmail(){
    const email = this.state.email.value.trim();
    if(email.length === 0){
      return 'Email is required'
    }else if(!validator.isEmail(email)){
      return 'Please enter a valid email address'
    }
  }

  validatePassword(){
    const password = this.state.password.value.trim();
    if(password.length === 0){
      return 'Password is required'
    }
  }

  handleSubmit(event){
    event.preventDefault()
    const email = this.state.email.value.trim()
    fetch(`${config.API_User_ENDPOINT}?email=${email}`, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${config.BEARER_TOKEN}`
      })
    })
    .then(response => response.json())
    .then(json => {
      if (typeof json.id !== 'undefined'){
        const hash = json.hashedpassword
        const enteredPassword = this.state.password.value.trim()
        bcrypt.compare(enteredPassword, hash, (err, res) => {
          if (err) {
            console.error(err)
            return
          }
          if(res){
            this.context.userSignedIn()
            this.context.updateUserId(json.id)
            this.context.updateUserCards(json.usercards)
            this.context.updateMsg(json.msg)
            this.props.history.push(`/your-cards/${this.context.userId}`)
          }else{
            this.setState({isPasswordCorrect:false})
          }
        })
      }else{
        this.setState({isEmailInDb:false})
      }
    })
  }

  render(){
    return(
      <>
        <form className='signup-form' onSubmit={e=>{this.handleSubmit(e)}}>
          <div>
            <label htmlFor="email">Email</label>
            <br/>
            <input 
              type="text" 
              name='email' 
              id='email' 
              placeholder='Enter your email'
              onChange={e=>this.updateEmail(e.target.value)}
            />
            {this.state.email.touched && (<ValidationError message = {this.validateEmail()}/>)}
            {!this.state.isEmailInDb && (<ValidationError message = 'The email entered is not associated with any account'/>)}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br/>
            <input 
              type="password" 
              name='password' 
              id='password'
              placeholder='Enter your password'
              onChange={e=>this.updatePassword(e.target.value)}
            />
            {this.state.password.touched && (<ValidationError message = {this.validatePassword()}/>)}
            {!this.state.isPasswordCorrect && (<ValidationError message = "The password entered is incorrect"/>)}
          </div>
          <button 
            type='submit'
            disabled={
              this.validateEmail()||
              this.validatePassword()
            }
          >
            Sign In
          </button>
        </form>
      </>
    )
  }
}