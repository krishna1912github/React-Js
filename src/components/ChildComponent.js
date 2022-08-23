import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* byclicking the button This child component going call the parent 
      component method or function with help of props{props.greetHandler}*/}
      <button onClick={props.greetHandler}> greetParent</button>
      {/* pass data to parent by the parameter  */}
      <button onClick={()=>props.greetHandler('from child')}> greetParent</button>
    </div>
  )
} 
export default ChildComponent


