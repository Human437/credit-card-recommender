import React from 'react'
import ReactDOM from 'react-dom'
import ProtectedYourCards from './protectedYourCards'
import {BrowserRouter} from 'react-router-dom'

describe('ProtectedYourCards Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ProtectedYourCards/>
      </BrowserRouter>
        , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})