import auth from '../api/login.api'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_ISLOGIN_SUCCESS = 'SET_ISLOGIN_SUCCESS';

export const loginSuccess = login => ({
  type: LOGIN_SUCCESS,
  payload:  login 
});

export const setIsLoginSuccess = login =>({
    type:LOGIN_SUCCESS,
    payload:login
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error }
});

export const loginStart = () =>({
  type:LOGIN_START,
  payload:true
})


export function login(credentials) {
  return dispatch => {
    return auth.login(credentials)
      .then(
        response => response,
        error => console.log('An error occurred.', error))
      .then(json => {
        dispatch(loginSuccess(json.data.auth));
      })
      .catch(error => dispatch(loginFailure(error)));
  };
}