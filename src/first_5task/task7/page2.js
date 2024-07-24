import React from 'react';
import { Typography, Button, Card } from '@mui/material';

const About = () => {
    return (
        <Card variant="outlined" className="p-3">
            <Typography variant="h4" gutterBottom color='violet'>About Page</Typography>
            <Typography variant="body1">This is the about page of the application. Learn more about us here.</Typography>
            <Button variant="contained" href="/contact" className="mt-3" style={{backgroundColor:"violet"}}>
                Go to Contact
            </Button>
        </Card>
    );
};

export default About;
