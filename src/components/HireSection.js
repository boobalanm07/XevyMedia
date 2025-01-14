import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Browser, Envelope, MagnifyingGlass, ShoppingCart, User, VideoCamera } from 'phosphor-react';

const HireSections = () => {
  const [activeTab, setActiveTab] = useState('seo-specialist');

  useEffect(() => {
    // Pause all videos and reset the current time whenever the active tab changes
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });

    // Play the video of the active tab
    const activeVideo = document.querySelector(`#${activeTab} video`);
    if (activeVideo) {
      activeVideo.play().catch((error) => {
        console.error('Video play error:', error);
      });
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = ['seo-specialist', 'social-media-specialist', 'content-writing-specialist'];

  return (
    <main className="inner-page">
      <section className="hire-digital-marketer">
        <div className="container">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.replace(/-/g, ' ').toUpperCase()}
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div
              key={tab}
              id={tab}
              className={`tab-content ${activeTab === tab ? 'active' : ''}`}
              style={{ display: activeTab === tab ? 'block' : 'none' }}
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="video-container">
                    <video loop muted>
                      <source src={`/videos/${tab.split('-')[0]}.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div className="row pricing-boxes">
                {['Basic', 'Advanced', 'Enterprise'].map((level, index) => (
                  <div key={index} className="col-md-4">
                    <div className="pricing-box">
                      <h4>{`${level} ${tab.replace(/-/g, ' ')}`}</h4>
                      <p>£{600 + index * 200}/3Hrs per Day</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hire-digital-services" id="services">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="services-left">
                <h2>Digital Marketing Expertise At Your Fingertips</h2>
                <h3>Looking for Digital Marketing Experts to Elevate Your Campaign?</h3>
                <p>
                  Boost your online presence with Xevy Media&apos;s team of seasoned Digital Marketing experts. Ready to
                  take your business to the next level? Let&apos;s talk!
                </p>
                <Link className="btn book-btn" href="/contact/">
                  Book A Free Consultation
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="services-right">
                <ul>
                  {[
                    { icon: MagnifyingGlass, label: 'SEO Experts' },
                    { icon: Browser, label: 'PPC Experts' },
                    { icon: User, label: 'CRO Experts' },
                    { icon: ShoppingCart, label: 'Ecommerce Experts' },
                    { icon: Envelope, label: 'Email Marketing Experts' },
                    { icon: VideoCamera, label: 'Video Marketing Experts' },
                  ].map(({ icon: Icon, label }, index) => (
                    <li key={index}>
                      <Icon size={32} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HireSections;
