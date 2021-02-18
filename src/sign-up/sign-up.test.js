import React from 'react'
import ReactDOM from 'react-dom'
import SignUp from './sign-up'
import {BrowserRouter} from 'react-router-dom'

describe('SignUp Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignUp/>
      </BrowserRouter>
      , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})