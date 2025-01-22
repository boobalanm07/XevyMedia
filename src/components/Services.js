import React from 'react';
import Link from 'next/link'; // Use Next.js Link component
import Image from 'next/image'; // Import Next.js Image component
import { Swatches, ArticleNyTimes, DeviceMobile, ShareNetwork, Browsers, HandPointing } from 'phosphor-react'; // Import icons

const services = [
  {
    to: '/web-design',
    icon: <Swatches size={32} />, // Use the imported icon component
    label: 'Web Design',
    angle: '0deg',
  },
  {
    to: '/content-marketing',
    icon: <ArticleNyTimes size={32} />, // Use the imported icon component
    label: 'Content marketing',
    angle: '60deg',
  },
  {
    to: '/mobile-application',
    icon: <DeviceMobile size={32} />, // Use the imported icon component
    label: 'Mobile application',
    angle: '120deg',
  },
  {
    to: '/paid-social-media',
    icon: <ShareNetwork size={32} />, // Use the imported icon component
    label: 'Social Media',
    angle: '180deg',
  },
  {
    to: '/seo',
    icon: <Browsers size={32} />, // Use the imported icon component
    label: 'SEO',
    angle: '240deg',
  },
  {
    to: '/ppc',
    icon: <HandPointing size={32} />, // Use the imported icon component
    label: 'PPC',
    angle: '300deg',
  },
];

function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="container">
        <h4>Discover</h4>
        <h3 id="services-heading">Our Services</h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center position-relative">
            <div className="service-circle-wrapper">
              {services.map((service, index) => (
                <div
                  className="service-item"
                  style={{ '--angle': service.angle }}
                  key={index}
                >
                  <Link href={service.to}>
                    <div className="service-icon">
                      {service.icon}  {/* Render the icon here */}
                    </div>
                    <p>{service.label}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="center-image">
              <Image
                src="/img/others/services-center-image.png"
                alt="Illustration of Gear and Girl"
                loading="lazy"
                className="gear-girl"
                width={400} // Add width and height for Image optimization
                height={450} // Adjust as needed for your image dimensions
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
