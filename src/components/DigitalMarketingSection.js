import React, { useState, useEffect } from "react";

const DigitalMarketingSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "/img/others/digital-1.png", alt: "Digital Marketing SEO services image" },
    { src: "/img/others/digital-2.png", alt: "PPC advertising campaign image" },
    { src: "/img/others/digital-3.png", alt: "Social media management and content marketing image" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <section className="digital-pr">
      <div className="container">
        <div className="row mob-row-reverse">
          <div className="col-md-6">
            <h3>Digital Marketing</h3>
            <p>
              At Xevy Media, we provide a comprehensive range of digital marketing services to elevate your brand and drive results. Our offerings include SEO for improved visibility, PPC advertising to attract targeted traffic, and social media management for audience engagement. We also specialize in content marketing, email marketing, and web design and development to create visually appealing and conversion-optimized websites. Let us help you navigate the digital landscape and achieve your business goals!
            </p>
          </div>
          <div className="col-md-6">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`cen-img fade-img img-fluid ${index === currentImage ? "show" : ""}`}
                style={{
                  opacity: index === currentImage ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
