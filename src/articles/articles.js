import React from 'react'
import {Link} from 'react-router-dom'
import './articles.css'
import RecommenderContext from './../recommenderContext'
import config from './../config'

export default class Articles extends React.Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
    }
  }

  static contextType = RecommenderContext;

  componentDidMount(){
    fetch(config.API_Articles_ENDPOINT, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${config.BEARER_TOKEN}`
      })
    })
    .then(response => response.json())
    .then(data => this.setState({articles:data}))
  }

  render(){
    return(
      <>
        <ul>
          {this.state.articles.map(article =>{
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