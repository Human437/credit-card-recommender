import React from 'react';
import { Route} from 'react-router-dom'
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
import NavBar from './navBar/navBar'

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
        <Route
          path = '/'
          component ={NavBar}
        />
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
        <div id ='icon-container'>
          <span>Check me out:</span>
          <div className='icons github'>
            <a href="https://github.com/human437" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <div className='icons linkedin'>
            <a href="https://www.linkedin.com/in/yuenhigh-lee/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </RecommenderContext.Provider>
    )
  }
}

export default App;