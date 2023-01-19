import axios from "axios";
// import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import { Dispatch } from 'redux'

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