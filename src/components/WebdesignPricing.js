import { Check } from "phosphor-react";

const WebdesignPricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "£ 350",
      features: [
        { text: "Up to 5 pages", included: true },
        { text: "Custom Logo Design", included: true },
        { text: "Mobile-Responsive Design", included: true },
        { text: "High-Quality Stock Images", included: true },
        { text: "Bespoke Home Page Design", included: true },
        { text: "AI-Enhanced Content Creation", included: true },
        { text: "Integrated Blog Setup", included: false },
        { text: "Social Media Integration", included: false },
        { text: "WordPress CMS", included: false },
        { text: "Basic SEO", included: true },
      ],
    },
    {
      title: "Standard",
      price: "£ 550",
      features: [
        { text: "Up to 7 pages", included: true },
        { text: "Custom Logo Design", included: true },
        { text: "Mobile-Responsive Design", included: true },
        { text: "High-Quality Stock Images", included: true },
        { text: "Bespoke Home Page Design", included: true },
        { text: "AI-Enhanced Content Creation", included: true },
        { text: "Integrated Blog Setup", included: true },
        { text: "Social Media Integration", included: true },
        { text: "WordPress CMS", included: true },
        { text: "Advanced SEO", included: true },
      ],
    },
    {
      title: "Advanced",
      price: "£ 700",
      features: [
        { text: "Up to 14 pages", included: true },
        { text: "Custom Logo Design", included: true },
        { text: "Mobile-Responsive Design", included: true },
        { text: "High-Quality Stock Images", included: true },
        { text: "Bespoke Home Page Design", included: true },
        { text: "AI-Enhanced Content Creation", included: true },
        { text: "Integrated Blog Setup", included: true },
        { text: "Social Media Integration", included: true },
        { text: "WordPress CMS", included: true },
        { text: "Extensive SEO", included: true },
      ],
    },
  ];

  return (
    <section className="pricing-section webdesign">
      <div className="container">
        <h4>
          We're not just another web design agency. We're a team of creative
          wizards, design maestros, and tech geniuses passionate about creating
          exceptional websites that stand out from the crowd. We give brands an
          unfair advantage.
        </h4>
        <p>
          A website is more than just a digital presence; it represents your
          brand, vision, and values. That's why we work closely with our clients
          to understand their unique needs and create bespoke websites that
          reflect their personalities and ethos.
        </p>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              className={`pricing-box col-md-4 ${
                index === 1 ? "highlight" : ""
              }`}
              key={plan.title}
            >
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p>
                <span>All prices + VAT</span>
              </p>
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={32} />{" "}
                    {feature.included ? <b>{feature.text}</b> : feature.text}
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

export default WebdesignPricing;
