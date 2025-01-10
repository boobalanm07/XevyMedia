import React from 'react';

const ProcessBox = ({ icon, title, description }) => (
  <div className="col-md-4">
    <div className="process-box">
      <div className="process-icon">
        <div className="circle-icon">
          <i className={`fa ${icon}`} />
        </div>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default ProcessBox;
