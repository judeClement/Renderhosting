import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#003E33', // Change background color of heading
    color: theme.palette.common.white,
    padding: "10px", // Adjusting padding
    textAlign: 'center', // Align contents centrally
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    padding: "9px",
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Sfsd() {
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState();

  const handleUpload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axiosInstance.post('/api/upload', formData)
      .then(res => { 
        alert('Successfully uploaded')
        console.log(res.data)
    })
    .catch(error => { 
      alert('No file Chosen')
      console.log(error);
    });
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/api/students');
        // Filter users belonging to "KKEM March DSA" batch
        const filteredUsers = response.data.filter(user => user.batch === 'KKEM March FSD');
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const sendEmails = async (email) => {
    try {
      await axiosInstance.post('/api/email', { email });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

  return (
    <div>
      <Typography variant="h3" style={{ fontWeight: "500", margin: "40px", marginBottom: "40px", fontFamily: "Arial, sans-serif", fontSize: "40px" }}>
        KKEM March FSD
      </Typography>

      <TableContainer component={Paper} style={{ maxWidth: "700px", margin: "auto" }}> {/* Adjusting table width */}
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell> {/* Add a new column for actions */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell> {/* Aligning contents centrally */}
                <StyledTableCell align="center"> {/* Action column */}
                  <a href={`mailto:${user.email}`} style={{ textDecoration: "none" }} onClick={() => sendEmails(user.email)}>
                    <EmailIcon color="success" fontSize="large" /> {/* Increase size of EmailIcon */}
                  </a>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <br /><br /><br /><br />
        <div>
          {/* code for upload */}
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          {/* <button type="button" onClick={handleUpload}>Upload</button> */}
          <Button variant="contained" color="success" onClick={handleUpload}>Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default Sfsd;

