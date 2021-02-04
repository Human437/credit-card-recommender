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
        <h2><Link to="/sign-up">Save Your Results, Sign Up Today</Link></h2>
      </>
    )
  }
}