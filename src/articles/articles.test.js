import React from 'react'
import ReactDOM from 'react-dom'
import Articles from './articles'

describe('Articles Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Articles/>, div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})