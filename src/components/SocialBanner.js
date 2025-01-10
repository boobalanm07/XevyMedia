import React from 'react';

const SocialBanner = () => {
  return (
    <section className="social-banner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="social-banner">
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61566911672582"
                    className="fb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Xevymedia"
                    className="twit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/xevy-media-pvt-ltd-414096332/"
                    className="linked"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yourprofile"
                    className="insta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
