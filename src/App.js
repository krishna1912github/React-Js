
import './App.css';
import React,{Component} from 'react';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome';
import  Message  from './components/Message';
import FunctionalClick from './components/FunctionalClick';
import Eventclick from './components/Eventclick';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
class App extends Component{
  render ( ){
    return(
      <div className='App' >
        <ConditionalRendering/>
        {/* <ParentComponent/> */}
      {/* namae is the props data  */}
      {/* Child props used ad closing the greet tag  */}
        {/* <Greet name="app1" heroName='Super'>
          <p>lorem</p>
        </Greet>
        <Greet  name="app3">
          <button>action</button>
        </Greet>
        <Greet name="app2"/>
        <Welcome name="app1" heroName='Super'/>
        <Welcome name="app2" heroName='vte'/>
        <Welcome name="app13" heroName='vote'/> */}
        {/* message component is based on state  */}
        {/* <Message/>
        <FunctionalClick/>
        <Eventclick/> */}
      </div>
    )
  }
}

export default App;
