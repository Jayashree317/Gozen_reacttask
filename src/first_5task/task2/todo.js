import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Container,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet";
import "./todo.css";

const TodoList = () => {
  // Initialize state
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handler to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Handler to toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handler to remove a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container style={{ marginTop: "50px" }} className="bodyimg">
      <Helmet>
        <title>React Task-2</title>
        <meta name="description" />
      </Helmet>
      <Typography variant="h4" gutterBottom className="text-center text-main">
        Todo List
      </Typography>
      <center><TextField
        label="New Task"
        variant="outlined"
        color="secondary"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginLeft: "20px" }}
      />&nbsp;
      <Button
        variant="contained"
        color="secondary"
        onClick={addTask}
        style={{ padding:"14px"}}
        size="large"
      >
        Add Task
      </Button></center>
      <List style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <ListItemText
              primary={task.text}
              style={{
                color:"white",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            />
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeTask(index)}
              style={{ marginLeft: "10px" }}
            >
              <i class="fa-solid fa-trash"></i>&nbsp;Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
