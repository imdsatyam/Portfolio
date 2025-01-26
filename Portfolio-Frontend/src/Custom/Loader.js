import React from 'react';
import './Loader.css';

const Loader = ({ loading, children }) => {
  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-inner">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
      {children && <div className="loader-content">{children}</div>}
    </div>
  );
};

export default Loader;
