import React, { useState, useEffect } from 'react';

const TechStack = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/img/others/mobile-app2.png",
    "/img/others/mobile-app3.png",
    "/img/others/mobile-app4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
  
    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]); // Add images.length as a dependency

  return (
    <section className="tech-stack spacer-xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 m-auto text-center">
            <h2 className="h3 mb-20">
              Transform Your Mobile Development and Consulting with Our Expert Tech Stack
            </h2>
            <p className="mb-50">
              With our diverse and cutting-edge tech stack, we build innovative solutions that meet the highest standards of quality and functionality.
            </p>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="tech-wrapper">
              <h5 className="h6 mb-20">Frontend</h5>
              <ul className="tech-list list-unstyled mb-0">
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-1.webp"
                      alt="React"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">React</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-2.webp"
                      alt="Angular"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Angular</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-3.webp"
                      alt="Next.js"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Next.js</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-4.webp"
                      alt="Vue.js"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Vue.js</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-5.webp"
                      alt="Flutter"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Flutter</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-6.webp"
                      alt="Kotlin"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Kotlin</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-7.webp"
                      alt="HTML5 & CSS3"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">HTML5 & CSS3</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-8.webp"
                      alt="Swift"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Swift</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-9.webp"
                      alt="Xamarin"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Xamarin</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="tech-wrapper">
              <h5 className="h6 mb-20">Backend</h5>
              <ul className="tech-list list-unstyled mb-0">
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-10.webp"
                      alt="Node.js"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Node.js</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-11.webp"
                      alt="Python"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Python</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-12.webp"
                      alt="Ruby On Rails"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Ruby On Rails</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-13.webp"
                      alt="PHP"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">PHP</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-14.webp"
                      alt="Java"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Java</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-15.webp"
                      alt="Django"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Django</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-16.webp"
                      alt="Express.js"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Express.js</p>
                </li>
                <li>
                  <span className="tech-img">
                    <img
                      src="/img/others/tech/tech-17.webp"
                      alt="Spring Boot"
                    />
                  </span>
                  <p className="mb-0 w-semibold small">Spring Boot</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center mb-4 app-screen">
            <div className="container">
            <img
  src={images[(currentImage + 0) % images.length]}
  className={`cen-img fade-img ${currentImage === 0 ? 'show' : ''}`}
  alt="Mobile app displayed on screen" // More descriptive alt text
/>
<img
  src={images[(currentImage + 1) % images.length]}
  className={`cen-img fade-img ${currentImage === 1 ? 'show' : ''}`}
  alt="Mobile app displayed on screen" // More descriptive alt text
/>
<img
  src={images[(currentImage + 2) % images.length]}
  className={`cen-img fade-img ${currentImage === 2 ? 'show' : ''}`}
  alt="Mobile app displayed on screen" // More descriptive alt text
/>
            </div>
          </div>
        </div>
        <div className="row">
      <div className="col-lg-4 col-md-6 d-flex">
        <div className="tech-wrapper">
          <h5 className="h6 mb-20">Platforms</h5>
          <ul className="tech-list list-unstyled mb-0">
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-18.webp"
                  alt="iOS"
                />
              </span>
              <p className="mb-0 w-semibold small">iOS</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-19.webp"
                  alt="Android"
                />
              </span>
              <p className="mb-0 w-semibold small">Android</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-20.webp"
                  alt="React Native"
                />
              </span>
              <p className="mb-0 w-semibold small">React Native</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-21.webp"
                  alt="Flutter"
                />
              </span>
              <p className="mb-0 w-semibold small">Flutter</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex">
        <div className="tech-wrapper">
          <h5 className="h6 mb-20">Database</h5>
          <ul className="tech-list list-unstyled mb-0">
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-22.webp"
                  alt="MongoDB"
                />
              </span>
              <p className="mb-0 w-semibold small">MongoDB</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-23.webp"
                  alt="MySQL"
                />
              </span>
              <p className="mb-0 w-semibold small">MySQL</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-24.webp"
                  alt="Firebase"
                />
              </span>
              <p className="mb-0 w-semibold small">Firebase</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-25.webp"
                  alt="PostgreSQL"
                />
              </span>
              <p className="mb-0 w-semibold small">PostgreSQL</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex">
        <div className="tech-wrapper">
          <h5 className="h6 mb-20">UI/UX</h5>
          <ul className="tech-list list-unstyled mb-0">
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-26.webp"
                  alt="Figma"
                />
              </span>
              <p className="mb-0 w-semibold small">Figma</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-27.webp"
                  alt="Adobe XD"
                />
              </span>
              <p className="mb-0 w-semibold small">Adobe XD</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-28.webp"
                  alt="Sketch"
                />
              </span>
              <p className="mb-0 w-semibold small">Sketch</p>
            </li>
            <li>
              <span className="tech-img">
                <img
                  src="/img/others/tech/tech-29.webp"
                  alt="Zeplin"
                />
              </span>
              <p className="mb-0 w-semibold small">Zeplin</p>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;