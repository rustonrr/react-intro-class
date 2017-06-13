import React, { Component } from 'react'; //this is called destructuring
// ex; var Component = React.Component
import Calculator from './components/Calculator/Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <Calculator />
      
    );
  }
}

export default App;
