import React, { Component } from 'react';
import ParagraphExample from './Examples/ParagraphExample'


class Examples extends Component {
  render() {
    return (
      <div className="exampleBox">
        <ParagraphExample />
        {/* Perhaps here is where we will have React-Router for rendering the different element-pages */}
      </div>
    );
  }
}

export default Examples;
