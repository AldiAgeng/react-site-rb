import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JumbotronComponent.css';


const JumbotronComponent = () => {
  return (
    <Jumbotron fluid className="jumbotron  jumbotron-fluid">
      <img src={require('./bg-jumbotron.jpg')} />
      <Container>
        <h1>Brightening homes with beautiful, durable products.</h1>
      </Container>
    </Jumbotron>
  )
}

export default JumbotronComponent;