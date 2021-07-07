import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css'
import { Main, Weather, Clock } from './components/pages'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)