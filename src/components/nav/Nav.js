import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrentOrderList from '../order/CurrentOrderList';

class Nav extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                       
                    </ul>

                    <hr />
                    <Route exact path="/" component={CurrentOrderList}  />
                </div>
            </Router>
        );
    }
}

export default Nav;