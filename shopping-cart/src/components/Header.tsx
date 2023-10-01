import React from "react";
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <a href="/">Shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
            <Dropdown align={'end'}>
                <Dropdown.Toggle variant="success">
                  <Badge></Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth: 370}}>
                   <span style={{padding:10}}>Cart is Empty!</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
