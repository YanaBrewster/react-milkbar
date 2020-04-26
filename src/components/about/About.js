import React from 'react';
import './About.css';
import Img from '../img/Img';
import Para from '../para/Para';

class About extends React.Component{
  render(){
    return(
      <div className="aboutContainer">
        <h1 className="heading"> About </h1>
        <Para/>
        <Img/>
      </div>
    )
  }
}
export default About;
