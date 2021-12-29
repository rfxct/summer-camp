import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyles from './styles/global'

import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
