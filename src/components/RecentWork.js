import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Import Next.js Image component

const RecentWork = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Recent Work Section */}
      <section className="recent-work-section">
        <div className="text-center">
          <h4>Recent</h4>
          <h3>Our Work</h3>
        </div>

        {/* React Slick Slider */}
        <Slider {...settings}>
          {[
            { title: "Xevyoverseas", img: "/img/thumbnails/th-1.png", link: "https://xevyoverseas.com/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular International education consultancy." },
            { title: "Xevyoverseas", img: "/img/thumbnails/th-1.png", link: "https://xevyoverseas.com/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular International education consultancy." },
            { title: "Xevyoverseas", img: "/img/thumbnails/th-1.png", link: "https://xevyoverseas.com/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular International education consultancy." },
            { title: "Xevyoverseas", img: "/img/thumbnails/th-1.png", link: "https://xevyoverseas.com/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular International education consultancy." },
            // Add other slides here...
          ].map((slide, index) => (
            <div key={index} className="work-item">
              <Image 
                src={slide.img} 
                alt={`Thumbnail of the ${slide.title} project`} 
                className="work-thumbnail" 
                width={500} // Specify width
                height={300} // Specify height
                loading="lazy" // Added for lazy loading
              />
              <div className="work-details">
                <h3>{slide.title}</h3>
                <p className="category">{slide.category}</p>
                <p className="description">{slide.description}</p>
                <a 
                  href={slide.link} 
                  className="btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default RecentWork;
