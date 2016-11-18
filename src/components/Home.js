import React, { Component } from 'react';
import '../css/home.css';

class Home extends Component {
  componentDidMount(){
    let nav = document.getElementById('nav')
    nav.className = "hidden";
  }
  componentWillUnmount(){
    let nav = document.getElementById('nav')
    nav.className = "";
  }

  render() {
    return (
      <div className="homepage-content" >
      <h1>Welcome to Sandbox</h1>
      <br/>
      <p>Sandbox is an educational tool which allows users to familiarize themselves with different CSS properties. A user can manipulate text and images with Sandbox, showing them how different properties effect elements, while also rendering the code specific to their changes in real time.</p>
      </div>
    )
  }
}

export default Home;
