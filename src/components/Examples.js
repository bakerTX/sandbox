import React, { Component } from 'react';
import Paragraph from './Paragraph'


class Examples extends Component {
  render() {
    return (
      <div className="exampleBox">
        <Paragraph />
        {/* Perhaps here is where we will have React-Router for rendering the different element-pages */}
      </div>
    );
  }
}

export default Examples;
