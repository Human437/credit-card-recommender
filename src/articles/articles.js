import React from 'react'
import {Link} from 'react-router-dom'
import './articles.css'
import RecommenderContext from './../recommenderContext'

export default class Articles extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  static contextType = RecommenderContext;

  render(){
    return(
      <>
        <ul>
          {this.context.articles.map(article =>{
            return(
              <li key = {article.id} id = {article.id}>
                <Link
                  to = {`/articles/${article.id}`}
                >
                  {article.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}