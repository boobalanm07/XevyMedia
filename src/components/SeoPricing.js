import dynamic from 'next/dynamic';

const Check = dynamic(() => import('phosphor-react').then((mod) => mod.Check), { ssr: false });

const SeoPricingSection = () => {
  const plans = [
    {
      name: 'Silver',
      price: '£ 850',
      features: [
        '10 Keywords',
        'Website Analysis',
        'Competitor Research',
        'Keywords Research',
        'Title Tag Optimization',
        'Meta Tags Optimization',
        'Image Alt Tag Optimization',
        'Content Optimization',
        'SEO Friendly URL Re writing',
        'Internal Linking Structure Analysis',
        'Robot.Txt Creation',
        'XML Sitemap Creation',
        'Google Analytics Setup',
        'Sitemap Submission',
        'Search Engine Submissions',
        '100 Directory Submissions',
        '10 Local Listing Submissions',
        '10 Blogs & articles Submission',
        '40 Social Bookmarking',
        'Monthly Activity/Keyword Rankings',
        'Monthly Website Traffic Analysis',
        'Email Support',
        'Telephone Support',
      ],
      highlight: false,
    },
    {
      name: 'Gold',
      price: '£ 1250',
      features: [
        '20 Keywords',
        'Website Analysis',
        'Competitor Research',
        'Keywords Research',
        'Title Tag Optimization',
        'Meta Tags Optimization',
        'Image Alt Tag Optimization',
        'Content Optimization',
        'SEO Friendly URL Re writing',
        'Internal Linking Structure Analysis',
        'Robot.Txt Creation',
        'XML Sitemap Creation',
        'Google Analytics Setup',
        'Sitemap Submission',
        'Search Engine Submissions',
        '150 Directory Submissions',
        '15 Local Listing Submissions',
        '15 Blogs & articles Submission',
        '60 Social Bookmarking',
        'Monthly Activity/Keyword Rankings',
        'Monthly Website Traffic Analysis',
        'Email Support',
        'Telephone Support',
      ],
      highlight: true,
    },
    {
      name: 'Premium Plan',
      price: '£ 1700',
      features: [
        '30 Keywords',
        'Website Analysis',
        'Competitor Research',
        'Keywords Research',
        'Title Tag Optimization',
        'Meta Tags Optimization',
        'Image Alt Tag Optimization',
        'Content Optimization',
        'SEO Friendly URL Re writing',
        'Internal Linking Structure Analysis',
        'Robot.Txt Creation',
        'XML Sitemap Creation',
        'Google Analytics Setup',
        'Sitemap Submission',
        'Search Engine Submissions',
        '200 Directory Submissions',
        '20 Local Listing Submissions',
        '20 Blogs & articles Submission',
        '80 Social Bookmarking',
        'Monthly Activity/Keyword Rankings',
        'Monthly Website Traffic Analysis',
        'Email Support',
        'Telephone Support',
      ],
      highlight: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <h4>Our Pricing</h4>
        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-box col-md-4 ${plan.highlight ? 'highlight' : ''}`}
            >
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price} <span>/ Monthly</span>
              </p>
              <p><span>All prices + VAT</span></p>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={32} /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoPricingSection;
