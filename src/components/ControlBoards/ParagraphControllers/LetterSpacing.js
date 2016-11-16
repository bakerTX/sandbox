import React, { Component } from 'react';

class LetterSpacing extends Component {
  constructor(props){
    super(props);
    this._changeLetterSpacing = this._changeLetterSpacing.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e){
    //reset other displayed snippets

    // show the div containing the snippet -- hidden by default
    let snippet = document.getElementById('letter-spacing-snippet');
    snippet.style.display = 'block';

    let newValue = e.target.value;
    this.props.changeSnippet('letter-spacing', newValue);
    this._changeLetterSpacing(e);
  }
  _changeLetterSpacing(e){
    let letterSpacing = e.target.value;
    letterSpacing = letterSpacing.toString();
    letterSpacing += "px"
    let paragraph = document.getElementById('paragraph-example');
    paragraph.style.letterSpacing = letterSpacing;
  }
  render() {
    return (
      <div id="letter-spacing-container" className="controller-container">
      <p>Letter Spacing</p>
      <input onChange={this._handleChange} type="range" step={0.1} min={0.1} max={5}></input>
      </div>
    );
  }
}

export default LetterSpacing;
