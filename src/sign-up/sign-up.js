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
      },
      confirmPassword: {
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

  updateConfirmPassword(confirmPassword){
    this.setState({confirmPassword:{value:confirmPassword,touched:true}})
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
    }else if(password === this.state.email.value.trim()){
      return 'Password cannot be your email'
    }else if(!validator.isStrongPassword(password)){
      return 'Password does not meet the above requirements'
    }
  }

  validateConfirmPassword(){
    const password = this.state.password.value.trim();
    const confirmPassword = this.state.confirmPassword.value.trim();
    if(password !== confirmPassword){
      return 'Passwords do not match'
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const email = this.state.email.value.trim()
    const password = this.state.password.value.trim()
    const rounds = 10; // number of salt rounds, by default its 10
    bcrypt.hash(password, rounds, (err, hash) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(email)
      console.log(hash)
    })
    alert('Email and password successfully stored. ***No info has actually been stored, just a test to ensure the submit works***')
  }

  render(){
    return(
      <>
        <form class='signup-form' onSubmit={e=>this.handleSubmit(e)}>
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
          <div>
            <label for='confirm-password'>Confirm Password</label>
            <br/>
            <input 
                type="password" 
                name='confirm-password' 
                id='confirm-password'
                placeholder='Reenter your password'
                onChange={e=>this.updateConfirmPassword(e.target.value)}
            />
            {this.state.confirmPassword.touched && (<ValidationError message = {this.validateConfirmPassword()}/>)}
          </div>
          <button 
            type='submit'
            disabled={
              this.validateEmail()||
              this.validatePassword()||
              this.validateConfirmPassword()
            }
          >
            Sign Up
          </button>
        </form>
      </>
    )
  }
}