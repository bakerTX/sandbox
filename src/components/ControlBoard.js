import React, { Component } from 'react';
import ParagraphCB from './ControlBoards/ParagraphCB'


class ControlBoard extends Component {
  render() {
    return (
      <div>
        <ParagraphCB />
        {/* Perhaps here is where we will have React-Router for rendering the different element-pages */}
      </div>
    );
  }
}

export default ControlBoard;
