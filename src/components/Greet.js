import React from 'react'
//Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
//Props pass data from one component to another 
export const Greet = (props) => {
   console.log(props)
    return (
    <div>
      <h1>Greet {props.name}a.ka  {props.heroName}
      {/* <h1>Greet {name}a.ka  {heroName} */}
    </h1>
    {props.children     }
      </div>
  )
}
  // props and  state can be used in destructing 
/////////////////////////method--1 useing props by directly useing the varible name heroname 
// export const Greet = ({name,heroName}) => {
//    return (
//    <div>
//  <h1>Greet {name}a.ka  {heroName} 
//    </h1>
//    {props.children     }
//      </div>
//  )
// }
/////////////////////////method--2 useing props by  const object directly useing the varible name heroname 
// export const Greet = (props) => {
//const {name,heroName}=props
//    return (
//    <div>
//* <h1>Greet {props.name}a.ka  {props.heroName} */
//    </h1>
//    {props.children}
//      </div>
//  )
// }

