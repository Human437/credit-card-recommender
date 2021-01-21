import React from 'react'
import './sign-up.css'
import RecommenderContext from './../recommenderContext'

export default class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  static contextType = RecommenderContext;

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