import React, { Component } from 'react';


class ImageExample extends Component {
  render() {
    return (
      <div className="image-holder">
        <img src={'./images/supermoon.jpeg'} alt="supermoon" id="supermoon"/>
      </div>
    );
  }
}

export default ImageExample;
