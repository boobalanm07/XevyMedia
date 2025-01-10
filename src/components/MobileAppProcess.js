import React from 'react';

const MobileAppProcess = () => {
  const steps = [
    { number: 1, heading: "You Have an App Idea!" },
    { number: 2, heading: "Wireframing" },
    { number: 3, heading: "Designing" },
    { number: 4, heading: "Development" },
    { number: 5, heading: "Testing" },
    { number: 6, heading: "Deployment" },
    { number: 7, heading: "Maintenance & Support" },
  ];

  return (
    <section className="mobile-app-process">
      <div className="container">
        <h2 className="text-center">Mobile App Development Process</h2>
        <div className="process-container">
          <div className="dotted-line"></div>
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="diamond">
                <span className="diamond-number">{step.number}</span>
              </div>
              <p className="step-heading">{step.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppProcess;
