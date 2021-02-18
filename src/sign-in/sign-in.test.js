import React from 'react'
import ReactDOM from 'react-dom'
import SignIn from './sign-in'
import {BrowserRouter} from 'react-router-dom'

describe('SignIn Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignIn/>
      </BrowserRouter>
      , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})