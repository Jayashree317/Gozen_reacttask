import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { Helmet } from "react-helmet";
import './form.css';

const Login = ({ onLoginSuccess }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      onLoginSuccess(formValues.name);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <Container className="main">
        <Helmet>
        <title>React Task-4</title>
        <meta name="description" />
      </Helmet>
      <h2 className="simple text-center mt-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Form Validation</h2><br />
      {isSubmitted && <Alert variant="success" className="text-center">Form submitted successfully!</Alert>}
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Name</Form.Label>
          <Col sm="9">
            <TextField
              fullWidth
              variant="outlined"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Email</Form.Label>
          <Col sm="9">
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Password</Form.Label>
          <Col sm="9">
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">Phone</Form.Label>
          <Col sm="9">
            <TextField
              fullWidth
              variant="outlined"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              error={!!formErrors.phone}
              helperText={formErrors.phone}
            />
          </Col>
        </Form.Group>
        <center>
          <Button type="submit" variant="primary">Submit</Button>
        </center>
      </Form>
    </Container>
  );
};

export default Login;
