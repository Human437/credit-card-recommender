import React from 'react'
import {Link} from 'react-router-dom'
import Favicon from './../images/signOn/android-chrome-512x512.png'
import './navBar.css'
import RecommenderContext from './../recommenderContext'

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isNavShown: false
    }
  }

  toggleNav = () => {
    this.setState(prevState => ({isNavShown:!prevState.isNavShown}))
  }

  static contextType = RecommenderContext

  render(){
    const path = this.props.location.pathname
    let signOn;
    if (this.context.isSignedIn){
      signOn = <>
                <Link 
                  to="/"
                  onClick = { e => {
                    this.context.userSignedIn(false)
                    this.context.updateUserId(null)
                    this.context.updateUserCards([])
                    this.context.updateMsg('')
                    this.context.updateIsFromResultsPage(false)
                  }}
                >
                  Sign Out
                </Link>
               </>
    }else{
      signOn = <>
                <Link to="/sign-in">Sign On</Link>
              </>
    }

    let navBar =<nav role="navigation" className={`main-nav ${this.state.isNavShown ? "show":""} ${path==='/' ? "fixed-main-nav":""}`}>
                  <div className="logo"><Link to="/"><img src ={Favicon} alt='credit card icon' id='nav-icon' width='37px'/></Link></div>
                  <ul className="nav-links">
                    <li><Link to= '/card-recommender'>Recommendation Tool</Link></li>
                    {/* <li><Link to= '/articles'>Articles</Link></li> */}
                    <li><Link to= '/your-cards/:id'>Your Cards</Link></li>
                    {signOn}
                  </ul>
                  <div className={`burger`} onClick={this.toggleNav}>
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