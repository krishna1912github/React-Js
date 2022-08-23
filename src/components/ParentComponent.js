import React, { Component } from 'react'
import ChildComponent from './ChildComponent'



class ParentComponent extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
         first:'Parent  '
      }
    this.greetParent=this.greetParent.bind(this)
    }
   //  defining the function 
    greetParent(child){
         alert(`from ${this.state.first} ${child} `)
   }
   
  render() {
    return (
      <div>
         {/*  pass the function as props by this function are used as props  */}
         <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default  ParentComponent