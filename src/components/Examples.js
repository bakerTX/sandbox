import React, { Component } from 'react';
import ParagraphExample from './Examples/ParagraphExample'
import ImageExample from './Examples/ImageExample';


class Examples extends Component {
  constructor(props){
    super(props);
    this._renderWhat = this._renderWhat.bind(this);
  }
  _renderWhat() {
      let tab = this.props.whichPage()
      if (tab === 'paragraph'){
        return <ParagraphExample />
      } if (tab === 'images'){
        return <ImageExample />
      }
  }
  render() {
    return (
      <div className="exampleBox">
        {this._renderWhat()}
      </div>
    );
  }
}

export default Examples;
