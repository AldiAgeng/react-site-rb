import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductComponent.css';
import { Container, Card, Row, Col, Button, Nav } from 'react-bootstrap';
import { FaCartPlus, FaMoneyBill } from 'react-icons/fa';

const ProductComponent = (props) => {
  return (
    <div>
      <Container >
        <Row>
          <Col>
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
              <Nav.Item>
                <Nav.Link style={{ color: 'black' }} href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: 'black' }} eventKey="link-1">Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: 'black' }} eventKey="link-2">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ color: 'black' }} eventKey="link-3">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col ><p className='product-tittle'>Best Sellers</p></Col>
        </Row>
        <Row>
          <Col>
            <Card >
              <Card.Img style={{ maxHeight: '300px' }} variant="top" src={require("./3.png")} />
              <Card.Body>
                <Card.Title ><a style={{ color: 'black' }} href="">TV LCD</a></Card.Title>
                <Button style={{ backgroundColor: '#F3CC6B', color: 'black', marginRight: '10px', border: 'none' }} className="btn-tv-cart" variant="primary">
                  <FaCartPlus /> Add to Cart
                  </Button>
                <Button style={{ backgroundColor: '#F3CC6B', color: 'black', border: 'none' }} variant="primary">
                  <FaMoneyBill /> Buy Now
                  </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Img style={{ maxHeight: '300px' }} variant="top" src={require("./2.png")} />
              <Card.Body>
                <Card.Title ><a style={{ color: 'black' }} href="">TV LCD</a></Card.Title>
                <Button style={{ backgroundColor: '#F3CC6B', color: 'black', marginRight: '10px', border: 'none' }} className="btn-tv-cart" variant="primary">
                  <FaCartPlus /> Add to Cart
                  </Button>
                <Button style={{ backgroundColor: '#F3CC6B', color: 'black', border: 'none' }} variant="primary">
                  <FaMoneyBill /> Buy Now
                  </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default ProductComponent;