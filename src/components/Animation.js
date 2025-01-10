import { useEffect, useState } from 'react';

function Animation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const preloader = document.getElementById('preloader');
      const loadingBar = document.querySelector('.loading-bar');

      loadingBar.style.width = '100%';

      setTimeout(() => {
        // Add the 'slide-up' class after the loading is complete
        preloader.classList.add('slide-up');
      }, 4000); // Delay to match the loading bar's duration

      setTimeout(() => {
        // Hide the animation after the slide-up animation is done
        preloader.style.display = 'none';
        window.scrollTo(0, 0);
        setIsLoading(false);
      }, 4500); // Match the animation duration and the delay before hiding the preloader
    }
  }, []);

  return (
    <div id="preloader" className={isLoading ? '' : 'slide-up'}>
      <div className="loadingBox-mainimg">
        <img
          src="/img/others/splash-image.png"
          className="img-fluid"
          style={{ marginBottom: '10px' }}
          alt="Splash-image"
        />
      </div>
      <img
        src="/img/others/footer-logo.png"
        className="img-fluid pre-footer-logo"
        alt="Splash-Logo"
      />
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}

export default Animation;
