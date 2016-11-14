import React, { Component } from 'react';
import FontFamily from './Controllers/FontFamily';
import LineHeight from './Controllers/LineHeight';
import LetterSpacing from './Controllers/LetterSpacing';

class ControlBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      newLineHeight: 0,
      newLetterSpacing: 0
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
      }
  }

  render(){
    return (
      <div className="controllerBox">
        <FontFamily />
        <LineHeight changeSnippet={this._changeSnippet}/>
        <LetterSpacing changeSnippet={this._changeSnippet}/>

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
          <div id="font-famimly-snippet">
            <pre>
            {`p {
  line-height: `}{this.state.snippet}{`;
}`}
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
