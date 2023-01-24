import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getAllUserProfile} from '../actions/profile';
import Logout from './Logout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../actions/profile';

const AdminDashboard = ({getAllUserProfile, adminauth,deleteTask, profile}:any) => {
    useEffect(()=> {
        getAllUserProfile();
        // eslint-disable-next-line
    },[])
    const data = (profile.profile)

    const user = data?.map((task:any) => (
      task.user

    ))
    // console.log(user)
    const name = user?.map((task:any) => (
      task.name
      ))
    console.log(name)

    const navigate = useNavigate()

    


    data && data.map((task:any) => (
      <div>title:{task.title} Remark:{task.markdown} Tags:{task.tagIds[0]}</div>
    ))
  return (
    <>
    
    <h3>All Task details</h3>
    <Button onClick={()=> navigate('/create-task')} variant="outline-primary">
              Create
          </Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell align="right">Remarks</TableCell>
            <TableCell align="right">Tags</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">
              Name
            </TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((task:any) => (
              
            <TableRow
              key={task._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {task.title}
              </TableCell>
              <TableCell align="right">{task.markdown}</TableCell>
              <TableCell align="right">{task.tagIds.join()}</TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">
              <Button onClick={()=> navigate('/edit-task')} variant="outline-secondary">
              EDIT
          </Button>
              </TableCell>
              <TableCell align="right">
              <Button onClick={()=>deleteTask()} variant="outline-danger">
              Delete
          </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
    <Logout/>
    

    </>
  )
}

AdminDashboard.propTypes ={
    getAllUserProfile: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    adminauth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state:any) => ({
    adminauth: state.auth,
    profile:state.profile
})

export default connect(mapStateToProps,{getAllUserProfile,deleteTask})(AdminDashboard)
