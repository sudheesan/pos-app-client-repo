import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsLoginSuccess } from '../../actions/loginAction'
import auth from '../../api/login.api';
import cookies from '../../utils/cookie.util'
class Login extends Component {

    constructor(props) {
        super(props);
        this.go = this.go.bind(this);
    }

    componentDidMount() {
        const usrNameCookie = cookies.getCookie('userName');
        this.props.dispatch(setIsLoginSuccess(true));
        if (usrNameCookie) {
            this.props.history.goBack();
        }
    }

    go(e) {
        e.preventDefault()
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        auth.login({ userName: username, password: password }).then((res) => {
            cookies.addNewCookie('userName', res.data.auth.userName);
            cookies.addNewCookie('token', res.data.auth.authToken);
            this.props.history.push('/currentOrderList');
            this.props.dispatch(setIsLoginSuccess(false));

        })
            .catch((error) => {
                console.log(error, "error")
            })

    }

    render() {
        return (
            <div className='login-container'>
                <form className="login" onSubmit={this.go.bind(this)}>
                    <h1 className="login-title">POS</h1>
                    <input type="text" ref="username" className="login-input" placeholder="enter you username" />
                    <input type="password" ref="password" className="login-input" placeholder="enter password" />
                    <input type="submit" className='login-button' value="Login" />
                </form>
            </div>

        )
    }
}



export default connect()(Login);