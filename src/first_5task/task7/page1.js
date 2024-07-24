
import React from 'react';
import { Typography, Button, Card } from '@mui/material';

const Home = () => {
    return (
        <Card variant="outlined" className="p-3">
            <Typography variant="h4" gutterBottom color='violet'>Home Page</Typography>
            <Typography variant="body1">Welcome to the home page of our multi-page React application.</Typography>
            <Button variant="contained"  href="/about" className="mt-3" style={{backgroundColor:"violet"}}>
                Go to About
            </Button>
        </Card>
    );
};

export default Home;

