import React, { Component } from "react"
import { connect } from 'react-redux'

import AnimalFinder from '../animals/AnimalFinder'

class AnimalFinderContainer extends Component {

  handleDispatch = (searchFields) => {
    debugger
  }
  render() {
    return (
      <div>
        <AnimalFinder handleDispatch={this.handleDispatch} />
      </div>
    );
  }
}

export default AnimalFinderContainer
