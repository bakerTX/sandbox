import React, { Component } from 'react';
import ParagraphCB from './ControlBoards/ParagraphCB'


class ControlBoard extends Component {
  constructor(props){
    super(props);
    this._renderWhat = this._renderWhat.bind(this);
  }

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
      </div>
    );
  }
}

export default ControlBoard;
