import React from 'react'
import './protectedYourCards.css'
import {Redirect, Route} from 'react-router-dom'
import RecommenderContext from './../recommenderContext'

export default class ProtectedYourCards extends React.Component {

  static contextType = RecommenderContext;

  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          this.context.isSignedIn ?
            <Component {...props} /> :
            <Redirect to='/sign-in' />
        )} 
      />
    )
  }
}