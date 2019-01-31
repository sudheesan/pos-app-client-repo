import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './components/main/Main';
class App extends Component {
  render() {

    return (
      <div className='main-container'>
      <Router>
       
          <Route to="/" component={Main} />
  
      </Router>
      </div>
    );
  }
}
export default App;
