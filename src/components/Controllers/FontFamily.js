import React, { Component } from 'react';
import '../../css/FontFamily.css';

class FontFamily extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontFamily: 'sans-serif'
    }
    this._changeFontFamily = this._changeFontFamily.bind(this);
  }
  _changeFontFamily(e){
    let selectedFontFamily = e.target.value;
    // Set state
    if (selectedFontFamily === 'serif') {
        this.setState({
          fontFamily: 'serif'
        })
      } else if (selectedFontFamily === 'sans-serif'){
      this.setState({
        fontFamily: 'sans-serif'
      })
    }
    // Change the css Class of the paragraph
    let paragraph = document.getElementById("paragraph-example");
    paragraph.style.fontFamily = selectedFontFamily;
  }
  render() {
    return (
      <div className="controller-container">
        <p id="font-family-control">Font Family</p>
        <form>
          Serif<input onClick={this._changeFontFamily} name="font-family" value="serif" type="radio" ></input>
          Sans-Serif<input onClick={this._changeFontFamily} name="font-family" value="sans-serif" type="radio" ></input>
        </form>
      </div>
    );
  }
}

export default FontFamily;
