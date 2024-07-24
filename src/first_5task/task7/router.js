import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Typography } from "@mui/material";
import Home from "./page1";
import About from "./page2";
import Contact from "./page3";
import { Helmet } from 'react-helmet';

const Router_main = () => {
  return (
    <Router>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "violet" }}>
        <Container>
          <Helmet>
            <title>React Task-7</title>
            <meta name="description" />
          </Helmet>
          <Navbar.Brand href="/">React Router App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Router_main;
