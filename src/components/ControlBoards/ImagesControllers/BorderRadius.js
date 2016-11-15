import React, { Component } from 'react';

class BorderRadius extends Component {
  constructor(props){
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._changeBorderRadius = this._changeBorderRadius.bind(this);
  }

  _handleChange(e){

    let snippet = document.getElementById('border-radius-snippet');
    snippet.style.display = 'block';

    let newValue = e.target.value;
    this.props.changeSnippet('border-radius', newValue);
    this._changeBorderRadius(e);
  }

  _changeBorderRadius(e){
    let BorderRadius = e.target.value;
    BorderRadius += "px"
    let image = document.getElementsByTagName('img')
    console.log(image);
    image.supermoon.style.borderRadius = BorderRadius;
    console.log('Border Radius', BorderRadius);

  }

  render() {
    return (
      <div className="controller-container">
      <p>Border Radius</p>
      <input onChange={this._handleChange} type="range" step={0.1} min={0.1} max={150}></input>
      </div>


    );
  }
}

export default BorderRadius;
