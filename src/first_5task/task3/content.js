
import React, { useState } from 'react';
import { Button, Container, Card, Typography, Paper, CardMedia, CardContent } from '@mui/material';
import { Helmet } from "react-helmet";
import image from './image.jpg'
const InteractiveContent = () => {
  const [view, setView] = useState('text'); 
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

 
  const showText = () => setView('text');
  const showImage = () => setView('image');
  const showVideo = () => setView('video');
  
  const loginHandler = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Container className="mt-4">
        <Helmet>
        <title>React Task-3</title>
        <meta name="description" />
      </Helmet>
      <Typography variant="h4" gutterBottom>
        Conditional Rendering Techniques
      </Typography>

      <div className="mb-4">
        <Button variant="contained" color="primary" onClick={showText} className="me-2">
          Show Text
        </Button>
        <Button variant="contained" color="secondary" onClick={showImage} className="me-2">
          Show Image
        </Button>
        <Button variant="contained" color="success" onClick={showVideo}>
          Show Video
        </Button>
        <Button variant="outlined" color={isLoggedIn ? 'error' : 'success'} onClick={loginHandler} className="ms-2">
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </div>

      {/* Conditional Rendering using if statements */}
      {(() => {
        if (view === 'text') {
          return (
            <Paper elevation={3} className="p-3 mb-4">
              <Typography variant="h6">Text Content</Typography>
              <Typography variant="body1">
                This is some text content rendered using an if statement.
              </Typography>
            </Paper>
          );
        } else if (view === 'image') {
          return (
            <Card className="mb-4">
              <CardContent>
                <Typography variant="h6">Image Content</Typography>
                <CardMedia
                  component="img"
                  height="500"
                  image={image}
                  alt="Placeholder"
                />
              </CardContent>
            </Card>
          );
        } else if (view === 'video') {
          return (
            <Card className="mb-4">
              <CardContent>
                <Typography variant="h6">Video Content</Typography>
                <video width="100%" controls>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          );
        }
        return null;
      })()}

      {/* Conditional Rendering using ternary operator */}
      {isLoggedIn ? (
        <Paper elevation={3} className="p-3 mb-4">
          <Typography variant="h6">Welcome back!</Typography>
          <Typography variant="body1">
            Here is some exclusive content only for logged-in users.
          </Typography>
        </Paper>
      ) : (
        <Paper elevation={3} className="p-3 mb-4">
          <Typography variant="h6">Please log in</Typography>
          <Typography variant="body1">
            Log in to access exclusive content.
          </Typography>
        </Paper>
      )}

      {/* Conditional Rendering using logical && operator */}
      {isLoggedIn && (
        <Paper elevation={3} className="p-3 mb-4">
          <Typography variant="h6">Additional Content for Logged-In Users</Typography>
          <Typography variant="body1">
            This content is shown only if the user is logged in.
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default InteractiveContent;
