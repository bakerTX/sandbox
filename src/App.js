import React, { Component } from 'react';
import './css/App.css';
import Examples from './components/Examples';
import ControlBoard from './components/ControlBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">The Sandbox</h1>

        <nav>
          <a href="#">paragraph</a>
          <a href="#">images</a>
          <a href="#">animations</a>
        </nav>

        <ControlBoard />
        <Examples />
        {/* <CodeSnippet /> */}

      </div>
    );
  }
}

export default App;
