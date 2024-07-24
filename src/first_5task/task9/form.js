// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container } from '@mui/material';
import { addTask } from './slice';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ id: Date.now(), content: task }));
      setTask('');
    }
  };

  return (
    <Container>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        margin="normal"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
      >
        Add Task
      </Button>
    </Container>
  );
};

export default TaskForm;
