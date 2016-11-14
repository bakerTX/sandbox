import React, { Component } from 'react';
import ParagraphExample from './Examples/ParagraphExample'
import ImageExample from './Examples/ImageExample';


class Examples extends Component {
  render() {
    return (
      <div className="exampleBox">
        <ParagraphExample />
        <ImageExample />
      </div>
    );
  }
}

export default Examples;
