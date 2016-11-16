import React, { Component } from 'react';

class TextDecoration extends Component {
  constructor(props){
    super(props);
    this._changeTextDecoration = this._changeTextDecoration.bind(this);
  }

  _changeTextDecoration(e){
      let selectedTextDecoration = e.target.value;

      // send newFontFamily up to the control board
      this.props.changeSnippet('text-decoration', selectedTextDecoration);

      // Change the css Class of the paragraph
      let paragraph = document.getElementById("paragraph-example");
      paragraph.style.textDecoration = selectedTextDecoration;

      // set the containing div of the code snippet from hidden to block
      let snippet = document.getElementById('text-decoration-snippet');
      snippet.style.display = 'block';
  }

  render() {
    return (
      <div id="text-decoration-container" className="controller-container">
        {/* <p id="font-family-control">Font Family</p> */}
        <select onChange={this._changeTextDecoration}>
          <option selected disabled>Text Decoration</option>
          <option value="line-through">line-through</option>
          <option value="underline">underline</option>
          <option value="overline">overline</option>

        </select>
      </div>
    );
  }
}

export default TextDecoration;
