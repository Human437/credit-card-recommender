import React from 'react'
import ReactDOM from 'react-dom'
import Card from './card'

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const match = {params:{id:1}}
    ReactDOM.render(
        <Card match={match}/>, div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})