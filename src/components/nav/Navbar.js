import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";

function NavComponent() {
  return (
    <Navbar bg="danger" expand="lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Youtube
        </Link>

        <Navbar.Toggle aria-controls="navbarNav" className="d-lg-none" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/" exact="true">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavComponent;
