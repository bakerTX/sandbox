import React, { Component } from 'react';

class Filter extends Component {
  constructor(props){
    super(props);

     this._changeFilter = this._changeFilter.bind(this)
     this._slidingChange = this._slidingChange.bind(this);
  }

  _slidingChange(e){
    let value = e.target.value;
    // console.log(value);
    let image = document.getElementById('supermoon');
    let previousFilter = image.style.filter;
    previousFilter = previousFilter.split('(');
    // console.log(previousFilter);
    let newFilter = '';
    newFilter += previousFilter[0];
    newFilter += `(${value}%)`;
    console.log(newFilter);

    image.style.filter = newFilter;
    this.props.changeSnippet('filter', newFilter);
  }

  _changeFilter(e){
    let selectedFilter = e.target.value;
    console.log(selectedFilter);

    let image = document.getElementById("supermoon");
    console.log('style', image.style);
    console.log('filter', image.style.filter);
    image.style.filter = selectedFilter + `(50%)`;
    console.log('filter', image.style.filter);

    this.props.changeSnippet('filter', selectedFilter);

    let snippet = document.getElementById('filter-snippet');
    snippet.style.display = 'block';

  }

  render() {
    return (
      <div className="controller-container">
      <p>Filter</p>
      <select onChange={this._changeFilter}>
         <option selected disabled>Filter</option>
         <option value="grayscale">Grayscale</option>
         <option value="invert">Invert</option>
         <option value="opacity">Opacity</option>
         <option value="saturate">Saturate</option>
         <option value="sepia">Sepia</option>
        </select>
        <input onChange={this._slidingChange} type="range" step={5} min={0} max={100}></input>
      </div>
    );
  }
}

export default Filter;
