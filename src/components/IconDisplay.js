import React from 'react';

const IconDisplay = ({ iconUrl }) => {
    
  return (
    <div>
      <label>Icon Recommendation:</label>
      <img src={iconUrl} alt="Category Icon" />
    </div>
  );
};

export default IconDisplay;
