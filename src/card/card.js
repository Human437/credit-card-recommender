import React from 'react'
import './card.css'
import RecommenderContext from './../recommenderContext'
import STORE from './../dummy-store'

export default class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
    this.selectedCardId = this.props.match.params.id;
    this.card = STORE.userCards.find(card => card.id === Number(this.selectedCardId))
  }

  static contextType = RecommenderContext

  render(){
    return(
      <>
        <h1>{this.card.title}</h1>
        <p>{this.card.content}</p>
        {/* Add something for the image of the card down the line */}
      </>
    )
  }
}