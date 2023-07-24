import React from 'react';

const loadingLayout = () => {
  return (
    <div
    style={{
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff', // Set the background color for the loading page
      zIndex: 9999, // Make sure the loading page is on top of other content
    }}
  >
    {/* Add your loading animation here */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Replace this with your preferred loading animation (e.g., spinner, progress bar) */}
      <div className="spinner" />
    </div>
  </div>
  );
}

export default loadingLayout;
