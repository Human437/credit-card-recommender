import React from 'react'
import {Link} from 'react-router-dom'
import './your-cards.css'
import RecommenderContext from './../recommenderContext'
import config from './../config'

export default class YourCards extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      cards: [],
    }
  }
  static contextType = RecommenderContext
  
  componentDidMount(){
    fetch(`${config.API_User_ENDPOINT}/${this.context.userId}`, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${config.BEARER_TOKEN}`
      })
    })
    .then(response => response.json())
    .then(data => {
      this.context.updateUserCards(data.usercards)
      this.context.updateMsg(data.msg)
      
      let results = data.usercards.map(cardId =>{
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
    })
  }

  render(){
    return(
      <>
        <br/>
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
      </>
    )
  }
}