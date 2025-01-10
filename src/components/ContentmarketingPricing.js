import { Check } from 'phosphor-react';
import React from 'react';

const ContentmarketingPricing = () => {
  const pricingPlans = [
    {
      title: 'Initial Audit',
      price: '£150',
      features: [
        'Blog Writing 4(500 words)',
        'Article Writing 16 (700 words)',
        'Keyword Descriptions 25-30',
        'Guest Posting 4 (700 words)',
        'Press Release 4 (400 words)',
        '5 page website',
        '500 words each page'
      ],
      highlight: false
    },
    {
      title: 'Business',
      price: '£320',
      features: [
        'Blog Writing 7(500 words)',
        'Article Writing 16 (700 words)',
        'Keyword Descriptions 25-30',
        'Guest Posting 4 (700 words)',
        'Press Release 4 (400 words)',
        '10 page website',
        '500 words each page',
        'Customized Plan'
      ],
      highlight: true
    },
    {
      title: 'Enterprise',
      price: '£450',
      features: [
        'Blog Writing 16(500 words)',
        'Article Writing 16 (700 words)',
        'Keyword Descriptions 25-30',
        'Guest Posting 4 (700 words)',
        'Press Release 4 (400 words)',
        '15 page website',
        'E-commerce Website',
        '500 words each page',
        'Customized Plan'
      ],
      highlight: false
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h4>Our Pricing</h4>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-box col-md-4 ${plan.highlight ? 'highlight' : ''}`}>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p><span>All prices + VAT</span></p>
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}> <Check size={32} /> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentmarketingPricing;
