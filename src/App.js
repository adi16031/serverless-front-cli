import React from "react";
import { Link } from "react-router-dom";
import { Nav,Navbar,NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
      <Navbar.Brand href="/">Todo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Link to="/">Home</Link></Nav.Item>
        </Nav>
        <Nav pullRight>
            <Nav.Item><Link to="/signup">Signup</Link></Nav.Item>
            <Nav.Item><Link to="/login">Login</Link></Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes />
      </div>
    )
  }
}
export default App