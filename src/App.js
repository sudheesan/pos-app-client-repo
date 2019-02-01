import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Header />
            <Nav />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
