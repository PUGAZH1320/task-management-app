import React from "react";
import { useDispatch } from "react-redux";
import { updateName,updateEmail,updatePassword,updatePassword2 } from "../slice/userSlice";
import { useSelector } from 'react-redux'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ReactComponent as ReactLogo } from "../../src/assets/logo.svg";
import { Link, Typography } from "@mui/material";
import axios from 'axios';
import { useState } from "react";




const SignUp = ({handleChange}:{handleChange:any}) => {
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state.user);
  const [form, setForm] = useState<any>(data);
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateName(e.target.value));
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateEmail(e.target.value));
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePassword(e.target.value));
    };
    const handleChangePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePassword2(e.target.value));
    };
    const handleSubmit =  (e:any) => {
      e.preventDefault();
    
    axios.post('/api/users', data)
        .then((response) => {
            console.log(response);
            console.log(form);
            setForm({})

        })
        .catch((error) => {
            console.error(error);
        });
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
              name='name'
              onChange={handleChangeName}
              fullWidth
              required
              sx={{ m: "5px" }}
            />
            <TextField
              label="E-mail"
              placeholder="Enter Email"
              type="email"
              name='email'
              onChange={handleChangeEmail}
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
              onChange={handleChangePassword}
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
              onChange={handleChangePassword2}
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
