import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/application.scss"

import Home from './Home'
import Navbar from './Navbar'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" render={props => <Home {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App
