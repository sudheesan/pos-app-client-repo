import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_ISLOGIN_SUCCESS } from '../actions/loginAction'
const initialState = {
    auth: {},
    isLogin: false
}
const loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:

            return {
                ...state,
                auth: action.payload,
                isLogin: false

            }

        case LOGIN_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case SET_ISLOGIN_SUCCESS:

            return {
                ...state,
                isLogin: action.payload
            }


        default:
            return state;
    }
}
export default loginreducer;

