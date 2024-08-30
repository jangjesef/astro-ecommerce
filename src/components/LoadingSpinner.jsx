import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img 
        src="/loading.png" 
        alt="Načítání" 
        className="w-16 h-16 animate-pulse"
      />
    </div>
  );
};

export default LoadingSpinner;