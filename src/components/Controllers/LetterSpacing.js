import React, { Component } from 'react';

class LetterSpacing extends Component {
  constructor(props){
    super(props);
    this._changeLetterSpacing = this._changeLetterSpacing.bind(this);
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
  render() {
    return (
      <div className="controller-container">
      <p>letter spacing</p>
      <input onChange={this._changeLetterSpacing} type="range" step={0.1} min={1} max={10}></input>
      </div>
    );
  }
}

export default LetterSpacing;
