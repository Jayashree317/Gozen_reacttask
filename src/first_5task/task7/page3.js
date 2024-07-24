import React from 'react';
import { Typography, Button, Card } from '@mui/material';

const Contact = () => {
    return (
        <Card variant="outlined" className="p-3">
            <Typography variant="h4" gutterBottom color='violet'>Contact Page</Typography>
            <Typography variant="body1">This is the contact page. Reach out to us here.</Typography>
            <Button variant="contained"  href="/" className="mt-3" style={{backgroundColor:"violet"}}>
                Go to Home
            </Button>
        </Card>
    );
};

export default Contact;
