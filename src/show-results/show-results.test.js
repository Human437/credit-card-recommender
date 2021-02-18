import React from 'react'
import ReactDOM from 'react-dom'
import ShowResults from './show-results'
import {BrowserRouter} from 'react-router-dom'

describe('ShowResults Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ShowResults/>
      </BrowserRouter>
      , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})