import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './home-page'
import {BrowserRouter} from 'react-router-dom'

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
        , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})