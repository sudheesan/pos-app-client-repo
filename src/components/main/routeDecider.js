import React , { Component } from 'react';
import cookies from '../../utils/cookie.util';
import Login from '../login/Login';
const withLoginAuthenticated = (WrapperContent) => {

    return class extends Component {

        render() {
            const usrNameCookie = cookies.getCookie('userName');
            if (usrNameCookie) {
                return (<WrapperContent {...this.props} ></WrapperContent>)
            } else {
                return (<Login></Login>)
            }
        }
    }

} 

export default withLoginAuthenticated;