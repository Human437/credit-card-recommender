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
          {this.context.userCards.map(userCard =>{
            return(
              <li key = {userCard.id} id = {userCard.id}>
                <Link
                  to = {`/your-cards/${userCard.id}`}
                >
                  {userCard.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}