import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import logo from '../images/Picsart_24-04-22_01-24-52-405.jpg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {MenuItem, Menu } from '@mui/material';
import StudentLogin from './StudentLogin';
// import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const releaseToken = () => {
    sessionStorage.removeItem('userToken');
  };
  

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{fontFamily:"Sora, sans-serif"}}>
      
      <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{ color: '#352f44', backgroundColor: '#009B81', height: '85px'}}>
      <Toolbar>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'BricolageGrotesque',color:"white",font:"revert",fontSize:"28px",fontWeight:"500"}}>
          <Box display="flex" alignItems="center">
            <img src={logo} alt="Logo" style={{ padding:"10px", width:"80px", marginRight: '10px' }} />
            {/* Employee Dashboard */} ICT Academy of Kerala
            {/* #009B81 */}
          </Box>
        </Typography>
        {isMobile ? (
          // Render a mobile-friendly menu for small screens
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link href="#" color="inherit" underline="none">Home</Link>
            </MenuItem>
            {/* <MenuItem>
              <Link href="#" color="inherit" underline="none">About Us</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" color="inherit" underline="none">Contact Us</Link>
            </MenuItem> */}
          </Menu>
        ) : (
          // Render normal buttons for larger screens
          <>
            <Button variant='contained' color="primary" style={{ borderRadius: "18px", marginRight: '20px',backgroundColor: '#00463a' }}>
              <Link to={'/'} style={{ textDecoration: "none", color: 'white' }}> HOME</Link>
            </Button>
            {/* <Button variant='contained' color="inherit" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={"/"} style={{ textDecoration: "none", color: 'white' }}>LOGIN</Link>
            </Button>  */}
             {/* <Button variant='contained' color="inherit" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={""} style={{ textDecoration: "none", color: 'white' }}>ABOUT US</Link>
            </Button>
            <Button variant='contained' color="inherit" style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={""} style={{ textDecoration: "none", color: 'white' }}>CONTACT US</Link>
            </Button> */}
            <Button variant='contained' color="inherit" onClick={releaseToken} style={{ borderRadius: "18px", marginRight: '20px', backgroundColor: '#00463a' }}>
              <Link to={"/"} style={{ textDecoration: "none", color: 'white' }}>LOGOUT</Link>
            </Button> 
          </>
        )}
      </Toolbar>
    </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;




// <AppBar position="static" sx={{ bgcolor: 'yellow' }}>
// <Toolbar>
//     <Typography variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'orange' }}>
//         ICTAK Exam Registration Portal
//     </Typography>
//     <Button sx={{ color: 'orange' }}>Login</Button>
//     <Button sx={{color: 'orange' }}>Home</Button>
//     <Button sx={{ color: 'orange' }}>About</Button>
//     <Button sx={{ color: 'orange' }}>Contact</Button>
//     <Button sx={{ color: 'orange', marginLeft: 'auto' }}>Login</Button>
// </Toolbar>
// </AppBar>


{/* <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"   style={{ backgroundColor: 'darkblue',color: 'white',borderRadius: '18px',textAlign: 'center'}}>
COURSES
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
</ul> */}


{/* <MDBNavbarItem>
<MDBDropdown>
  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
    Dropdown
  </MDBDropdownToggle>
  <MDBDropdownMenu>
    <MDBDropdownItem link>Action</MDBDropdownItem>
    <MDBDropdownItem link>Another action</MDBDropdownItem>
    <MDBDropdownItem link>Something else here</MDBDropdownItem>
  </MDBDropdownMenu>
</MDBDropdown>
</MDBNavbarItem> */}