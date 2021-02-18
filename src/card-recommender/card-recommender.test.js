import React from 'react'
import ReactDOM from 'react-dom'
import CardRecommender from './card-recommender'

describe('CardRecommender Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <CardRecommender/>, div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})