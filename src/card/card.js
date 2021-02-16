import React from 'react'
import './card.css'
import config from './../config'

export default class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      card: {}
    }
    this.selectedCardId = this.props.match.params.id;
  }

  componentDidMount(){
    fetch(`${config.API_Cards_ENDPOINT}/${this.selectedCardId}`,{
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${config.BEARER_TOKEN}`
      })
    })
    .then(response => response.json())
    .then(data => this.setState({card:data}))
  }

  render(){
    return(
      <>
        <h1>{this.state.card.title}</h1>
        <br/>
        <div id='single-card-container'>
          <p id='cc-text'>{this.state.card.content}</p>
          <img src={this.state.card.imglink} alt={this.state.card.title} id='cc-image'/>
        </div>
      </>
    )
  }
}