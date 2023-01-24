import axios from "axios";
import { setAlert } from "./alert";
import { DELETE_TASK, GET_PROFILE, PROFILE_ERROR,DELETE_ERROR } from "./types";
import { Dispatch } from 'redux'


interface Error {
    msg: string;
  } 

export const getCurrentProfile = () => async (dispatch:Dispatch) => {
    try {
        const res = await axios.get('/api/task/me')

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        
    } catch (err:any) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status}
        })
        
    }
}
export const getAllProfile = () => async (dispatch:Dispatch) => {
    try {
        const res = await axios.get('/api/task/all')

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        
    } catch (err:any) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status}
        })
        
    }
}
export const getAllUserProfile = () => async (dispatch:Dispatch) => {
    try {
        const res = await axios.get('/api/task/alluser')

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        
    } catch (err:any) {
        dispatch({
            type: PROFILE_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status}
        })
        
    }
}

export const createProfile = ( {title,markdown,tagIds}:any) => async (dispatch:Dispatch)=> {
    try{
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const body = JSON.stringify({title,markdown,tagIds});

        const res = await axios.post('/api/task', body, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    }catch (err:any) {
        const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: Error) =>
        dispatch<any>(setAlert(error.msg, "danger"))
      );
    }
        dispatch({
            type: PROFILE_ERROR,
            payload:{ msg: err.response.statusText, status: err.response.status}
        })
    }
} 

export const deleteTask = (id:any)=> async (dispatch:Dispatch) => {
    try{
        const res = await axios.delete(`api/task/${id}`);
        dispatch({
            type:DELETE_TASK,
            payload: id
        });

        dispatch<any>(setAlert('Task Removed', 'success'))
    }catch (err:any) {
        dispatch({
            type: DELETE_ERROR,
            payload: {msg: err.response.statusText, status:err.response.status}
        })
    }
}