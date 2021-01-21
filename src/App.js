import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import STORE from './dummy-store'
import RecommenderContext from './recommenderContext'
import HomePage from './home-page/home-page'
import CardRecommender from './card-recommender/card-recommender'
import Articles from './articles/articles'
import SignIn from './sign-in/sign-in'
import SignUp from './sign-up/sign-up'
import YourCards from './your-cards/your-cards'
import Article from './article/article'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isSignedIn: false,
      theme: 'light',
      articles: [],
      userCards: [],
    }
  }

  componentDidMount(){
    this.setState({
      articles:STORE.articles,
      userCards:STORE.userCards
    })
  }

  render(){
    document.getElementById('root').className = this.state.theme
    return(
      <RecommenderContext.Provider
        value = {{
          isSignedIn:this.state.isSignedIn,
          theme: this.state.theme,
          articles: this.state.articles,
          userCards: this.state.userCards,
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
          exact path = '/articles'
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
        <Route
          path = '/articles/:id'
          component = {Article}
        />
      </RecommenderContext.Provider>
    )
  }
}

export default App;