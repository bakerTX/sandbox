import React, { Component } from 'react';
import ParagraphCB from './ControlBoards/ParagraphCB'


class ControlBoard extends Component {


  _renderWhat(){
    let tab = this.props.whichPage()
    if (tab === 'paragraph'){
      return <ParagraphCB />
    }
  }
  render() {
    return (
      <div>
        {this._renderWhat()}
        {/* <ParagraphCB /> */}
      </div>
    );
  }
}

export default ControlBoard;
