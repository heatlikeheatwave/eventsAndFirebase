import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';

class App extends Component {
  handleClick() {
    console.log("hello");
  }

  render() {
    return(
      <div>
        {/* <button onClick={this.handleClick}></button> */}
        {/* <button onClick={this.handleClick}></button> */}
        <Counter/>
      </div>
      );
  };
}

export default App;
