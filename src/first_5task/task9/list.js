// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { deleteTask } from './slice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroup.Item key={task.id}>
          <h5>{task.content}</h5>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
