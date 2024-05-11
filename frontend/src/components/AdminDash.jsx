import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = () => {
  return (

<div style={{padding:"30px"}}>
      < Box style={{paddingBottom:"30px"}}>
      <  Typography sx={{fontWeight:"300",fontSize:"40px",fontFamily:"sora,sans-seriff"}}>BATCHES</Typography>
      </Box>
      

      <div className="row">
{/* here */}
<div className="col-sm-6">
  < div className="card mb-4" style={{height: '208px',border: "1.6px solid black" }}> 
    <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', width: '100%', border: "0px" }}>
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{height: '200%' }}>
        <img src="https://7wdata.be/wp-content/uploads/2016/05/data-scientist-venn-diagram1.jpg" className="img-fluid" alt="Nature" style={{ width: '95%' }} /> 
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h5 className="card-title">KKEM March DSA</h5>
        <p className="card-text">Click details to view complete list of students</p>
        <Button
          component={Link}
          to="/sdsa"
          variant="contained"
          style={{ width: "50%", borderRadius: "11px", backgroundColor: '#009B81', color: 'white', marginTop: '10px', alignSelf: 'center' }}>
          Details
        </Button>
       
      </div>
    </div>
  </div>
</div>

{/* till here */}
       
        <div className="col-sm-6">
          <div className="card mb-4" style={{border: "1.6px solid black"}}>
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', width: '100%'}}>
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="https://www.topsinfosolutions.com/wp-content/uploads/2019/01/info-graphics.png" className="img-fluid" alt="Nature" style={{ width: '100%', objectFit: 'cover' }} />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h5 className="card-title">KKEM March FSD</h5>
        <p className="card-text">Click details to view complete list of students</p>
        <Button
          component={Link}
          to="/sfsd"
          variant="contained"
          style={{ width: "50%", borderRadius: "11px", backgroundColor: '#009B81', color: 'white', marginTop: '10px', alignSelf: 'center' }}
        >
          Details
        </Button>
        
        </div>
     </div>
          </div>
        </div>
{/* here */}
<div className="col-sm-6">
          <div className="card mb-4" style={{height:"100px"}}>
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', width: '100%', margin: '',border:"1.6px solid black" }}>
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{height:"100%"}}>
        <img src="https://images.interestingengineering.com/images/DECEMBER/Machine_Learning_whatyoushouldknow.jpg" className="img-fluid" alt="Nature" style={{ width: '86.7%', objectFit: 'contain' }} />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h5 className="card-title">KKEM March MLAI</h5>
        <p className="card-text">Click details to view complete list of students</p>
        <Button
          component={Link}
          to="/smlai"
          variant="contained"
          style={{ width: "50%", borderRadius: "11px", backgroundColor: '#009B81', color: 'white', marginTop: '10px', alignSelf: 'center' }}
        >
          Details
        </Button>
       
      </div>
     </div>
          </div>
        </div>
{/* till here */}

{/* here */}
<div className="col-sm-6">
          <div className="card mb-4" >
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', width: '100%', margin: '',border:"1.6px solid black" }}>
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="https://www.mameloo.com/wp-content/uploads/2019/06/Threat-Protect-Cyber-Security-Framework.png" className="img-fluid" alt="Nature" style={{ width: '89.5%', objectFit: 'cover' }} />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h5 className="card-title">KKEM March CSA</h5>
        <p className="card-text">Click details to view complete list of students</p>
        <Button
          component={Link}
          to="/scsa"
          variant="contained"
          style={{ width: "50%", borderRadius: "11px", backgroundColor: '#009B81', color: 'white', marginTop: '10px', alignSelf: 'center' }}
        >
          Details
        </Button>
        
      </div>
     </div>
          </div>
        </div>
{/* till here */}

{/* here */}
<div className="col-sm-6">
          <div className="card mb-4" >
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', width: '100%', margin: '',border:"1.6px solid black" }}>
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="https://itguru.vn/blog/wp-content/uploads/2020/03/Sofware-Testing-Life-Cycle-945x972.png" className="img-fluid" alt="Nature" style={{ width: '86.9%', objectFit: 'cover' }} />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h5 className="card-title">KKEM March ST</h5>
        <p className="card-text">Click details to view complete list of students</p>
        <Button
          component={Link}
          to="/sst"
          variant="contained"
          style={{ width: "50%", borderRadius: "11px", backgroundColor: '#009B81', color: 'white', marginTop: '10px', alignSelf: 'center' }}
        >
          Details
        </Button>
        
      </div>
     </div>
          </div>
        </div>
{/* till here */}

{/* here */}
<div className="col-sm-6">
          <div className="card mb-4" >
          <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', width: '100%', margin: '',border:"1.6px solid black" }}>
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png" className="img-fluid" alt="Nature" style={{ width: '89.4%', objectFit: 'cover' }} />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h5 className="card-title">KKEM March .NET</h5>
        <p className="card-text">Click details to view complete list of students</p>
        <Button
          component={Link}
          to="/sst"
          variant="contained"
          style={{ width: "50%", borderRadius: "11px", backgroundColor: '#009B81', color: 'white', marginTop: '10px', alignSelf: 'center' }}
        >
          Details
        </Button>
        
      </div>
     </div>
          </div>
        </div>
{/* till here */}

      </div>
    </div>
  );
}

export default AdminDash;