import React, { Component } from 'react';


class ImageExample extends Component {
  render() {
    return (
      <div className="image-holder">
        <img src={'./images/fennecjedi.jpg'} alt="jedi" id="jedi"/>
      </div>
    );
  }
}

export default ImageExample;
