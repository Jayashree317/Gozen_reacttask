import React, { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

const Home = lazy(() => import('./file1'));
const About = lazy(() => import('./file2'));
const Contact = lazy(() => import('./file3'));

const App = () => (
  <div>
    <Helmet>
        <title>React Task-14</title>
        <meta name="description"  />
      </Helmet>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" style={{marginLeft:"40px"}}> MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Container>
  </div>
);

export default App;
