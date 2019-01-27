import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrentOrderList from '../order/CurrentOrderList';
import Login from '../login/Login'

class Nav extends Component {

    render() {
        return (
            <Router>
                <div>
                    {/* <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                       
                    </ul> */}

    
                    <Route exact path="/" component={CurrentOrderList}/>
                    <Route  path="/login" component={Login}  />
                    <Route  path="/currentOrderList" component={CurrentOrderList}  />
                </div>
            </Router>
        );
    }
}

export default Nav;