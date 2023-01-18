import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as ReactLogo } from "../../src/assets/logo.svg";
import { Link, Typography } from "@mui/material";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from 'prop-types'




const SignUp = ({setAlert,register,isAuthenticated}:any) => {
  let navigate = useNavigate();
  const handleClick =(e:any) => {
    navigate('/')
};

  const [formData, setFormData] = useState<any>({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const {name,email,password, password2} = formData;
  const onChange = (e:any) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
    const handleSubmit =  (e:any) => {
      e.preventDefault();

      if (password!== password2) {
        setAlert('Passwords do not match','danger')
        console.log(formData)
      }
      else{
        register({name, email, password})
        console.log('SUCCESS')
    };
    
      }
    
    

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "0px auto",
  };

  if(isAuthenticated) {
    navigate('/dashboard')
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
            <h1 >Sign Up</h1>
            <Typography variant="caption" gutterBottom>Please fill this form to create an account!</Typography>
            <TextField
              label="Name"
              placeholder="Enter your Name"
              variant="outlined"
              name='name'
              value={name}
              onChange={e => onChange(e)}
              fullWidth
              required
              sx={{ m: "5px" }}
            />
            <TextField
              label="E-mail"
              placeholder="Enter Email"
              type="email"
              name='email'
              value={email}
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
              name='password'
              value={password}
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
              name='password2'
              value={password2}
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
              onClick={handleSubmit}
              sx={{ m: "20px" }}
            >
              Sign Up
            </Button>
            <Typography>Already have an account?
                <Link onClick={handleClick}>Sign In
                </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps =  (state:any) => ({
  isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps,{setAlert, register})(SignUp);
