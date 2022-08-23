
// state management is maintained inside the component
// state are mutable
//this.state is used to render state in render()
// States in React are objects that store data
import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is state",
    };
  }
  changemessage() {
    // setState method alters the state text
    this.setState({
      message: "This is changed  state",
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.changemessage()}>subscribe</button>
      </div>
    );
  }
}
export default Message;

