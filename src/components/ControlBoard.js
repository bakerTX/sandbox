import React, { Component } from 'react';
import FontFamily from './Controllers/FontFamily';
import LineHeight from './Controllers/LineHeight';
import LetterSpacing from './Controllers/LetterSpacing';

class ControlBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      snippet: 0
    }

    this._changeSnippet = this._changeSnippet.bind(this);
  }

  _changeSnippet(newValue){
    console.log(newValue);
    console.log('changing snippet');
    this.setState({
      snippet: newValue
    })
  }
  render(){
    return (
      <div className="controllerBox">
        <FontFamily />
        <LineHeight changeSnippet={this._changeSnippet}/>
        <LetterSpacing />

        <div id="snippet-holder">
          <pre>
            {`p {
  line-height: `}{this.state.snippet}{`;
}`}
          </pre>
        </div>
      </div>
    )
  }
}


export default ControlBoard;
