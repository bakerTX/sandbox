import React, { Component } from 'react';

class TextTransform extends Component {
  constructor(props){
    super(props);
    this._changeTextTransform = this._changeTextTransform.bind(this);
  }

  _changeTextTransform(e){
      let selectedTextTransform = e.target.value;

      // send newFontFamily up to the control board
      this.props.changeSnippet('text-transform', selectedTextTransform);

      // Change the css Class of the paragraph
      let paragraph = document.getElementById("paragraph-example");
      paragraph.style.textTransform = selectedTextTransform;

      // set the containing div of the code snippet from hidden to block
      let snippet = document.getElementById('text-transform-snippet');
      snippet.style.display = 'block';
  }

  render() {
    return (
      <div id="text-transform-container" className="controller-container">
        {/* <p id="font-family-control">Font Family</p> */}
        <select onChange={this._changeTextTransform}>
          <option selected disabled>Text Transform</option>
          <option value="uppercase">uppercase</option>
          <option value="lowercase">lowercase</option>
          <option value="capitalize">capitalize</option>

        </select>
      </div>
    );
  }
}

export default TextTransform;
