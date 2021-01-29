import React from 'react'
import {Link} from 'react-router-dom'
import './show-results.css'
import RecommenderContext from './../recommenderContext'

export default class ShowResults extends React.Component{
  constructor(props){
    super(props);
    this.setState={

    }
  }

  static contextType =RecommenderContext
  
  render(){
    return(
      <>
        <ul>
          {this.context.userCards.map(cardId =>{
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
        <p>{this.context.msg}</p>
        <h2><Link to="/sign-up">Save Your Results, Sign Up Today</Link></h2>
      </>
    )
  }
}