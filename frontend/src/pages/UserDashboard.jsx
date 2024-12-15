import React from 'react';
import { Card, Typography, List, ListItem, ListItemText } from '@mui/material';

const UserDashboard = ({ history, vehicles }) => (
  <Card style={{ padding: '20px', margin: '20px' }}>
    <Typography variant="h4" gutterBottom>User Dashboard</Typography>
    <Typography variant="h6">Your Vehicles:</Typography>
    <List>
      {vehicles.map((vehicle, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${vehicle.make} - ${vehicle.registrationNumber}`}
            secondary={`Status: ${vehicle.status}`}
          />
        </ListItem>
      ))}
    </List>
    <Typography variant="h6" style={{ marginTop: '20px' }}>Your History:</Typography>
    <List>
      {history.map((record, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`Date: ${record.date}`}
            secondary={`Action: ${record.action}, Car: ${record.car}`}
          />
        </ListItem>
      ))}
    </List>
  </Card>
);

export default UserDashboard;