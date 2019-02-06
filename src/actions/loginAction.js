import auth from '../api/login.api';
import ActionAlert from '../components/notification/ActionNotifier'
import cookies from '../utils/cookie.util';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_ISLOGIN_SUCCESS = 'SET_ISLOGIN_SUCCESS';

export const loginSuccess = login => ({
  type: LOGIN_SUCCESS,
  payload: login
});

export const setIsLoginSuccess = login => ({
  type: SET_ISLOGIN_SUCCESS,
  payload: login
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error }
});

export const loginStart = () => ({
  type: LOGIN_START,
  payload: true
})


export function login(credentials) {
  return dispatch => {
    dispatch(loginStart());
    return auth.login(credentials)
      .then(
        response => response,
        (error) => {
          throw error
        }
      )
      .then((json) => {
        cookies.addNewCookie('userName', json.data.auth.userName);
        cookies.addNewCookie('token', json.data.auth.authToken);
        dispatch(loginSuccess(json.data.auth));
      })
      .catch((error) => {
        ActionAlert.createNotification({ type: 'error', notification: error.response.data.message })();
        dispatch(loginFailure(error))
      });
  };
}