import React from 'react'
import './sign-up.css'
import RecommenderContext from './../recommenderContext'
const bcrypt = require('bcryptjs')

export default class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: {
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

  updateUserName(userName){
    this.setState({userName:{value:'',touched:true}})
  }

  updatePassword(password){
    this.setState({password:{value:'',touched:true}})
  }

  render(){
    return(
      <>
        <form class='signup-form'>
          <div>
            <label for="username">Email</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </>
    )
  }
}