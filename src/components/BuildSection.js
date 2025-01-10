import React from 'react';
import Link from 'next/link';
import { AppStoreLogo, Article, EnvelopeOpen, HandPointing, MagnifyingGlass, MonitorPlay, Share, ShareNetwork, Strategy } from 'phosphor-react';

const BuildSection = () => {
  const services = [
    {
      icon: <ShareNetwork size={64} />,
      title: "Social Media Marketing",
      description: "Can your business grow without Social Media marketing? Our Social Media Marketing experts ensure that your brand is represented across all Social Media Channels via high-quality content.",
      to: '/contact'
    },
    {
      icon: <MagnifyingGlass size={64} />,
      title: "Search Engine Optimization",
      description: "Our SEO experts optimize old and new content for search engines so that your brand name pops up every time someone searches for your specialty products.",
      to: '/contact'
    },
    {
      icon: <Strategy size={64} />,
      title: "Conversion Rate Optimization",
      description: "Our Digital Marketing experts analyze audience preferences, conduct A/B tests, and make data-driven adjustments to your website, landing pages, and digital marketing campaigns to increase visitor count and conversions.",
      to: '/contact'
    },
    {
      icon: <HandPointing size={64} />,
      title: "Pay Per Click (PPC) Ads",
      description: "Our PPC experts create ad copies, manage budgets, and monitor ad performance to ensure a positive ROI for your startup.",
      to: '/contact'
    },
    {
      icon: <EnvelopeOpen size={64} />,
      title: "Email Marketing",
      description: "Our email marketing experts create effective email marketing campaigns to reach a wider audience and keep subscribers posted on the latest happenings in your business.",
      to: '/contact'
    },
    {
      icon: <MonitorPlay size={64} />,
      title: "Video Marketing",
      description: "So, you want to go viral on social media? By producing stunning video content tailored to your brand, our Digital Marketing experts turn your business into an instant hit among potential buyers.",
      to: '/contact'
    },
    {
      icon: <Article size={64} />,
      title: "Content Marketing",
      description: "Our Digital Marketing experts work with content creators to produce catchy written and audiovisual content for the target audience.",
      to: '/contact'
    },
    {
      icon: <AppStoreLogo size={64} />,
      title: "App Store Optimization",
      description: "Our Digital Marketing experts optimize your mobile apps for increased visibility on iTunes Store and Google Play Store. This means higher rankings of your apps in search results, more downloads, and more revenue for your business.",
      to: '/contact'
    },
    {
      icon: <Share size={64} />,
      title: "Affiliate Marketing",
      description: "Our affiliate marketing experts promote your products through various online channels like websites, social media, email marketing, etc. This way you can reach a wider audience via a vast network of affiliates and keep your cash register ringing.",
      to: '/contact'
    }
  ];

  return (
    <section className="build-section" id="brand">
      <div className="container">
        <div className="row heading">
          <h3>Build Your Brand with Remote Digital Marketing Experts from Remote Resource?</h3>
          <p>Think of us as your very own Social Media Marketing agency in UK.</p>
        </div>
        <div className="row build-section-items">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className='item'>
                {service.icon}
                <h5>{service.title}</h5>
                <p className="text">{service.description}</p>
                <p>
                <Link href={service.to}>
                    <button className="btn btn-pri">Get a Quote</button>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
