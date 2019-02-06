import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsLoginSuccess ,login} from '../../actions/loginAction'
import cookies from '../../utils/cookie.util';
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

    login(e) {
        e.preventDefault()
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.dispatch(login({ userName: username, password: password }))
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
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticating: state.loginReducer.isAuthenticating
});

export default connect(mapStateToProps)(Login);