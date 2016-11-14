import React, { Component } from 'react';
import FontFamily from './Controllers/FontFamily';
import LineHeight from './Controllers/LineHeight';
import LetterSpacing from './Controllers/LetterSpacing';

class ControlBoard extends Component {
  render(){
    return (
      <div className="controllerBox">
        <FontFamily />
        <LineHeight />
        <LetterSpacing />
      </div>
    )
  }
}


export default ControlBoard;
