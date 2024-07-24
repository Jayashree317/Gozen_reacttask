// ResponsiveTabs.js
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Button, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import './button.css';

const ResponsiveTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="tabs-container">
      <h2 className='text-color text-center'> GoZen</h2>

      <Helmet>
        <title>React Task-1</title>
        <meta name="description"  />
      </Helmet>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="controlled-tab-example"
        className="mb-3"
      
      >
        <Tab eventKey="home" title="Home">
          <TabContent title="Home" activeTab={activeTab} />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <TabContent title="Profile" activeTab={activeTab} />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <TabContent title="Contact" activeTab={activeTab} />
        </Tab>
      </Tabs>
    </div>
  );
};

const TabContent = ({ title, activeTab }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const content = {
    home: {
      short: "At GoZen, we are building a people-first culture. Our culture is the heart and soul of our company...",
      full: "At GoZen, we are building a people-first culture. Our culture is the heart and soul of our company.We believe that happy people create unique products.Culture and giving back to the community are foundational, and we are here to play the long-term game.."
    },
    profile: {
      short: "Profile short content...",
      full: "Profile full content: a people-first culture. Our culture is the heart and soul of our company" },
    contact: {
      short: "Contact short content...",
      full: "Contact full content: a people-first culture. Our culture is the heart and soul of our company"
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {isExpanded ? content[activeTab].full : content[activeTab].short}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleToggle} sx={{ mt: 2 }}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
    </Box>
  );
};

export default ResponsiveTabs;
