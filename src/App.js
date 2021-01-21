import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './home-page/home-page'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render(){
    return(
      <>
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
      </>
    )
  }
}

export default App;