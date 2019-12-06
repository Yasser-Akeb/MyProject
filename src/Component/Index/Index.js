import React, {Component} from 'react';

import About from './../About/About';
import Home from './../Home/Home';
import Footer from './../Footer/Footer';
import Portfolio from './../Portfolio/Portfolio';
import ProfileSkills from './../Profile/Profile';
import SocialMedia from './../SocialMedia/SocialMedia';
import Works from './../Works/Works';


class Index extends Component {
  
  render(){
    return (
      <div className="Index">
        <Home/>
        <Works/>
        <Portfolio/>
        <ProfileSkills/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  }
  
}

export default Index;
