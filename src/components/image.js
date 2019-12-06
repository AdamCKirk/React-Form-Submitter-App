import React, { Component } from 'react';
import Img from 'react-image'

export default class App extends Component {
  render() {
    return (
      <div>
        <strong>The Book of Random Images!</strong>
        <Img
          src="https://picsum.photos/200"  // 3rd-party image url
        />
        <button onClick={window.location.reload}>Reload Page</button>
      </div>
    );
  }
}