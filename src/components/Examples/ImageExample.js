import React, { Component } from 'react';


class ImageExample extends Component {
  render() {
    return (
      <div className="image-holder">
        <img src={'./images/Signature.jpg'} alt="signature" id="signature"/>
      </div>
    );
  }
}

export default ImageExample;
