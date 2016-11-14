import React, { Component } from 'react';
import '../../css/FontFamily.css';

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
        <form>
          Serif<input onClick={this._changeFontFamily} name="font-family" value="serif" type="radio" ></input>
          Sans-Serif<input onClick={this._changeFontFamily} name="font-family" value="sans-serif" type="radio" ></input>
          Impact<input onClick={this._changeFontFamily} name="font-family" value="impact" type="radio" ></input>
          Monospace<input onClick={this._changeFontFamily} name="font-family" value="monospace" type="radio" ></input>
          Comic Sans<input onClick={this._changeFontFamily} name="font-family" value="comic sans ms" type="radio" ></input>
        </form>
      </div>
    );
  }
}

export default FontFamily;
