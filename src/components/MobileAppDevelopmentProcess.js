import React from 'react';
import { Devices, Highlighter } from '@phosphor-icons/react';
import { Code, DeviceMobile, Layout, ProjectorScreenChart } from 'phosphor-react';

const MobileAppDevelopmentProcess = () => {
  return (
    <section className="spacer-xl mobile-app-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="h3 mb-30">Mobile App Development Process</h2>
            <p className="mb-50">
              As a leading mobile app development consulting provider, we follow a high-standard development
              procedure to deliver the best possible solutions for businesses. Our dedicated mobile app developers
              help to launch error-free and accurate mobile apps.
            </p>
          </div>
        </div>
        <div className="row g-lg-2 gy-4">
          <div className="col-lg-4 d-flex">
            <div className="process-wrapper">
              <div className="white-iconbox">
                <Highlighter size={32} />
              </div>
              <div>
                <h3 className="h5 mb-20">UI Strategy</h3>
                <p className="mb-0">
                  We have expertise in providing high-performance and demanding iPhone and iPad platform app
                  development services.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex">
            <div className="process-wrapper">
              <div className="white-iconbox">
                <ProjectorScreenChart size={32} />
              </div>
              <div>
                <h3 className="h5 mb-20">Requirement Analysis</h3>
                <p className="mb-0">
                  The chief priority is to gather and analyze the client&apos;s requirements before starting mobile app
                  development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex">
            <div className="process-wrapper">
              <div className="white-iconbox">
                <Layout size={32} />
              </div>
              <div>
                <h3 className="h5 mb-20">Wireframe</h3>
                <p className="mb-0">
                  We provide clients with a wireframe after completing a mockup design based on their requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex">
            <div className="process-wrapper">
              <div className="white-iconbox">
                <Code size={32} />
              </div>
              <div>
                <h3 className="h5 mb-20">Development</h3>
                <p className="mb-0">
                  The development of our clients&apos; apps starts after approval and is done using top-notch tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex">
            <div className="process-wrapper">
              <div className="white-iconbox">
                <DeviceMobile size={32} />
              </div>
              <div>
                <h3 className="h5 mb-20">Handover</h3>
                <p className="mb-0">After proper testing and trials, the app is handed over to our clients.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex">
            <div className="process-wrapper">
              <div className="white-iconbox">
                <Devices size={32} />
              </div>
              <div>
                <h3 className="h5 mb-20">Development & Testing</h3>
                <p className="mb-0">
                  Comprehensive testing ensures that the app meets the highest quality standards before its release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDevelopmentProcess;
