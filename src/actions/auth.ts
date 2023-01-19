import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "./types";

import { Dispatch } from "redux";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface Error {
  msg: string;
}

export const loadUser = () => async (dispatch: Dispatch) => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type:USER_LOADED,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type:AUTH_ERROR
        })
    }
};

export const register = (data: RegisterData) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(data);

  try {
    const res = await axios.post<{ token: string }>("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch<any>(loadUser())
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: Error) =>
        dispatch<any>(setAlert(error.msg, "danger"))
      );
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};



export const login = (email:string, password:string) => async (dispatch: Dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({email, password});
  
    try {
      const res = await axios.post<{ token: string }>("/api/auth", body, config);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch<any>(loadUser())
    } catch (err: any) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error: Error) =>
          dispatch<any>(setAlert(error.msg, "danger"))
        );
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
  

  export const logout = () =>  (dispatch:Dispatch) => {
    dispatch({ type:LOGOUT})
  }
