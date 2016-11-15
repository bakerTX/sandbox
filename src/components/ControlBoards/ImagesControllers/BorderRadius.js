import React, { Component } from 'react';

class BorderRadius extends Component {
  constructor(props){
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._changeBorderRadius = this._changeBorderRadius.bind(this);
  }

  _handleChange(e){
    let newValue = e.target.value;
    this._changeBorderRadius(e);
  }

  _changeBorderRadius(e){
    let BorderRadius = e.target.value;
    let image = document.getElementById('signature')
    image.style.BorderRadius = BorderRadius;
  }

  render() {
    return (
      <div className="controller-container">
      <p>Border Radius</p>
      <input onChange={this._handleChange} type="range" step={0.1} min={0.1} max={5}></input>
      </div>


    );
  }
}

export default BorderRadius;
