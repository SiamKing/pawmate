import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AnimalFinder from '../animals/AnimalFinder'


class AnimalsContainer extends React.Component {
  render () {
    return (
      <Container fluid="true" className="">
        <Row className="flex-fill flex-column flex-sm-row">
          <Col md={2} className="sidebar bg-dark vh-100 text-light pt-5">
            <AnimalFinder />
          </Col>
          Animals
        </Row>
      </Container>
    );
  }
}

export default AnimalsContainer
