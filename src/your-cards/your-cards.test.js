import React from 'react'
import ReactDOM from 'react-dom'
import YourCards from './your-cards'
import {BrowserRouter} from 'react-router-dom'

describe('YourCards Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <YourCards/>
      </BrowserRouter>
      , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})