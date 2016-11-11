import React, { Component } from 'react';
import './App.css';
import Examples from './components/Examples';

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

        <div className="controllerBox">The Controller
          <div className="codeSnippetBox">Code Snippet Box</div>
        </div>
        <Examples />

      </div>
    );
  }
}

export default App;
