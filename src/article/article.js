import React from 'react'
import './article.css'
import RecommenderContext from './../recommenderContext'
import STORE from './../dummy-store'

export default function Article(props){
  const articles = STORE.articles;
  return(
    <RecommenderContext.Consumer>
      {(value) => {
        const selectedArticleId = props.match.params.id;
        const article = articles.find(article => article.id === Number(selectedArticleId))
        // In actual build it will fetch using the specific id endpoint
        return(
          <>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </>
        )
      }}
    </RecommenderContext.Consumer>
  )
}