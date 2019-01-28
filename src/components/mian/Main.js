import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentOrderList from '../order/CurrentOrderList';
import Login from '../login/Login';
import NavBar from '../nav/NavBar';

const MainRoute = () => (<Router>
    <Switch>
        <Route exact path="/" component={CurrentOrderList} />
        <Route path="/login" component={Login} />
        <Route path="/currentOrderList" component={CurrentOrderList} />
    </Switch>
</Router>);

class Main extends Component {


    render() {
        if (this.props.isLogin) {
            return (
               
             <MainRoute></MainRoute>
               
            );
        } else {
            return (
                <div>
                    <NavBar {...this.props}></NavBar>
                    <MainRoute></MainRoute>
                </div>

            );
        }


    }
}

const mapStateToProps = state => ({
    isLogin: state.loginReducer.isLogin
});


export default connect(mapStateToProps)(Main);