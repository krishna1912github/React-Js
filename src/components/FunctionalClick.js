import React from 'react'

function FunctionalClick() {
   function clickFunction(){
      console.log("object");
   }
  return (
  <button onClick={clickFunction}>click</button>
  )
}

export default FunctionalClick