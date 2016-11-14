import React, { Component } from 'react';

class LineHeight extends Component {
  constructor(props){
    super(props);

    this.state = {
      newSnippetNumber: 0
    }

    this._changeLineHeight = this._changeLineHeight.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(e){
    this._changeLineHeight(e);
    let newValue = e.target.value;
    this.setState({
      newSnippetNumber: newValue
    })

    this.props.changeSnippet(newValue)
  }
  _changeLineHeight(e){
    let lineHeight =e.target.value;
    let paragraph = document.getElementById('paragraph-example');
    paragraph.style.lineHeight = lineHeight;
  }
  render(){
    return(
        <div className="controller-container">
          <p>Line Height</p>
          <input onChange={this._handleChange} type="range" step={0.1} min={1} max={5}></input>
        </div>


    )
  }
}

export default LineHeight;
