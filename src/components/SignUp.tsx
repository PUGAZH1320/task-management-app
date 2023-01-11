import React from "react";

import {useState } from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as ReactLogo } from "../../src/assets/logo.svg";
import { Link, Typography } from "@mui/material";
import axios from 'axios';



const SignUp = ({handleChange}:{handleChange:any},{setAlert}:{setAlert:any}) => {

    const [formData, setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2} = formData;

    const onChange = (e:any) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const onSubmit =async (e:any) => {
        e.preventDefault()
        if(password!== password2) {
            setAlert("password not matched",'danger')
        }else{
           const newUser ={
            name,
            email,
            password
           }

           try{
            const config ={
                headers:{
                    'Content-Type':'application/json'
                }
            }

            const body = JSON.stringify(newUser);
            const res = await axios.post('http://localhost:5000/api/users',body,config);
            console.log(res.data);
            setFormData({
                name:'',
                email:'',
                password:'',
                password2:''
            })
           }catch(err){
            
           }
        }
        
    };

    

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "0px auto",
  };
  return (
    <>
      <Grid>
        <Paper  style={paperStyle}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{ bgcolor: "white", height: "50px", width: "50%" }}
              variant="rounded"
            >
              <ReactLogo />
            </Avatar>
            <h1 >Sign Up</h1>
            <Typography variant="caption" gutterBottom>Please fill this form to create an account!</Typography>
            <TextField
              label="Name"
              placeholder="Enter your Name"
              variant="outlined"
              value={name}
              name='name'
              onChange={e => onChange(e)}
              fullWidth
              required
              sx={{ m: "5px" }}
            />
            <TextField
              label="E-mail"
              placeholder="Enter Email"
              type="email"
              value={email}
              name='email'
              onChange={e => onChange(e)}
              variant="outlined"
              fullWidth
              required
              sx={{ m: "5px" }}
            />
            <TextField
              label="Password"
              placeholder="Enter Password"
              type="Password"
              value={password}
              name='password'
              onChange={e => onChange(e)}
              variant="outlined"
              fullWidth
              required
              sx={{ m: "5px" }}
            />
            <TextField
              label="Confirm Password"
              placeholder="Re-Enter Password"
              type="Password"
              value={password2}
              name='password2'
              onChange={e => onChange(e)}
              variant="outlined"
              fullWidth
              required
              sx={{ m: "5px" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={onSubmit}
              sx={{ m: "20px" }}
            >
              Sign Up
            </Button>
            <Typography>Already have an account?
                <Link onClick={()=> handleChange('event',0)}>Sign In
                </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default SignUp;
