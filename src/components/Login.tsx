import React from "react";
import {useState} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as ReactLogo } from "../../src/assets/logo.svg";
import { Link, Typography } from "@mui/material";



const Login = ({handleChange}:{handleChange:any}) => {

    const [userData, setUserData]=useState({
        email:'',
        password:''
        
    });

    // const {email,password} = userData;

    const onChange = (e:any) => {
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    const onSubmit =async (e:any) => {
        
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
            <h1>Sign In</h1>

            <TextField
              label="E-mail"
              placeholder="Enter Email"
              type="email"
              name="email"
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
              name="password"
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
              fullWidth
              sx={{ m: "20px" }}
            >
              Sign In
            </Button>
            <Typography>
                <Link>Forget Password?
                </Link>
            </Typography>
            <Typography>Do you have an account?
                <Link onClick={()=> handleChange('event',1)}>Sign Up
                </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
