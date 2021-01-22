import React from 'react'
import './sign-up.css'
import RecommenderContext from './../recommenderContext'
import ValidationError from './../validationError'
import bcrypt from 'bcryptjs'
import validator from 'validator';

export default class SignUp extends React.Component{
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
      }
    }
  }

  static contextType = RecommenderContext;

  updateEmail(email){
    this.setState({email:{value:email,touched:true}})
  }

  updatePassword(password){
    this.setState({password:{value:password,touched:true}})
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
    }else if(!validator.isStrongPassword(password)){
      return 'Password does not meet the above requirements'
    }
  }

  render(){
    return(
      <>
        <form class='signup-form'>
          <div>
            <label for="email">Email</label>
            <br/>
            <input 
              type="text" 
              name='email' 
              id='email' 
              placeholder='Enter your email'
              onChange={e=>this.updateEmail(e.target.value)}
            />
            {this.state.email.touched && (<ValidationError message = {this.validateEmail()}/>)}
          </div>
          <div>
            <label for="password">Password</label>
            <br></br>
            <label for="password">Password must be at least 8 characters containing atleast 1 lowercase, 1 uppercase, 1 number, and 1 symbol</label>
            <br/>
            <input 
              type="password" 
              name='password' 
              id='password'
              placeholder='Enter a strong password'
              onChange={e=>this.updatePassword(e.target.value)}
            />
            {this.state.password.touched && (<ValidationError message = {this.validatePassword()}/>)}
          </div>
          <button 
            type='submit'
            disabled={
              this.validateEmail()||
              this.validatePassword
            }
          >
            Sign Up
          </button>
        </form>
      </>
    )
  }
}