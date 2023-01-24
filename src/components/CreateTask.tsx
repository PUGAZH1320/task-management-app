import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from  "@mui/material";
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { createProfile } from '../actions/profile';

const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "0px auto",
  };

const CreateTask = ( {createProfile}:any) => {
    const [formData, setFormData] = useState({
        title:'',
        markdown:'',
        tagIds:''
    })

    const navigate=useNavigate()

    const { title, markdown, tagIds} = formData;

    const onChange = (e:any)=> setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit = (e:any) => {
        e.preventDefault();
        createProfile({title,markdown,tagIds})
        navigate('/dashboard')
    }        
        


  return (
   
    <>
    <Logout/>
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

          <TextField
            label="Task Name"
            placeholder="Enter Task Name"
            type="text"
            name="title"
            value={title}
            onChange={e => onChange(e)}
            variant="outlined"
            fullWidth
            required
            sx={{ m: "5px" }}
          />
          <TextField
            label="Remarks"
            placeholder="Enter Updates"
            type="text"
            name="markdown"
            value={markdown}
            onChange={e => onChange(e)}
            variant="outlined"
            fullWidth
            required
            sx={{ m: "5px" }}
          />
          <Typography variant="caption" gutterBottom>Please seperate tags using comma</Typography>
          <TextField
            label="Tags"
            placeholder="Enter Tags"
            type="text"
            name="tagIds"
            value={tagIds}
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
            Save
          </Button>
        </Grid>
      </Paper>
    </Grid>
  </>
  )
}


CreateTask.propTypes = {
 createProfile: PropTypes.func.isRequired,
}

export default connect(null, {createProfile})(CreateTask)
