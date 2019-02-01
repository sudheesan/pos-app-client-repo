import { LOGIN_SUCCESS, LOGIN_FAILURE, SET_ISLOGIN_SUCCESS , LOGIN_START } from '../actions/loginAction'
const initialState = {
    auth: {},
    isLogin: false,
    isAuthenticating : false,
}
const loginreducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_START:
            return{
                ...state,
                isAuthenticating : action.payload
            }
        case LOGIN_SUCCESS:

            return {
                ...state,
                isAuthenticating : false,
                auth: action.payload,
                isLogin: action.payload
            }

        case LOGIN_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload.error,
                isAuthenticating : false
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

