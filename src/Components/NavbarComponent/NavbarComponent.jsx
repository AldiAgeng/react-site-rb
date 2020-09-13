import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';
import { GiShoppingCart } from 'react-icons/gi';
import { FcSearch } from "react-icons/fc";
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" >
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("./icons8.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            HappyHomeMade
    </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{ margin: '0 10px' }} href="#link">Login</Nav.Link>
              <Nav.Link style={{ margin: '0 10px' }} href="#link"><GiShoppingCart /> Cart</Nav.Link>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light"><FcSearch />Search</Button>
              </Form>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;