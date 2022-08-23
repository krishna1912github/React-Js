import React,{Component} from 'react'


// class components use class keywords then ,use render of methods 
class Welcome extends Component {
   render(){
      return <h1> Class components{this.props.name }aks{this.props.heroName  }</h1>
   }

}
export default Welcome;