// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TaskForm from './form';
import TaskList from './list';
import UserInfo from './info';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <Container>
           <Helmet>
        <title>React Task-9</title>
        <meta name="description"  />
      </Helmet>
      <h1 className="my-4">Task Management App</h1>
      <Row className="mb-4">
        <Col>
          <TaskForm />
        </Col>
        <Col>
          <UserInfo />
        </Col>
      </Row>
      <TaskList />
    </Container>
  );
};

export default App;
