import React, { Component } from 'react';
import BorderRadius from './ImagesControllers/BorderRadius';
import Filter from './ImagesControllers/Filter';
import Position from './ImagesControllers/Position';

class ControlBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      BorderRadius: 0,
      Filter: '',
      Position: ''
    }

    this._changeSnippet = this._changeSnippet.bind(this);
  }

  _changeSnippet(which, newValue){
    console.log('which', which);
    if (which === 'border-radius') {
      this.setState({
        newBorderRadius: newValue
      })
    } else if (which === "filter"){
      this.setState({
        newFilter: newValue
      })
    } else if (which === "position"){
      this.setState({
        newPosition: newValue
      })
    }
  }

  render(){
    return (
      <div className="controllerBox">
        <BorderRadius changeSnippet={this._changeSnippet}/>
        <Position changeSnippet={this._changeSnippet}/>
        <Filter changeSnippet={this._changeSnippet}/>

        <div id="snippet-holder">

          <pre>
            {`img {`}
          </pre>
          <div id="line-height-snippet">
            <pre>
            {`border-radius: `}{this.state.newBorderRadius}{`;`}
            </pre>
          </div>
          <div id="letter-spacing-snippet">
            <pre>
            {`filter: `}{this.state.newFilter}{`;`}
            </pre>
          </div>
          <div id="font-family-snippet">
            <pre>
            {`position: `}{this.state.newPosition}{`;`}
            </pre>
          </div>

          <pre>
            {`}`}
          </pre>
        </div>
      </div>
    )
  }
}


export default ControlBoard;