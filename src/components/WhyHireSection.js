import { useState, useEffect } from 'react';
import styles from '../styles/WhyHireSection.module.css'; // Using CSS modules (optional, or you can keep the global CSS)

// This component is used in Next.js as a regular React component
const WhyHireSection = () => {
  const [activeContent, setActiveContent] = useState(1); // Default active content is content-5
  const [autoMove, setAutoMove] = useState(true); // Flag to handle auto-movement

  useEffect(() => {
    if (autoMove) {
      const interval = setInterval(() => {
        setActiveContent(prev => (prev === 6 ? 1 : prev + 1)); // Loop through content 1 to 6
      }, 5000); // Move every 5 seconds
      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [autoMove]);

  const handleCircleClick = (contentId) => {
    setActiveContent(contentId);
    setAutoMove(true); // Stop auto-move when the user clicks
  };

  return (
    <section className="why-hire-section">
      <div className="container">
        <div className="why-hire-numbers">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className={`circle ${activeContent === num ? 'active' : ''}`}
              onClick={() => handleCircleClick(num)}
            >
              {num}
            </div>
          ))}
        </div>
        
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            id={`content-${num}`}
            className={`why-hire-content ${activeContent === num ? 'active' : ''}`}
          >
            <div className="row">
              <div className="col-md-4 icon-heading">
                <i className={`fa ${getIconClass(num)}`}></i>
                <h4>{getHeading(num)}</h4>
              </div>
              <div className="col-md-8">
                <p>{getContentText(num)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const getIconClass = (num) => {
  switch (num) {
    case 1:
      return 'fa-lightbulb-o';
    case 2:
      return 'fa-thumbs-up';
    case 3:
      return 'fa-rocket';
    case 4:
      return 'fa-users';
    case 5:
      return 'fa-shield';
    case 6:
      return 'fa-line-chart';
    default:
      return '';
  }
};

const getHeading = (num) => {
  switch (num) {
    case 1:
      return 'Expertise and Experience';
    case 2:
      return 'High-Quality Content';
    case 3:
      return 'SEO Optimization';
    case 4:
      return 'Customized Solutions';
    case 5:
      return 'Consistent Output';
    case 6:
      return 'Cost-Effective';
    default:
      return '';
  }
};

const getContentText = (num) => {
  switch (num) {
    case 1:
      return 'Our team of professional writers boasts years of experience across various industries. We understand the nuances of effective communication and know how to craft compelling content that resonates with your target audience. By leveraging our expertise, you ensure that your content is not only well-written but also strategically aligned with your business goals.';
    case 2:
      return 'Quality is at the core of everything we do. Our content writing services guarantee meticulously researched, well-structured, and error-free content. We adhere to the highest standards of writing, ensuring that every piece we produce enhances your brand’s credibility and engages your readers.';
    case 3:
      return 'In today’s digital landscape, visibility is key. Our writers are well-versed in SEO best practices and integrate relevant keywords naturally into your content. This helps improve your search engine rankings and drives organic traffic to your website, ensuring your message reaches a wider audience.';
    case 4:
      return 'We recognize that every business is unique. That’s why we offer personalized content writing solutions tailored to your specific needs and objectives. Whether you need blog posts, website copy, product descriptions, or any other type of content, we create customized pieces that reflect your brand’s voice and resonate with your audience.';
    case 5:
      return 'Maintaining a consistent content schedule is crucial for keeping your audience engaged and improving your search engine rankings. Our team ensures timely delivery of high-quality content, allowing you to keep your content calendar full and your audience engaged without the stress of constant content creation.';
    case 6:
      return 'Hiring a professional content writing service is a cost-effective solution for high-quality content creation. Instead of spending time and resources on recruiting, training, and managing in-house writers, you can rely on our skilled team to provide top-notch content that meets your needs, freeing you to focus on other aspects of your business.';
    default:
      return '';
  }
};

export default WhyHireSection;
