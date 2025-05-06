import React from 'react';

const Spinner: React.FC = () => (
  <div className="flex justify-center items-center my-8">
    <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent border-solid rounded-full animate-spin"></div>
  </div>
);

export default Spinner; 