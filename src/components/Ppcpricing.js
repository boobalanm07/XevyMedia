import { Check } from 'phosphor-react';

const Ppcpricing = () => {
  const pricingOptions = [
    {
      title: 'Starter',
      price: '£100',
      maxBudget: '£500 per month',
      features: [
        'Free Set Up',
        'No Long Term Contracts',
        'Cancel Anytime with 31 Days Notice',
        'Upgrade Anytime',
        'Expert Management',
        'Dedicated Account Manager',
        'Search Campaigns',
        'PMax Campaigns',
        'Shopping Campaigns',
        'Google Merchant Centre',
        'Retargeting Campaigns',
        'Detailed Monthly Report',
        'E-Mail Support',
        'Support Portal',
        'Telephone Support',
      ],
      highlight: false,
    },
    {
      title: 'LITE',
      price: '£250',
      maxBudget: '£1500 per month',
      features: [
        'Free Set Up',
        'No Long Term Contracts',
        'Cancel Anytime with 31 Days Notice',
        'Upgrade Anytime',
        'Expert Management',
        'Dedicated Account Manager',
        'Search Campaigns',
        'PMax Campaigns',
        'Shopping Campaigns',
        'Google Merchant Centre',
        'Retargeting Campaigns',
        'Detailed Monthly Report',
        'E-Mail Support',
        'Support Portal',
        'Telephone Support',
      ],
      highlight: false,
    },
    {
      title: 'PRO',
      price: '£750',
      maxBudget: '£5000 per month',
      features: [
        'Free Set Up',
        'No Long Term Contracts',
        'Cancel Anytime with 31 Days Notice',
        'Upgrade Anytime',
        'Expert Management',
        'Dedicated Account Manager',
        'Search Campaigns',
        'PMax Campaigns',
        'Shopping Campaigns',
        'Google Merchant Centre',
        'Retargeting Campaigns',
        'Detailed Monthly Report',
        'E-Mail Support',
        'Support Portal',
        'Telephone Support',
      ],
      highlight: true,
    },
  ];

  return (
    <section className="pricing-section ppc">
      <div className="container">
        <h4>Professional Google Ads management for all budgets</h4>
        <p>
          We offer tailored Google Ads packages for businesses at every stage, from start-ups to industry
          leaders. We prioritise pricing transparency and honesty, setting us apart from agencies with complex,
          unclear costs.
        </p>
        <div className="row">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`pricing-box col-md-4 ${option.highlight ? 'highlight advanced' : option.title.toLowerCase()}`}
            >
              <h3>{option.title}</h3>
              <p className="price">
                {option.price} <span>/ Monthly</span>
              </p>
              <p>
                <span>All prices + VAT</span>
              </p>
              <ul className="features">
                <li>
                  <i className="ph-thin ph-check"></i>
                  <b>Maximum Google Ads Budget {option.maxBudget}</b>
                </li>
                {option.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={32} />
                    {feature}
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

export default Ppcpricing;
