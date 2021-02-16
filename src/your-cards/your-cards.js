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
      .then(response => {
        if(response.length === 0){
          this.props.history.push('/card-recommender')
        }else{
          this.setState({cards:response})
        }
      })
    })
  }

  render(){
    return(
      <>
        <div className='result-container'>
          <div className='card-container'>
            {this.state.cards.map(card => {
              return(
                <div id = {card.id} className='card'>
                  <img src={card.imglink} alt={card.title} className='img-for-cards'/>
                  <h3><Link to = {`/cards/${card.id}`}>
                    {card.title}
                  </Link></h3>
                </div>
              )
            })}
          </div>
          <p className='text-for-cards'>{this.context.msg}</p>
        </div>
      </>
    )
  }
}