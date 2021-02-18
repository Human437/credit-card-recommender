import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navBar'
import {BrowserRouter} from 'react-router-dom'

describe('NavBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const location = {pathname:'test'}
    ReactDOM.render(
      <BrowserRouter>
        <NavBar location={location}/>
      </BrowserRouter>
        , div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})