import React from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './item';

const Task = () => (
  <Container>
    <h1>Optimistic UI Updates</h1>
    <ItemList />
  </Container>
);

export default Task;
