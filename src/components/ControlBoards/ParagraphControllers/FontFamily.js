import React, { Component } from 'react';

class FontFamily extends Component {
  constructor(props){
    super(props);

    this._changeFontFamily = this._changeFontFamily.bind(this);
  }
  _changeFontFamily(e){
    let selectedFontFamily = e.target.value;

    // send newFontFamily up to the control board
    this.props.changeSnippet('font-family', selectedFontFamily);

    // Change the css Class of the paragraph
    let paragraph = document.getElementById("paragraph-example");
    paragraph.style.fontFamily = selectedFontFamily;

    // set the containing div of the code snippet from hidden to block
    let snippet = document.getElementById('font-family-snippet');
    snippet.style.display = 'block';
  }
  render() {
    return (
      <div className="controller-container">
        <p id="font-family-control">Font Family</p>
        <select onChange={this._changeFontFamily}>
          <option value="serif">serif</option>
          <option value="sans-serif">sans-serif</option>
          <option value="impact">impact</option>
          <option value="monospace">monospace</option>
          <option value="comic sans ms">comic sans</option>
        </select>
      </div>
    );
  }
}

export default FontFamily;
