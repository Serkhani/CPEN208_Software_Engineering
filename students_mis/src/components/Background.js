import React from 'react';
// import './App.css'; // Import the CSS file for styling

import backgroundImage from '../../public/engineering bg2.jpg'; // Import the background image

const App = () => {
  return (
    <div className="container">
      {/* Apply the background image and set the positioning */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Add the black rectangle with opacity */}
        <div className="overlay"></div>
        
        {/* Rest of your application content */}
        {/* ... */}
      </div>
    </div>
  );
};

export default App;
