import React from 'react'
import ReactDOM from 'react-dom'
import Article from './article'

describe('Article Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const match = {params:{id:1}}
    ReactDOM.render(
        <Article match ={match}/>, div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})