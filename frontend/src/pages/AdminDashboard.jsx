import React from 'react';
import { Card, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AdminDashboard = ({ userRequests, carRequests, onApprove, onReject }) => (
  <Card style={{ padding: '20px', margin: '20px' }}>
    <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

    <Typography variant="h6">Pending User Approvals:</Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRequests.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => onApprove(user.id)}>Approve</Button>
                <Button color="secondary" onClick={() => onReject(user.id)}>Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Typography variant="h6" style={{ marginTop: '20px' }}>Pending Car Approvals:</Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Car</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carRequests.map((car, index) => (
            <TableRow key={index}>
              <TableCell>{`${car.make} - ${car.registrationNumber}`}</TableCell>
              <TableCell>{car.owner}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => onApprove(car.id)}>Approve</Button>
                <Button color="secondary" onClick={() => onReject(car.id)}>Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
);

export default AdminDashboard;
