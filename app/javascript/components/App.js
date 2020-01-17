import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/application.scss"

import Home from './Home'
import Navbar from './Navbar'
import AnimalsContainer from './containers/AnimalsContainer'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/animals" component={AnimalsContainer} />
        </Router>
      </div>
    );
  }
}

export default App
