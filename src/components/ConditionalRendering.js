import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }
  render() {
  ////////////////////////////////// Conditional operator ///////////////////////////////
    return this.state.isLogged ? (
      <div>welcome krishna</div>
    ) : (
      <div>welcome guest</div>
    );
  }
 //////////////////////////////////declaring variable ///////////////////////////////
  //   render() {
  //     let message;
  //     if(this.state.isLogged){
  //       message= <div>welcome krishna</div>
  //     }else{
  //       message= <div>welcome guest</div>
  //     }

  //     return <div>{message}</div>;
  //   }
  ////////////////////////////////// if else condition ///////////////////////////////
  //   render() {
  //    if(this.state.isLogged){
  //    }else{
  //       return (
  //          <div>welcome guest</div>
  //        )
  //    }
  //   }
}

export default ConditionalRendering;

// condtional rendering has been used by three methods
// if else condition,declaring variable,Conditional operator