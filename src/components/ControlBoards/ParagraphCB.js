import React, { Component } from 'react';
import FontFamily from './ParagraphControllers/FontFamily';
import LineHeight from './ParagraphControllers/LineHeight';
import LetterSpacing from './ParagraphControllers/LetterSpacing';
import TextDecoration from './ParagraphControllers/TextDecoration';
import TextTransform from './ParagraphControllers/TextTransform';

class ControlBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      newLineHeight: 0,
      newLetterSpacing: 0,
      newFontFamily: '',
      newTextDecoration: ''
    }

    this._changeSnippet = this._changeSnippet.bind(this);
  }

  _changeSnippet(which, newValue){
    console.log('which', which);
    if (which === 'letter-spacing') {
      this.setState({
        newLetterSpacing: newValue
      })
    } else if (which === "line-height"){
      this.setState({
        newLineHeight: newValue
      })
    } else if (which === "font-family"){
      this.setState({
        newFontFamily: newValue
      })
    } else if (which === "text-decoration"){
      this.setState({
        newTextDecoration: newValue
      })
    } else if (which === "text-transform"){
      this.setState({
        newTextTransform: newValue
      })
    }
  }

  render(){
    return (
      <div className="controllerBox">
        <FontFamily changeSnippet={this._changeSnippet}/>
        <LineHeight changeSnippet={this._changeSnippet}/>
        <LetterSpacing changeSnippet={this._changeSnippet}/>
        <TextDecoration changeSnippet={this._changeSnippet}/>
        <TextTransform changeSnippet={this._changeSnippet}/>

        <div id="snippet-holder">

          <pre>
            {`p {`}
          </pre>
          <div id="line-height-snippet">
            <pre>
            {`line-height: `}{this.state.newLineHeight}{`;`}
            </pre>
          </div>
          <div id="letter-spacing-snippet">
            <pre>
            {`letter-spacing: `}{this.state.newLetterSpacing}{`;`}
            </pre>
          </div>
          <div id="font-family-snippet">
            <pre>
            {`font-family: `}{this.state.newFontFamily}{`;`}
            </pre>
          </div>
          <div id="text-decoration-snippet">
            <pre>
            {`text-decoration: `}{this.state.newTextDecoration}{`;`}
            </pre>
          </div>
          <div id="text-transform-snippet">
            <pre>
            {`text-transform: `}{this.state.newTextTransform}{`;`}
            </pre>
          </div>

          <pre>
            {`}`}
          </pre>
        </div>
      </div>
    )
  }
}


export default ControlBoard;
