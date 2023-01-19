import { GET_PROFILE, PROFILE_ERROR } from './../actions/types';

interface InitialState {
profile: any | null;
profiles: any[];
repos: any[];
loading: boolean;
error: any;
}

const initialState: InitialState = {
profile: null,
profiles:[],
repos: [],
loading: true,
error:{}
}

interface Action {
type: string;
payload: any;
}

const profile = (state= initialState,action: Action) : InitialState => {
const { type, payload} = action;

switch (type) {
    case GET_PROFILE:
        return{
            ...state,
            profile:payload,
            loading: false
        }
    case PROFILE_ERROR:
        return{
            ...state,
            error: payload,
            loading:false
        }
    default:
        return state;
}
}

export default profile;



