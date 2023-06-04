// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {
  handleKeyPress = (key) => {
    console.log("Key pressed:", key);
    // You can perform any desired action based on the key pressed
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleKeyPress(1)}>1</button>
          <button onClick={() => this.handleKeyPress(2)}>2</button>
          <button onClick={() => this.handleKeyPress(3)}>3</button>
        </div>
        <div>
          <button onClick={() => this.handleKeyPress(4)}>4</button>
          <button onClick={() => this.handleKeyPress(5)}>5</button>
          <button onClick={() => this.handleKeyPress(6)}>6</button>
        </div>
        <div>
          <button onClick={() => this.handleKeyPress(7)}>7</button>
          <button onClick={() => this.handleKeyPress(8)}>8</button>
          <button onClick={() => this.handleKeyPress(9)}>9</button>
        </div>
        <div>
          <button onClick={() => this.handleKeyPress(0)}>0</button>
        </div>
      </div>
    );
  }
}



function Keypad (){
    return (
        <div></div>
    )
}

export default Keypad;