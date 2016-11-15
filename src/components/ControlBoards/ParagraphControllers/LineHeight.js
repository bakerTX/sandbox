import React, { Component } from 'react';

class LineHeight extends Component {
  constructor(props){
    super(props);

    this._changeLineHeight = this._changeLineHeight.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e){
    let snippet = document.getElementById('line-height-snippet');
    snippet.style.display = 'block';
    this._changeLineHeight(e);
    let newValue = e.target.value;


    this.props.changeSnippet('line-height',newValue)
  }
  _changeLineHeight(e){
    let lineHeight =e.target.value;
    let paragraph = document.getElementById('paragraph-example');
    paragraph.style.lineHeight = lineHeight;
  }
  render(){
    return(
        <div id="line-height-container" className="controller-container">
          <p>Line Height</p>
          <input onChange={this._handleChange} type="range" step={0.1} min={1} max={5}></input>
        </div>


    )
  }
}

export default LineHeight;
