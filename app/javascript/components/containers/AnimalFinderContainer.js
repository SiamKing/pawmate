import React from "react"
import { connect } from 'react-redux'

import AnimalFinder from '../animals/AnimalFinder'

class AnimalFinderContainer extends React.Component {
  render () {
    return (
      <AnimalFinder />
    );
  }
}

export default connect()(AnimalFinderContainer)
