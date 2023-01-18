import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";
import { Dispatch } from "redux";

interface Alert {
  id: string;
  msg: string;
  alertType: string;
}

interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: Alert;
}

export const setAlert =
  (msg: string, alertType: string, timeout = 5000) => (dispatch: Dispatch) => {
    const id = uuidv4();
    dispatch<SetAlertAction>({
      type: SET_ALERT,
      payload: { id, msg, alertType },
    });

    setTimeout(()=>dispatch({ type: REMOVE_ALERT,payload: id}), timeout)
  };
