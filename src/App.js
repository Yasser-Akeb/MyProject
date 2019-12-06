import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';

import Navbar from './Component/Navbar/Navbar';
import Index from './Component/Index/Index';
import Contact from './Component/Contact/Contact';


class App extends Component {
  
  render(){
    return (
      <div className="App">

        <BrowserRouter>
          <Navbar/>
          <Route exact path = '/' component = {Index} />
          <Route path = '/Contact' component = {Contact} />
        </BrowserRouter>
      
      </div>
    );
  }
  
}

export default App;
