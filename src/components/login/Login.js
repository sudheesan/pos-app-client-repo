import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsLoginSuccess, loginStart } from '../../actions/loginAction'
import auth from '../../api/login.api';
import cookies from '../../utils/cookie.util';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class Login extends Component {

    componentDidMount() {
        const usrNameCookie = cookies.getCookie('userName');
        this.props.dispatch(setIsLoginSuccess(true));
        if (usrNameCookie) {
            this.props.history.goBack();
        }
    }

    createNotification(alert) {
        return () => {
            switch (alert.type) {
                case 'success':
                    NotificationManager.success(alert.notification, 'Login', 2000);
                    break;
                case 'error':
                    NotificationManager.error(alert.notification, 'Login', 2000);
                    break;
                default:
                    break;
            }
        };
    }

    login(e) {
        this.props.dispatch(loginStart());
        e.preventDefault()
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        auth.login({ userName: username, password: password }).then((res) => {

            cookies.addNewCookie('userName', res.data.auth.userName);
            cookies.addNewCookie('token', res.data.auth.authToken);
            this.props.dispatch(setIsLoginSuccess(false));

        })
            .catch((error) => {
                console.log(error.response);
                this.createNotification({ type: 'error', notification: error.response.data.message })();
            })

    }

    render() {
        return (

            <div className='login-container'>

                <form className="login" onSubmit={this.login.bind(this)}>
                    <h1 className="login-title">POS</h1>
                    <BlockUi blocking={this.props.isAuthenticating}>
                        <input required type="text" ref="username" className="login-input" placeholder="enter you username" />
                        <input required type="password" ref="password" className="login-input" placeholder="enter password" />
                        <input type="submit" className='login-button' value="Login" />
                    </BlockUi>
                </form>

                <NotificationContainer />
            </div>

        )
    }
}
const mapStateToProps = state => ({
    isAuthenticating: state.loginReducer.isAuthenticating
});

export default connect(mapStateToProps)(Login);