import { useState, useEffect } from 'react';
import Link from 'next/link'; // Use Next.js' Link component for navigation

function Banner() {
  const texts = ["Creativity", "Strategy", "Excellence"];
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
  const [isHiding, setIsHiding] = useState(false); // Track hiding animation state

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHiding(true); // Start hiding the current text

      setTimeout(() => {
        // Update index cyclically
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsHiding(false); // Show the new text
      }, 1000); // Wait for the hide animation to complete
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <section className="banner">
      <div className="container">
        <div className="banner">
          <div className="banner-left">
            <h1>
              Achieve Your Goals with{" "}
              <span
                className={`slide-text ${isHiding ? "hide" : "show"}`}
                id="slide-text"
              >
                {texts[currentIndex]}
              </span>
            </h1>
            <h2>Empower Your Digital Journey</h2>
            <Link href="/services">
              <a className="btn">Get Started</a> {/* Use <a> inside <Link> */}
            </Link>
          </div>
          <div className="banner-right">
            <div className="ball rotating"></div>
            <img
              src="/img/banner/banner-1.png"
              alt="Astronaut in space representing digital journeys"
              className="astronaut img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
