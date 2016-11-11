import React, { Component } from 'react';
import FontFamily from './Controllers/FontFamily';

class ControlBoard extends Component {
  constructor(props){
    super(props);
    this._testRange = this._testRange.bind(this);
    this._changeLetterSpacing = this._changeLetterSpacing.bind(this);
  }
  _testRange(e){
    console.log(e.target.value);
    let lineHeight =e.target.value;
    let paragraph = document.getElementById('paragraph-example');
    paragraph.style.lineHeight = lineHeight;
  }
  _changeLetterSpacing(e){
    console.log('changed');
    console.log(e.target.value);
    let letterSpacing = e.target.value;
    letterSpacing = letterSpacing.toString();
    letterSpacing += "px"
    let paragraph = document.getElementById('paragraph-example');
    paragraph.style.letterSpacing = letterSpacing;
  }

  render(){
    return (
      <div className="controllerBox">
        <FontFamily />
        line height
        <input onChange={this._testRange} type="range" step={0.1} min={1} max={5}></input>
        letter spacing
        <input onChange={this._changeLetterSpacing} type="range" step={0.1} min={1} max={10}></input>
      </div>
    )
  }
}


export default ControlBoard;
