import React, { Component } from 'react';
import ParagraphCB from './ControlBoards/ParagraphCB';
import ImagesCB from './ControlBoards/ImagesCB';


class ControlBoard extends Component {
  constructor(props){
    super(props);
    this._renderWhat = this._renderWhat.bind(this);
  }
  _renderWhat(){
    let tab = this.props.whichPage()
    if (tab === 'text'){
      return <ParagraphCB />
    } else if (tab === 'images'){
      return <ImagesCB />
    }
  }
  render() {
    return (
      <div id="holds-controlboards">
        {this._renderWhat()}
      </div>
    );
  }
}

export default ControlBoard;
