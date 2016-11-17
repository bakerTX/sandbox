import React, { Component } from 'react';

class Position extends Component {
  constructor(props){
    super(props);

     this._changePosition = this._changePosition.bind(this)
     this._handleChangePosition = this._handleChangePosition.bind(this)
     this._handleChangeMargin = this._handleChangeMargin.bind(this)
     this._changePositionMargin = this._changePositionMargin.bind(this)
  }

  _handleChangePosition(e){
    let slider = document.getElementById('position-slider');
    slider.style.display = 'block';

    let snippet = document.getElementById('position-snippet');
    snippet.style.display = 'block';

    let newValue = e.target.value;
    this.props.changeSnippet('position', newValue);
    this._changePosition(e);
  }

  _handleChangeMargin(e){

    let snippet = document.getElementById('position-margin-snippet');
    snippet.style.display = 'block';

    let newValue = e.target.value;
    this.props.changeSnippet('position-margin', newValue);
    this._changePositionMargin(e);
  }

  _changePosition(e){
    let selectedPosition = e.target.value;
    console.log(selectedPosition);

    let image = document.getElementById("supermoon");
    image.style.position = selectedPosition;
  }

_changePositionMargin(e){
  let selectedPositionMargin = e.target.value;
  selectedPositionMargin += "px"
  console.log(selectedPositionMargin);

  let image = document.getElementById("supermoon");
  image.style.left = selectedPositionMargin;
}
  componentDidMount(){
    let p = document.getElementById('position-controller');
    console.log('p',p);
    p.addEventListener('mouseover', function(){
      console.log('hovering');
      document.getElementById('absolute-tooltip').style.display = 'inline-block';
    })
    p.addEventListener('mouseout', function(){
      document.getElementById('absolute-tooltip').style.display = 'none';
    })
  }

  render() {
    return (
      <div id="position-controller" className="controller-container">
      <p>Position</p>
      <select onChange={this._handleChangePosition}>
         <option selected disabled>Position</option>
         <option value="absolute">Absolute</option>
         <option value="relative">Relative</option>
         </select>

         <input id="position-slider" onChange={this._handleChangeMargin} type="range" step={0.1} min={0.1} max={150}></input>
      </div>
    );
  }
}

export default Position;
