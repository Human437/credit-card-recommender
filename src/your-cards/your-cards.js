import React from 'react'
import {Link} from 'react-router-dom'
import './your-cards.css'
import RecommenderContext from './../recommenderContext'
import STORE from './../dummy-store'

export default class YourCards extends React.Component{
  
  constructor(props){
    super(props);
    this.state={

    }
  }
  static contextType = RecommenderContext
  

  render(){
    const user = STORE.users.find(user =>(Object.values(user).includes(this.context.userId)))
    return(
      <>
        <br/>
        <ul>
          {/* fetch the user based off the user id */}
          {user.userCards.map(cardId =>{
            // fetch the card by id
            const card = this.context.availableCards.find(availableCard =>(Object.values(availableCard).includes(cardId)))
            return (
              <li key ={cardId} id = {cardId}>
                <Link to = {`/cards/${cardId}`}>
                  {card.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}