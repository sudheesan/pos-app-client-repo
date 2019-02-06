import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentOrderList from '../order/CurrentOrderList';
import Login from '../login/Login';
import NavBar from '../nav/NavBar';
import withLoginAuthenticated from './routeDecider';
import 'react-notifications/lib/notifications.css';

const MainRoute = () => (<Router>
    <Switch>
        <Route exact path="/" component={withLoginAuthenticated(CurrentOrderList)} />
        <Route path="/login" component={Login} />
        <Route path="/currentOrderList" component={withLoginAuthenticated(CurrentOrderList)} />
    </Switch>
</Router>);

class Main extends Component {


    render() {
        if (this.props.isLogin) {
            return (
                <div>
                    <MainRoute></MainRoute>
                    <NotificationContainer />
                </div>

            );
        } else {
            return (
                <div>
                    <NavBar {...this.props}></NavBar>
                    <MainRoute></MainRoute>
                    <NotificationContainer />
                </div>

            );
        }


    }
}

const mapStateToProps = state => ({
    isLogin: state.loginReducer.isLogin
});


export default connect(mapStateToProps)(Main);