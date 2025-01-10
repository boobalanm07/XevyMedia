import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company Inc.",
      quote: "Working with Xevy Media has transformed our online presence. Their innovative strategies and attention to detail have significantly increased our engagement and sales. I highly recommend them to any business looking to grow!",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager, Business Corp.",
      quote: "Xevy Media exceeded our expectations. Their team developed a tailored marketing plan that delivered outstanding results. Thanks to their expertise, we've seen a remarkable boost in our brand visibility.",
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director, BrightFuture Solutions",
      quote: "Working with Xevy Media has transformed our online presence. Their innovative strategies and attention to detail have significantly increased our engagement and sales. I highly recommend them to any business looking to grow!",
    },
    {
      name: "David Chen",
      position: "CEO, Tech Innovations Inc.",
      quote: "Xevy Media exceeded our expectations. Their team developed a tailored marketing plan that delivered outstanding results. Thanks to their expertise, we've seen a remarkable boost in our brand visibility.",
    },
    {
      name: "Emily Thompson",
      position: "Owner, Eco-Friendly Products Co",
      quote: "We were impressed with Xevy Media’s professionalism and creativity. They helped us reach our target audience effectively and improve our conversion rates. We're thrilled with the partnership!",
    },
  ];

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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-slider">
      <div className="container">
        <div className="text-center">
          <h4>Our Clients</h4>
          <h3>Success Stories</h3>
        </div>
        {/* React Slick Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-box">
              <div className="star-rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p>{testimonial.quote}</p>
              <h4>{testimonial.name}</h4>
              <h5>{testimonial.position}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
