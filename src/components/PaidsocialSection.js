import React from 'react';

const PaidsocialPageSection = () => {
  return (
    <>
      <section className="smm-section">
        <div className="container">
          <div className="row mob-row-reverse">
            <div className="col-md-6 smm-content">
              <h3>Social Media Marketing</h3>
              <p>We know how to make your business stand out on social media. Our expert team specialises in crafting custom social media strategies that drive results. From preparing engaging content to targeted ad campaigns, we&apos;ll help you reach and connect with your ideal audience.</p>

              <div className="row">
                <div className="col-md-4">
                  <span className="highlight-txt">10+</span>
                  <br />
                  <p>Different industries</p>
                </div>
                <div className="col-md-4">
                  <span className="highlight-txt">560%</span>
                  <br />
                  <p>Revenue growth in first 3 months</p>
                </div>
                <div className="col-md-4">
                  <span className="highlight-txt">7.3*</span>
                  <br />
                  <p>Average Return On Investment</p>
                </div>
              </div>
            </div>

            <div className="smm-video col-md-6">
              <video autoPlay loop muted>
                <source src="/videos/social-media-marketing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <main className="inner-page">
        <section className="social-media-section">
          <div className="container">
            <h2>Elevate Your Brand and Boost Engagement with Our Strategic Social Media Campaign Management</h2>
            <p>Enhance your social media presence and build customer loyalty with our strategic social media campaign management services. Our marketing experts will work with you to develop a tailored social media strategy that leverages the full potential of social media networks to drive engagement and reach.</p>

            <div className="row">
              <div className="social-box">
                <div className="icon fb">
                  <i className="fa fa-facebook"></i>
                </div>
                <h3>Facebook Marketing</h3>
                <p>Join us on Facebook to stay updated with our latest news, events, and engaging posts. Be part of our community and interact with us directly.</p>
              </div>
              <div className="social-box">
                <div className="icon insta">
                  <i className="fa fa-instagram"></i>
                </div>
                <h3>Instagram Advertising</h3>
                <p>Check out our Instagram for visual content, behind-the-scenes stories, and creative posts. Connect with us through photos and videos.</p>
              </div>
              <div className="social-box">
                <div className="icon twit">
                  <i className="fa fa-twitter"></i>
                </div>
                <h3>Twitter Promotions</h3>
                <p>Follow us on Twitter for real-time updates and insights. Engage in conversations and get quick updates on our latest activities and thoughts.</p>
              </div>
            </div>

            <div className="row">
              <div className="social-box">
                <div className="icon linked">
                  <i className="fa fa-linkedin"></i>
                </div>
                <h3>LinkedIn Strategies</h3>
                <p>Follow us on LinkedIn for professional insights, industry news, and networking opportunities. Connect with us to expand your professional network.</p>
              </div>
              <div className="social-box">
                <div className="icon youtube">
                  <i className="fa fa-youtube"></i>
                </div>
                <h3>YouTube Marketing</h3>
                <p>Subscribe to our YouTube channel for video content, tutorials, and informative videos. Stay tuned for regular updates and engaging video content.</p>
              </div>
              <div className="social-box">
                <div className="icon pin">
                  <i className="fa fa-pinterest"></i>
                </div>
                <h3>Pinterest Promotion</h3>
                <p>Follow us on Pinterest for inspirational content, creative ideas, and visual storytelling. Explore our boards and pin your favorite posts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="paid-ads-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4>Drive sales &amp; Generate Leads</h4>
                <p>Driving sales and generating leads is essential for business growth, and our targeted marketing strategies are designed to do just that. By leveraging data-driven insights and tailored campaigns, we attract potential customers and guide them through the sales funnel.</p>
                <br />
                <p>Unlock the full potential of your business with our proven strategies designed to drive sales and generate high-quality leads. At Xevy Media, we combine cutting-edge digital marketing techniques with a deep understanding of consumer behavior to attract and convert potential customers. Whether it’s through targeted ad campaigns, compelling content, or optimized landing pages, we focus on creating impactful touchpoints that resonate with your audience. Our goal is to guide your prospects through the sales funnel, turning interest into action and boosting your bottom line. With our expertise, you can expect increased conversions, enhanced customer engagement, and sustained business growth. Let us help you create a pipeline of qualified leads that drive long-term success.</p>
              </div>
              <div className="col-md-6">
                <video autoPlay loop muted className="video-background" title="Social Media Marketing">
                  <source src="/videos/social-media-marketing-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaidsocialPageSection;
