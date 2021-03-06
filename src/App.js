import React, { Component } from 'react';
import './css/App.css';
import Examples from './components/Examples';
import ControlBoard from './components/ControlBoard';
import Home from './components/Home';
import fennec from '../public/images/fennecface.jpg';
import sand from '../public/images/sandnoise.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 'home'
    }
    this._handleClick = this._handleClick.bind(this);
    this._whichPage = this._whichPage.bind(this);
    this._homeOrOther = this._homeOrOther.bind(this);
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
  _homeOrOther(){
    {if (this.state.tab === 'home') {
      return <Home />
    } else {
      return (
        <div id="main-content">
        <ControlBoard whichPage={this._whichPage}/>
        <Examples whichPage={this._whichPage}/>
        </div>
      )
    }
  }
}
  render() {
    return (
      <div className="App">
        <nav id="nav" className="homepage-content">
          <a onClick={this._handleClick} href="#">home</a>
          <a onClick={this._handleClick} href="#">text</a>
          <a onClick={this._handleClick} href="#">images</a>
        </nav>
        {this._homeOrOther()}
      </div>
    );
  }
}
export default App;
