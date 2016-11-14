import React, { Component } from 'react';

class LineHeight extends Component {
  constructor(props){
    super(props);
    this._changeLineHeight = this._changeLineHeight.bind(this);
  }
  _changeLineHeight(e){
    console.log(e.target.value);
    let lineHeight =e.target.value;
    let paragraph = document.getElementById('paragraph-example');
    paragraph.style.lineHeight = lineHeight;
  }
  render(){
    return(
      <div className="controller-container">
        <p>Line Height</p>
        <input onChange={this._changeLineHeight} type="range" step={0.1} min={1} max={5}></input>
      </div>
    )
  }
}

export default LineHeight;
