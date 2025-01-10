import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
            { title: "Fairplay", img: "/img/thumbnails/th-5.png", link: "https://fairplayorginal.shop/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular betting exchange." },
            { title: "Lotus365", img: "/img/thumbnails/th-7.png", link: "https://orginallotus-365.live/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular betting exchange." },
            { title: "Reddyannabook", img: "/img/thumbnails/th-8.png", link: "https://redyy-anna.life/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular betting exchange." },
            { title: "Winbuzz", img: "/img/thumbnails/th-9.png", link: "https://win-buzz.buzz/", category: "Web Design & Development", description: "A visually stunning and user-friendly website designed to most trusted and popular betting exchange." },
            // Add other slides here...
          ].map((slide, index) => (
            <div key={index} className="work-item">
              <img src={slide.img} alt={`Thumbnail of the ${slide.title} project`} className="work-thumbnail" />
              <div className="work-details">
                <h3>{slide.title}</h3>
                <p className="category">{slide.category}</p>
                <p className="description">{slide.description}</p>
                <a href={slide.link} className="btn" target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default RecentWork;
