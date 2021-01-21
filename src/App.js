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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      signedIn: false,
      theme: 'dark',
    }
  }

  render(){
    return(
      <RecommenderContext.Provider
        value = {{
          signedIn:this.state.signedIn,
          theme: this.state.theme,
        }}
      >
        <nav role="navigation">
          <Link to="/">Home</Link>
          <Link to= '/card-recommender'>Card Recommendation Tool</Link>
          <Link to= '/articles'>View Articles</Link>
          <Link to= '/your-cards'>View Your Cards</Link>
          <button><Link to="/sign-in">Sign In</Link></button>
          <button><Link to="/sign-up">Sign Up</Link></button>
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
          path = '/articles'
          component = {Articles}
        />
        <Route
          path = '/your-cards'
          component = {YourCards}
        />
        <Route 
          path = '/sign-in'
          component = {SignIn}
        />
        <Route
          path = '/sign-up'
          component = {SignUp}
        />
      </RecommenderContext.Provider>
    )
  }
}

export default App;