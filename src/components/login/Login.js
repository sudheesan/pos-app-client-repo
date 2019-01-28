import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsLoginSuccess } from '../../actions/loginAction'
import auth from '../../api/login.api'

class Login extends Component {

    constructor(props) {
        super(props);
        this.go = this.go.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setIsLoginSuccess(true))
    }

    go(e) {
        e.preventDefault()
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        auth.login({ userName: username, password: password }).then((res) => {
            localStorage.setItem("login", JSON.stringify({ isLoggedIn: true }));
            this.props.history.push('/currentOrderList');
            this.props.dispatch(setIsLoginSuccess(false));

        })
        .catch((error) => {
            console.log(error, "error")
        })

    }

    render() {
        return (
            <form className="login" onSubmit={this.go.bind(this)}>
                <h3>Sign in</h3>
                <input type="text" ref="username" placeholder="enter you username" />
                <input type="password" ref="password" placeholder="enter password" />
                <input type="submit" value="Login" />
            </form>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.loginReducer.auth
});

export default connect(mapStateToProps)(Login);