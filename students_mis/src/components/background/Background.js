import React from 'react';
// import './App.css'; // Import the CSS file for styling
import backgroundImage from '../../images/engineering bg2.jpg';
import './Background.css';

const Background = () => {
    return (
    <div className="container">
            
            <img src={backgroundImage} className='background-image' alt="" />
            <div className="overlay" />
                
    </div>
  );
};

export default Background;
