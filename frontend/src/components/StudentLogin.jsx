
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; 
import loginImage from '../images/login.png';
import axios from 'axios';
import '../css/StudentLogin.css'; 

const StudentLogin = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({ email: '', password: '' });

  const inputHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios.post('/api/studentlog', student)
      .then((res) => {
        if (res.data.message === 'Login successful') {
          alert('Login successful');
          sessionStorage.setItem('userToken',res.data.token)
          navigate('/sdash');
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => {
        alert('Login failed');
        console.log(error);
      });
  };

  return (
    <div className='studentlog'>
      <div className='login-form' >
        
        <img src={loginImage} alt="" className='logimage' />
        <Typography variant="h5" gutterBottom style={{ color: '#006D5B', fontFamily: 'TimesNewRoman' }}>
          Student Login
        </Typography>
        
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name='email'
          style={{ width: '70%', borderRadius: '50%' }}
          onChange={inputHandler}
          className='input'
        />
        <br /><br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name='password'
          style={{ width: '70%', borderRadius: '50%' }}
          
          onChange={inputHandler}
          className='input'
        />
        <br /> <br />
        <Button
          variant="contained"
          style={{ width: '45%', borderRadius: '50px', backgroundColor: '#006D5B' }}
          onClick={addHandler}
        >
          Login
        </Button>
        <br />
        <Typography style={{ fontFamily: 'TimesNewRoman' }}>
          Not a student? <Link to="/adminlog" style={{ textDecoration: 'none', color: '#006D5B', fontFamily: 'TimesNewRoman' }}>Admin Login </Link>
        </Typography>
      </div>
    </div>
  );
};

export default StudentLogin;



