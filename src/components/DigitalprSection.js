import React, { useState, useEffect } from 'react';
import DigitalMarketingSection from './DigitalMarketingSection';

const DigitalprSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "/img/others/tv-1.png",
      alt: "TV Advertising Image 1 showcasing a TV with a broadcast ad"
    },
    {
      src: "/img/others/tv-2.png",
      alt: "TV Advertising Image 2 showing a modern TV screen with an ad"
    },
    {
      src: "/img/others/tv-3.png",
      alt: "TV Advertising Image 3 depicting a broadcast advertisement on a TV"
    }
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]); // Include images.length as a dependency

  return (
    <>
    <DigitalMarketingSection />
    <main className="inner-page">
      <section className="broadcast">
        <div className="container">
          <div className="row">
            <div className="col-md-6 image">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`cen-img fade-img ${currentImage === index ? 'show' : ''}`}
                  style={{ transition: 'opacity 1s ease-in-out', opacity: currentImage === index ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="col-md-6">
              <h2>Broadcast TV Advertising</h2>
              <p>
                Broadcast TV channels are still champions of reach and scale even though some digital channels are coming close.
                TV adverts provide scale, trust, reputation, and frequency, and if tied in with a great message, unparalleled efficacy.
              </p>
              <p>
                There are a range of options across multiple broadcast networks and TV channels, from daytime TV to sponsorships.
                We’re a team of TV buying and planning specialists with experience with some of the largest brands in the world. Get in touch for a bespoke schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="app-based">
        <div className="container">
          <div className="row mob-row-reverse">
            <div className="col-md-6">
              <h2>App-Based Streaming Service</h2>
              <p>
                Audio stands out as the channel experiencing the most rapid growth year after year, notably on platforms like Spotify and Podcasts.
                Its presence extends across an increasing number of moments, life activities, and devices. Whether you're on Spotify, Netflix, or other streaming services,
                these are pivotal opportunities to convey your message effectively. Your audience is highly engaged, awaiting your message.
              </p>
            </div>
            <div className="col-md-6 image">
              {[
                { src: "/img/others/ott-1.png", alt: "App-based Service Image 1 showing a mobile device streaming an audio service" },
                { src: "/img/others/ott-2.png", alt: "App-based Service Image 2 with a person listening to an app-based service" },
                { src: "/img/others/ott-3.png", alt: "App-based Service Image 3 depicting a laptop streaming an audio app" }
              ].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`cen-img fade-img ${currentImage === index ? 'show' : ''}`}
                  style={{ transition: 'opacity 1s ease-in-out', opacity: currentImage === index ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="wall-mural">
        <div className="container">
          <div className="row">
            <div className="col-md-6 image">
              {[
                { src: "/img/others/wall-1.png", alt: "Wall Mural Image 1 showcasing a vibrant outdoor mural" },
                { src: "/img/others/wall-2.png", alt: "Wall Mural Image 2 showing a large creative mural on a city wall" },
                { src: "/img/others/wall-3.png", alt: "Wall Mural Image 3 with a colorful city wall mural" }
              ].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`cen-img fade-img ${currentImage === index ? 'show' : ''}`}
                  style={{ transition: 'opacity 1s ease-in-out', opacity: currentImage === index ? 1 : 0 }}
                />
              ))}
            </div>
            <div className="col-md-6">
              <h2>Wall Mural Advertising</h2>
              <p>
                Wall Mural Advertising transforms ordinary spaces into extraordinary brand experiences. By turning large outdoor walls into stunning, artistic billboards,
                your brand gains unique, eye-catching exposure. These murals leave a lasting impression and offer high-impact, long-term visibility that resonates with local audiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ooh-Campaigns">
  <div className="container">
    <div className="row">
    <div className="col-md-6">
        <h2>OOH Advertising Campaigns</h2>
        <p>
          Out-of-Home (OOH) Advertising Campaigns deliver impactful messages through large-scale visuals like billboards and transit ads. 
          These campaigns effectively capture attention in high-traffic areas, ensuring your brand gains maximum visibility and reach.
        </p>
      </div>
      <div className="col-md-6 image">
        {[
          { src: "/img/others/ooh-1.png", alt: "OOH Advertising Image 1 showcasing a billboard in a bustling city center" },
          { src: "/img/others/ooh-2.png", alt: "OOH Advertising Image 2 showing a creative advertisement on a building wall" },
          { src: "/img/others/ooh-3.png", alt: "OOH Advertising Image 3 featuring a highway billboard with a vibrant design" }
        ].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`cen-img fade-img ${currentImage === index ? 'show' : ''}`}
            style={{ transition: 'opacity 1s ease-in-out', opacity: currentImage === index ? 1 : 0 }}
          />
        ))}
      </div>

    </div>
  </div>
    </section>
      <section className="voh-Campaigns">
  <div className="container">
    <div className="row">
      <div className="col-md-6 image">
        {[
          { src: "/img/others/voh-1.png", alt: "VOH Advertising Image 1 showcasing a creative bus shelter advertisement" },
          { src: "/img/others/voh-2.png", alt: "VOH Advertising Image 2 featuring a train station with vibrant promotional material" },
          { src: "/img/others/voh-3.png", alt: "VOH Advertising Image 3 showing an illuminated display in an urban area" }
        ].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`cen-img fade-img ${currentImage === index ? 'show' : ''}`}
            style={{ transition: 'opacity 1s ease-in-out', opacity: currentImage === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="col-md-6">
        <h2>VOH Advertising Campaigns</h2>
        <p>
          Voice-Out-of-Home (VOH) Advertising Campaigns provide innovative engagement opportunities by combining visuals and auditory elements. 
          These campaigns create immersive experiences, connecting with audiences on multiple levels and leaving a lasting impression.
        </p>
      </div>
    </div>
  </div>
     </section>

    </main>
    </>
  );
};

export default DigitalprSection;
