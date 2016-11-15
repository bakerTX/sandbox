import React, { Component } from 'react';
import './css/App.css';
import Examples from './components/Examples';
import ControlBoard from './components/ControlBoard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'home'
    }

    this._handleClick = this._handleClick.bind(this);
    this._whichPage = this._whichPage.bind(this);
  }
  _whichPage() {
    return this.state.tab
  }
  _handleClick(e) {
    let tab = e.target.innerText
    this.setState({
      tab: tab
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="header">The Sandbox</h1>

        <nav>
          <a onClick={this._handleClick} href="#">home</a>
          <a onClick={this._handleClick} href="#">paragraph</a>
          <a onClick={this._handleClick} href="#">images</a>
          <a onClick={this._handleClick} href="#">animations</a>
        </nav>

        <ControlBoard whichPage={this._whichPage}/>
        <Examples whichPage={this._whichPage}/>
        {/* <CodeSnippet /> */}

      </div>
    );
  }
}

export default App;
