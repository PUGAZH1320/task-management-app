import React from "react";
import {useState} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as ReactLogo } from "../../src/assets/logo.svg";
import {useNavigate} from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { adminlogin } from "../actions/auth";





const AdminLogin = ({adminlogin, isAuthenticated}:any) => {
  let navigate = useNavigate();
    const [userData, setUserData]=useState({
        email:'',
        password:''
        
    });

    const {email,password} = userData;

    const onChange = (e:any) => {
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    const onSubmit =(e:any) => {
      e.preventDefault();
      adminlogin(email, password)
      if (isAuthenticated) {
        return navigate('/admindashboard')
      }
        
    };

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "0px auto",
  };

  if(isAuthenticated) {
    navigate('/admindashboard')
 }

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
            <h1>Admin Login</h1>

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
              onClick={e => onSubmit(e)}
              fullWidth
              sx={{ m: "20px" }}
            >
              Sign In
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

AdminLogin.propTypes = {
  adminlogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps =  (state:any) => ({
isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{adminlogin})(AdminLogin);
