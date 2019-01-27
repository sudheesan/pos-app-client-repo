import React, { Component } from 'react';
import './App.css';
import Navigation from './components/nav/Nav';
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
