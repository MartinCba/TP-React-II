import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-4xl font-extrabold text-yellow-400 drop-shadow-lg tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title; 