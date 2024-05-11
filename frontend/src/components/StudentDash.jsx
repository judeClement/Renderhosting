import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Grid, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import '../css/StudentDash.css';
import Select from '@mui/material/Select';
import { useState } from 'react';
// import axios from 'axios';
import axiosInstance from '../axiosinterceptor';


const StudentDash = () => {

    const [batch, setBatch] = useState("N/A");

    // handle change for dropdown
    const handleChange = (e) => {
        setBatch(e.target.value);
        setUsers({ ...users, batch: e.target.value });
    };


    //phase 2
    const [users, setUsers] = useState({});
    //form disable
    const [submitted, setSubmitted] = useState(false);
    const inputHandler = (e) => {
        if (!submitted) {
            setUsers({ ...users, [e.target.name]: e.target.value })
        }
        // console.log(users);
    }


    const addHandler = () => {
        // Validation for phone number
        if (!/^\d{10}$/.test(users.phone)) {
            alert("Phone number must be 10 digits.");
            return;
        }

        
        axiosInstance.post("/api/add", users)
            .then((res) => {
                if (res.data.error) {
                    alert(res.data.error); // Show error message if the form submission fails
                } else {
                    alert(res.data.message); // Show success message if the form is submitted successfully
                    setSubmitted(true);
                }
            })
            .catch((err) => {
                console.error("Error adding user:", err);
                alert("Unable to proceed"); // Show a generic error message for any unexpected errors
            });
    };



    return (

        <div className='page' style={{ height: '100vh', marginTop:'-40px'}}>
        
    
        <div className='form' style={{marginTop:'40px'}}>       

            <Card className='teel' style={{ maxWidth: 450, margin: "40px auto", padding: "10px 10px",}}>
                <CardContent>
                    < Typography gutterBottom variant='h4' style={{ padding: "4px auto", color: "white" }}>Exit Form</Typography>

        

                    <form >

                        <div className='g1'>
                            <Grid container spacing={1} className='grid'>
                                <Grid xs={12} sm={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} id="outlined-basic" placeholder="Enter name" label="Name" name='name' variant="outlined" fullWidth required onChange={inputHandler} disabled={submitted} value={submitted ? users.name || '' : users.name || ''} />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} type="number" id="outlined-basic" placeholder="Enter phone" label="Phone" name='phone' variant="outlined" fullWidth required onChange={inputHandler} disabled={submitted} value={submitted ? users.phone || '' : users.phone || ''} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} type='email' id="tlined-basic" placeholder="Enter Email" label="Email" name='email' variant="outlined" fullWidth required onChange={inputHandler} disabled={submitted} value={submitted ? users.email || '' : users.email || ''} InputProps={{ style: { color: 'white' } }} />
                                </Grid>




                                <Grid xs={12} item>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DatePicker
                                            label={
                                                <Typography style={{ color: 'white' }}>DOB</Typography>
                                            }
                                            sx={{ width: '100%', color: 'white' }}
                                            required name='dob' onChange={(date) => inputHandler({ target: { name: 'dob', value: date } })} disabled={submitted} value={submitted ? users.dob || null : null}

                                            inputProps={{ style: { color: 'white' } }}

                                        />
                                    </LocalizationProvider>
                                </Grid>


                                <Grid xs={12} item>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ color: 'white' }}>Batch</InputLabel>
                                        <Select name='batch'
                                            value={batch}
                                            placeholder="Batch"

                                            onChange={handleChange}
                                            disabled={submitted}

                                        >
                                            <MenuItem value={"N/A"}>N/A</MenuItem>
                                            <MenuItem value={"KKEM March CSA"}>KKEM March CSA</MenuItem>
                                            <MenuItem value={"KKEM March DSA"}>KKEM March DSA</MenuItem>
                                            <MenuItem value={"KKEM March MLAI"}>KKEM March MLAI</MenuItem>
                                            <MenuItem value={"KKEM March FSD"}>KKEM March FSD</MenuItem>
                                            <MenuItem value={"KKEM March ST"}>KKEM March ST</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField InputLabelProps={{ className: 'text' }} id="outlined-basic" placeholder="Enter Gender" label="Gender" variant="outlined" name='gender' fullWidth required onChange={inputHandler} disabled={submitted} value={submitted ? users.gender || null : null} />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="button" variant='contained' color="primary" fullWidth onClick={addHandler} disabled={submitted}>Submit</Button>


                                </Grid>
                            </Grid>

                        </div>
                    </form>
                  

                </CardContent>
            </Card>
        </div>
        </div>
        

    )
}


export default StudentDash

