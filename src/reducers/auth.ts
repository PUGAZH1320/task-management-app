import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "../actions/types";

interface InitialState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: any;
}

const initialState: InitialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

interface Action {
  type: string;
  payload: any;
}

export default function auth(
  state = initialState,
  action: Action
): InitialState {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
        return {
            ...state,
            isAuthenticated:true,
            loading:false,
            user:payload
        }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
