import React from 'react';

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      data-testid="loading-component"
    >
      <div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
