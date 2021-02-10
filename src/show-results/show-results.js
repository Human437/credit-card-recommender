import React from 'react'
import {Link} from 'react-router-dom'
import './show-results.css'
import RecommenderContext from './../recommenderContext'
import config from './../config'

export default class ShowResults extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cards:[],
    }
  }

  static contextType =RecommenderContext
  
  componentDidMount(){
    let results = this.context.userCards.map(cardId =>{
      return fetch(`${config.API_Cards_ENDPOINT}/${cardId}`, {
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${config.BEARER_TOKEN}`
        })
      })
      .then(response => response.json())
    })
    Promise.all(results)
    .then(response => this.setState({cards:response}))
  }
  
  render(){
    let signOnButtons;
    if (this.context.isSignedIn){
      signOnButtons = <>
                        <button
                          onClick = {(e) => {
                            fetch(`${config.API_User_ENDPOINT}/${this.context.userId}`, {
                              method: 'PATCH',
                              headers: new Headers({
                                'Authorization': `Bearer ${config.BEARER_TOKEN}`,
                                'content-type': 'application/json',
                              }),
                              body: JSON.stringify({
                                usercards: this.context.userCards,
                                msg: this.context.msg
                              })
                            }).then(
                              this.props.history.push(`/your-cards/${this.context.userId}`)
                            )
                          }}
                        >
                          Update recommended cards
                        </button>
                      </>
    }else{
      signOnButtons = <>
                        <button><Link to="/sign-up">Sign Up Today</Link></button>
                        <button 
                          onClick = {(e) =>{this.context.updateIsFromResultsPage(true)}}
                        >
                          <Link to="/sign-in">Sign In</Link>
                        </button>
                      </>
    }
    return(
      <>
        <ul>
          {this.state.cards.map(card => {
            return(
              <li key ={card.id} id = {card.id}>
                <Link to = {`/cards/${card.id}`}>
                  {card.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <p>{this.context.msg}</p>
        <h2>Save Your Results by Signing Up or Signing In</h2>
        {signOnButtons}
      </>
    )
  }
}