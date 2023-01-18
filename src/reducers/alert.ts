import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

interface Alert {
id: number;
msg: string;
alertType: string;
}

interface Action {
type: string;
payload: any;
}

const initialState: Alert[] = [];

export default function alert (state = initialState, action: Action): Alert[] {
const { type, payload } = action;
switch(type) {
case SET_ALERT:
return[...state, payload];
case REMOVE_ALERT:
return state.filter(alert => alert.id !== payload);
default:
return state;
}
}