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
import Card from './card/card'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isSignedIn: false,
      theme: 'light',
      articles: [],
      availableCards: [],
    }
  }

  componentDidMount(){
    this.setState({
      articles:STORE.articles,
      availableCards:STORE.availableCards
    })
  }

  userSignedIn= () => {
    this.setState({isSignedIn:true})
  }

  render(){
    document.getElementById('root').className = this.state.theme
    return(
      <RecommenderContext.Provider
        value = {{
          isSignedIn:this.state.isSignedIn,
          theme: this.state.theme,
          articles: this.state.articles,
          availableCards: this.state.availableCards,
          userSignedIn: this.userSignedIn,
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
          exact path = '/your-cards'
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
        <Route
          path = '/your-cards/:id'
          component = {Card}
        />
      </RecommenderContext.Provider>
    )
  }
}

export default App;