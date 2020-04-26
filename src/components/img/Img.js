import React from 'react';
import background from '../../background.jpg';

class Img extends React.Component{
  render(){
    const myImage={
      width: '45%',
      margin: 'auto',
      display: 'block',
      marginTop: '75px'
    }
    return(
      <div>
        <img style={myImage} src={background} alt="background"/>
      </div>
    )
  }
}

export default Img;
