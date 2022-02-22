import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Help from './views/help'
import Home from './views/home'
import News from './views/news'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Help} path="/help" />
        <Route exact component={Home} path="/" />
        <Route exact component={News} path="/news" />
        <Route exact component={About} path="/about" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
