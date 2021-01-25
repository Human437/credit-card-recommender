import React from 'react'
import {Link} from 'react-router-dom'
import './your-cards.css'
import RecommenderContext from './../recommenderContext'

export default class YourCards extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  static contextType = RecommenderContext;

  render(){
    return(
      <>
        <br/>
        <ul>
          {this.context.availableCards.map(availableCard =>{
            return(
              <li key = {availableCard.id} id = {availableCard.id}>
                <Link
                  to = {`/cards/${availableCard.id}`}
                >
                  {availableCard.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}