import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import RecommenderContext from './recommenderContext'
import HomePage from './home-page/home-page'
import CardRecommender from './card-recommender/card-recommender'
import Articles from './articles/articles'
import SignIn from './sign-in/sign-in'
import SignUp from './sign-up/sign-up'
import YourCards from './your-cards/your-cards'
import Article from './article/article'
import Card from './card/card'
import ProtectedYourCards from './protectedRoutes/protectedYourCards'
import ShowResults from './show-results/show-results'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isSignedIn: false,
      theme: 'light',
      articles: [],
      availableCards: [],
      userCards: [],
      userId: null,
      msg:'',
      isFromResultsPage: false,
    }
  }

  userSignedIn= () => {
    this.setState({isSignedIn:true})
  }

  updateUserId = (id) => {
    this.setState({userId:id})
  }

  updateUserCards = (cards) => {
    this.setState({userCards:cards})
  }
  
  updateMsg = (message) => {
    this.setState({msg:message})
  }

  updateIsFromResultsPage = (state) => {
    this.setState({isFromResultsPage:state})
  }

  render(){
    document.getElementById('root').className = this.state.theme
    let navBar;
    if (this.state.isSignedIn){
      navBar = <></>
    }else{
      navBar = <>
                <button><Link to="/sign-in">Sign In</Link></button>
                <button><Link to="/sign-up">Sign Up</Link></button>
              </>
    }
    return(
      <RecommenderContext.Provider
        value = {{
          isSignedIn:this.state.isSignedIn,
          theme: this.state.theme,
          articles: this.state.articles,
          availableCards: this.state.availableCards,
          userSignedIn: this.userSignedIn,
          userCards: this.state.userCards,
          updateUserId: this.updateUserId,
          userId: this.state.userId,
          updateUserCards: this.updateUserCards,
          updateMsg: this.updateMsg,
          msg:this.state.msg,
          isFromResultsPage: this.state.isFromResultsPage,
          updateIsFromResultsPage: this.updateIsFromResultsPage
        }}
      >
        <nav role="navigation">
          <Link to="/">Home</Link>
          <Link to= '/card-recommender'>Card Recommendation Tool</Link>
          <Link to= '/articles'>View Articles</Link>
          <Link to= '/your-cards/:id'>View Your Cards</Link>
          {navBar}
          {/* <button><Link to="/sign-in">Sign In</Link></button>
          <button><Link to="/sign-up">Sign Up</Link></button> */}
        </nav>
        <Route
          exact path = '/'
          component ={HomePage}
        />
        <Route
          path = '/card-recommender'
          component = {CardRecommender}
        />
        <Route
          exact path = '/articles'
          component = {Articles}
        />
        <ProtectedYourCards 
          path='/your-cards/:id' 
          component={YourCards}
        />
        <Route 
          path = '/sign-in'
          component = {SignIn}
        />
        <Route
          path = '/sign-up'
          component = {SignUp}
        />
        <Route
          path = '/articles/:id'
          component = {Article}
        />
        <Route
          path = '/cards/:id'
          component = {Card}
        />
        <Route
          path = '/view-results'
          component = {ShowResults}
        />
      </RecommenderContext.Provider>
    )
  }
}

export default App;