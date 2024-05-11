
import React, {useState} from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link ,useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import socialLogos from '../images/Social-Icons.png';
import logo from '../images/LOGO_ICTAK.png';
import {MDBFooter,MDBContainer,MDBCol,MDBRow,MDBIcon } from 'mdb-react-ui-kit';

const Home = () => {
  const navigate = useNavigate();

  const addHandler = ()=>{
    navigate('/studentlog');
  }
    return (  

<div style={{margin:"0px",padding:"0px",borderTop:"0px solid #00a88c",borderRadius:"0px",backgroundColor:"#E7F6FC"}}>

{/* banner */}
<div style={{backgroundColor:"#009B81",backgroundImage:"url('')",justifyContent: 'flex-start',alignItems: 'center',display: 'flex', border: "0px solid white", backgroundSize: 'auto', textAlign: 'center', padding: '10px ',paddingBottom:"20px",paddingRight:"100px",paddingLeft:"100px" }}>

    <Container sx={{ borderRadius: '18px',border: "3px solid #00322a" ,marginTop:"10px", backgroundImage: "url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Sz9LmzxmBjyscquj0/videoblocks-serious-young-businessman-working-on-computer-indoors_svzmrk3wp_thumbnail-1080_01.png')", backgroundSize: '100%', color: 'black', textAlign: 'center', padding: '150px'}}>
        <Typography variant="h2" style={{ fontSize: '36px',margin: '0px 10px 20px 700px' }}>Welcome to ICTAK Exam Registration Portal</Typography>
        <Typography variant="body1" style={{ fontSize: '18px', margin: '0px 10px 20px 700px' }}>Register for exams and track your progress with ease! Gain insights into your performance and stay updated on your exam preparation journey.</Typography>
        <Button variant="contained"
         color="primary"
         onClick={addHandler}
          href="" sx={{  margin: '0px 10px 20px 700px',borderRadius: '20px',backgroundColor: 'teal',padding: '10px 40px','&:hover': { backgroundColor: 'lightblue'},'&:active': { backgroundColor: 'skyblue'},'& .MuiButton-label': { fontSize: '16px',fontWeight: 'bold',}}}>
            Login
            </Button>
    </Container>
{/* <div style={{width: 'calc(50% - 10px)',left: '25%',padding:"10px",border:"2px solid black",position: 'absolute',bottom: '-10px',width: '50%',textAlign: 'center',backgroundColor:"white",borderRadius:"10px"}}><Typography variant='h2' style={{fontSize: '36px',margin:"8px"}}>TRAINING ADVANTAGES</Typography></div> */}
 </div>
 <div class="row" style={{backgroundColor:"#009B81",height:"50px"}}>
  <div class="d-flex justify-content-center align-item-center col-md-12">
    <div class="fixedform_shadow p-4 card" style={{ width: '70rem' }}>
      <h4 class="text-center m-0 pb-4 font-bold register_title">TRAINING ADVANTAGES</h4>
    </div>
  </div>
</div>

{/* cards */}
<div style={{backgroundImage:"url('')", border: "2px solid white", backgroundColor: "", backgroundSize: 'cover', textAlign: 'center', padding: '40px ' }}>
<Box sx={{border:"0px solid white",display: 'flex', gap: 2.8, padding: '40px '}}>
    
<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://kneura.com/wp-content/uploads/2019/08/Learning.gif"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
DEMO CLASSES
</Typography>
<Typography variant="body2" color="text.secondary">
Before enrolling, a free DEMO lesson is provided.
</Typography>
</CardContent>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://cdn.dribbble.com/users/3050354/screenshots/14646894/media/1f31948afd5401c44d4bae934f07641a.gif"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
BACKUP CLASSES</Typography>
<Typography variant="body2" color="text.secondary">
Missed classes are covered with backup classes  
</Typography>
</CardContent>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://cdn.dribbble.com/users/1928646/screenshots/5781055/support.gif"
alt="green iguana" 
// sx={{ width: '100%', height: 'auto' }}
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
TECHNICAL SUPPORT</Typography>
<Typography variant="body2" color="text.secondary">
Connect to technical discussion boards for project help 
</Typography>
</CardContent>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
EVALUATION PROCESS</Typography>
<Typography variant="body2" color="text.secondary">
After the end of the course, each student is assessed
</Typography>
</CardContent>
</CardActionArea>
</Card>

</Box> 

<Box sx={{border:"0px solid white",display: 'flex', gap: 2.8, padding: '40px '}}>
    
<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://cdn.dribbble.com/users/3960415/screenshots/8995365/media/b0b5dddc53e15f8eb666502c9c3cb5d4.gif"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
REAL TIME PROJECTS
</Typography>
<Typography variant="body2" color="text.secondary">
Gain world class exposure with our real time projects</Typography>
</CardContent>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://media1.tenor.com/images/2817e303f7e32ad075163ed1383fb754/tenor.gif?itemid=14118674"
alt="green iguana" 

/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
HR SESSIONS</Typography>
<Typography variant="body2" color="text.secondary">
Before you join , you recieve a complimentary HR session
</Typography>
</CardContent>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://cdn.dribbble.com/users/2520294/screenshots/7269423/alaminxyz.gif"
alt="green iguana" 
// sx={{ width: '100%', height: 'auto' }}
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
JOB ORIENTED COURSES
</Typography>
<Typography variant="body2" color="text.secondary">
Offers career focused training with hand-picked job orientation</Typography>
</CardContent>
</CardActionArea>
</Card>

<Card sx={{ maxWidth: 400, borderRadius: 4.5 }}>
<CardActionArea>
<CardMedia
component="img"
height="140"
image="https://www.associationpublications.com/wp-content/uploads/2021/04/Interview-1.gif"
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
INTERVIEW TIPS</Typography>
<Typography variant="body2" color="text.secondary">
our HR team provides you with interview tips and sessions</Typography>
</CardContent>
</CardActionArea>
</Card>

</Box> 

</div>
{/* carousel */}
<div style={{ border: "1px solid white", backgroundColor: "#A5CFE3", backgroundSize: 'contain', textAlign: 'center', padding: '60px ' }}>
  <Typography style={{margin:"0 0 50px 0",fontSize:"40px"}}>Our Courses</Typography>
<div id="carouselExampleCaptions" class="carousel slide">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://yourengineer.in/wp-content/uploads/2021/07/PD-Leverage-MERN-Stack-for-building-efficient-websites-Thumbnail.png" class="d-block w-80 mx-auto" style={{width:"48%", borderRadius:"25px"}} alt="..."/>
      <div class="d-none d-md-block" style={{marginTop:"45px",fontSize:"25px",color:" #21292d"}}>
        <h2>MERN  Stack</h2>
        <p> Learn to build dynamic web applications using MongoDB, Express.js, React, and Node.js, covering the entire web development process from front to back.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://image.freepik.com/free-vector/cyber-security-illustration-concept-with-people_23-2148530634.jpg" class="d-block w-80 mx-auto" style={{ width: '50%', borderRadius:"25px" }} alt="..."/>
      <div class="d-none d-md-block" style={{marginTop:"45px",fontSize:"25px",color:" #21292d"}}>
        <h2>Cyber Security</h2>
        <p>Learn to protect digital systems, networks, and data from cyber threats and attacks through comprehensive training in cybersecurity principles, tools, and best practices.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://wallpaperbat.com/img/392227-what-is-data-science-dataquest.jpg" class="d-block w-80 mx-auto" style={{ width: '59%', borderRadius:"25px" }} alt="..."/>
      <div class="d-none d-md-block" style={{marginTop:"45px",fontSize:"25px",color:" #21292d"}}>
        <h2>Data Science</h2>
        <p>Dive into the world of data analysis and machine learning, exploring techniques to extract insights from large datasets and make data-driven decisions across various industries.</p>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src="https://p.kindpng.com/picc/s/13-132027_-net-framework-hd-png-download.png" class="d-block w-80 mx-auto" style={{ width: '45%', borderRadius:"25px" }} alt="..."/>
      <div class="d-none d-md-block" style={{marginTop:"45px",fontSize:"25px",color:" #21292d"}}>
        <h2>.NET Devoloper</h2>
        <p>Gain expertise in developing robust and scalable applications using the .NET framework, including C#, ASP.NET, and other related technologies, suitable for enterprise-level software development.</p>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src="http://blog.mymeanstackdeveloper.com/wp-content/uploads/2018/08/Mean-Stack-Development.png" class="d-block w-80 mx-auto" style={{ width: '53.5%', borderRadius:"25px" }} alt="..."/>
      <div class="d-none d-md-block" style={{marginTop:"45px",fontSize:"25px",color:" #21292d"}}>
        <h2>MEAN Stack</h2>
        <p>Explore the components of the MEAN stack - MongoDB, Express.js, Angular, and Node.js - and discover how to build modern, full-stack web applications efficiently and effectively.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="https://img.graphicsurf.com/2020/10/software-testing-vector-free-illustration.jpg" class="d-block w-80 mx-auto" style={{ width: '50%', borderRadius:"25px" }} alt="..."/>
      <div class="d-none d-md-block" style={{marginTop:"45px",fontSize:"25px",color:" #21292d"}}>
        <h2>Software Testing</h2>
        <p>Master the art of ensuring software quality and reliability by learning various testing methodologies, tools, and techniques to detect and fix bugs and defects in software applications.</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
{/* video links */}
<div style={{backgroundColor: "white", backgroundSize: '100%', textAlign: 'center', padding: '40px ' }}>
  <MDBFooter className='text-center text-white' style={{ margin:"40px",backgroundColor: '#45637d', borderRadius:"5px" }}>
    <MDBContainer className='p-4'>
      <section>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol lg='6' style={{ borderRight: '1px solid white' }}>
            <Typography style={{ margin: "130px 0 20px 0", fontSize:"40px", fontFamily:"sans-seriff", color: "white" }}>More About Us</Typography>
          </MDBCol>
          <MDBCol lg='6' style={{ borderLeft: '1px solid red',padding:"20px" }}>
            <div className='ratio ratio-16x9'>
              <iframe
                className='shadow-1-strong rounded'
                src='https://www.youtube.com/embed/fQ8MWl2jji8?feature=shared'
                title='YouTube video'
                allowFullScreen
                data-gtm-yt-inspected-2340190_699='true'
                id='388567449'
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  </MDBFooter>
</div>

{/* footer */}
<footer style={{ border: "1px solid white", backgroundColor: 'white', padding: '50px', margin: "0px", textAlign: 'center' }}>
<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-b#etween p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>   facebook instagram linkedin
        </div>

        <div>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                ICT Academy of Kerala
              </h6>
              <p>
              ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            {/* <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                G1, Ground Floor, Thejaswini, Technopark Campus Thiruvananthapuram, Kerala, India - 695 581 Office: +91 471 270 0811
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@ictkerala.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +91 75 940 51437
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +91 471 270 0811
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright :&nbsp;
        <a className='text-reset fw-bold' href='https://ictkerala.org/'>
        &copy; 2024 ICT Academy of Kerala 
        </a>
      </div>
    </MDBFooter>
</footer>

</div>
    );
};

export default Home;












//









{/* <   img src={socialLogos} alt="Logo" style={{ height: '200px' }}/> */}
// https://cdn.dribbble.com/users/3050354/screenshots/14646894/media/1f31948afd5401c44d4bae934f07641a.gif
// https://cdn.dribbble.com/users/2520294/screenshots/7269423/alaminxyz.gif
// https://assets.materialup.com/uploads/1abb8bf1-faa9-4a2d-bda2-1e423c32204d/preview.gif
// https://i.pinimg.com/originals/91/16/8b/91168b4873f6659b3e9fdfe4b89cd864.gif
// https://tse1.mm.bing.net/th?id=OIP.1hnU3mIszexTi52541vvkwHaEK&pid=Api&P=0&h=180
// https://bigdataanalyticsnews.com/wp-content/uploads/2022/04/MEAN-Stack-Development.jpg
// https://tse1.mm.bing.net/th?id=OIP.poGYkLUk-4PJUUzrFqa3CQHaDk&pid=Api&P=0&h=180




// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// export default function App() {
//   return (

//   );
// }






//



// import React from 'react';


// export default function App() {
//   return (

//   );
// }

{/* <Typography variant="body1">&copy; 2024 ICTAK Exam Registration Portal</Typography> */}

  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>

  </div > */}

  
      {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        All Rights Resesrved © 2020
        <a className='text-white' href=''>
        &nbsp;ICTAK
        </a>
      </div> */}