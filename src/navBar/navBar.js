import React from 'react'
import {Link} from 'react-router-dom'
import RecommenderContext from './../recommenderContext'

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  static contextType = RecommenderContext;


  render(){
    const path = this.props.location.pathname
    let signOn;
    if (this.context.isSignedIn){
      signOn = <>
                <button
                  onClick = { e => {
                    this.context.userSignedIn(false)
                    this.context.updateUserId(null)
                    this.context.updateUserCards([])
                    this.context.updateMsg('')
                    this.context.updateIsFromResultsPage(false)
                  }}
                >
                  <Link to="/">Sign Out</Link></button>
               </>
    }else{
      signOn = <>
                <button><Link to="/sign-in">Sign In</Link></button>
                <button><Link to="/sign-up">Sign Up</Link></button>
              </>
    }

    let navBar =<nav role="navigation" className='main-nav'>
                  <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to= '/card-recommender'>Card Recommendation Tool</Link>
                    <Link to= '/articles'>View Articles</Link>
                    <Link to= '/your-cards/:id'>View Your Cards</Link>
                    {signOn}
                  </ul>
                  <div className="burger">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                  </div>
                </nav>
    if (path === '/sign-in' || path === '/sign-up'){
      navBar = <></>
    }
    return(
      <>
      {navBar}
      </>
    )
  }
}