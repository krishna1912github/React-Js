import React, { Component } from 'react'

class Eventclick extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        first:"iiiiiiiiiii"
     }
   }
   clickHandler(){
      this.setState({
         first:"noooooo"
      })
   }
  render() {
    return (
      <div>
         <div>{this.state.first}</div>
         {/* event handler can use bind() method were event can change the state  */}
       {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
       <button onClick={()=>this.clickHandler.bind()}>click</button>

      </div>

    )
  }
}

export default Eventclick