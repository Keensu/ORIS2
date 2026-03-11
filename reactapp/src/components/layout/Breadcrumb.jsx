import React from 'react';

const Breadcrumb = ({ path }) => {
  return (
    <div className="path">
      {path.map((item, index) => (
        <span key={index}>
          {index > 0 && ' » '}
          <a href="#">{item}</a>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;