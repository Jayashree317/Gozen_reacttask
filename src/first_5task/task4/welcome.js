import React from 'react';
import { Container } from 'react-bootstrap';


const Welcome = ({ userName }) => {
  return (
    <Container className="main text-center mt-5">
      <h2 className="simple">Welcome, {userName}!</h2>
      <p className="success-message">You have successfully logged in.</p>
    </Container>
  );
};

export default Welcome;
