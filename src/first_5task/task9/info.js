// src/components/UserInfo.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Container } from '@mui/material';
import { setUser } from './user';

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleSaveUser = () => {
    console.log('Handle Save User Called');
    console.log('Name:', name);
    console.log('Email:', email);
    if (name && email) {
      dispatch(setUser({ name, email }));
      console.log('Dispatching setUser with:', { name, email });
    } else {
      console.log('Name or Email is empty');
    }
  };
  

  return (
    <Container>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveUser}
      >
        Save User
      </Button>
    </Container>
  );
};

export default UserInfo;
