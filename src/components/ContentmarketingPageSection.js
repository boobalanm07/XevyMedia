import WhyHireSection from './WhyHireSection';
import ContentmarketingPricing from './ContentmarketingPricing';
import Educates from './Educates';
import OurWorkProcess from './OurWorkProcess';
import ContactSection from './ContactSection';

const ContentmarketingPageSection = () => {
  return (
    <>
      <section className="full-width-video-container">
        <video className="full-width-video" autoPlay muted loop>
          <source src="/videos/content-marketing.mp4" type="video/mp4" />
        </video>
      </section>

      <main className="inner-page">
        <WhyHireSection />
        <ContentmarketingPricing />
        
        <section className="content-marketing">
          <div className="why-all">
            <div className="container">
              <div className="why-row">
                <div className="row">
                  <div className="col-sm-12 heading">
                    <h3 className="small-title">Content Writing Services We Offer</h3>
                    <p>
                      Choose Xevy Media as your digital marketing partner to unlock your brand’s full potential.
                      Together, we can create impactful strategies that drive engagement, foster growth, and deliver real results.
                    </p>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-sm-6 content-marketing">
                    <div className="why-text text-left">
                      <img 
                        src="/img/others/cont-mark-serv.png" 
                        alt="Graphic Design Services" 
                        loading="lazy" 
                        className="img-fluid" 
                      />
                    </div>
                  </div>
                  
                  <div className="col-sm-6 why-content-opacity">
                    <div className="why-content visible" style={{ transitionDelay: '0ms' }}>
                      <h4>Website Copywriting</h4>
                      <p>
                        Our website copywriting service is designed to create engaging and persuasive content that captivates visitors and drives conversions.
                        We craft clear and concise copy for landing pages, service descriptions, and about pages, ensuring that your website effectively communicates your brand’s value proposition and encourages users to take action.
                      </p>
                    </div>
                    
                    <div className="why-content visible" style={{ transitionDelay: '0ms' }}>
                      <h4>Blog and Article Writing</h4>
                      <p>
                        Regularly publishing high-quality blog posts and articles is essential for establishing your authority and engaging your audience.
                        Our team of skilled writers produces informative and engaging content tailored to your industry and audience. We conduct thorough research to ensure that each piece is relevant and insightful, helping you drive traffic and boost SEO.
                      </p>
                    </div>
                    
                    <div className="why-content visible" style={{ transitionDelay: '0ms' }}>
                      <h4>SEO Content Writing</h4>
                      <p>
                        Our SEO content writing service focuses on creating content optimized for search engines while maintaining readability and engagement for your audience.
                        We incorporate targeted keywords, optimize headings and meta descriptions, and structure your content to improve search engine rankings and attract organic traffic.
                      </p>
                    </div>
                    
                    <div className="why-content">
                      <h4>Social Media Content</h4>
                      <p>
                        In today’s digital landscape, social media is a powerful tool for connecting with your audience.
                        Our social media content writing services help you develop captivating posts, captions, and strategies that resonate with your followers.
                        We create shareable content that encourages engagement, builds brand awareness, and fosters community interaction.
                      </p>
                    </div>
                    
                    <div className="why-content">
                      <h4>Technical Writing</h4>
                      <p>
                        For businesses in specialized industries, our technical writing services provide clear, accurate, and concise documentation.
                        We create user manuals, product descriptions, and technical guides that simplify complex information, making it accessible to your target audience.
                        Our writers ensure that the content adheres to industry standards and effectively communicates key concepts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="power-of-words">
          <div className="container">
            <h2>Power Of Words</h2>
            <p>
              Words have the ability to inspire, engage, and persuade. Our team
              harnesses the power of language to create compelling content that drives
              results. Discover how our expertise can elevate your brand's message.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="power-box">
                  <div className="icon">
                    <i className="fa fa-pencil" />
                  </div>
                  <h4>Stand out from the competitors</h4>
                  <p>
                    As every business strives to gain attention, appealing and
                    eye-catching content is a great way to stand out and stay ahead.
                    Our experienced content writers assure you to provide only the best
                    that works for you.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="power-box">
                  <div className="icon">
                    <i className="fa fa-bullhorn" />
                  </div>
                  <h4>Easy communication</h4>
                  <p>
                    Relevant content posted regularly is a great way to humanize your
                    brand and interact with the customers. Our writers use the right
                    words to create content that draws your visitor’s attention and
                    converts them to customers.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="power-box">
                  <div className="icon">
                    <i className="fa fa-comments" />
                  </div>
                  <h4>Leave a great impression</h4>
                  <p>
                    As every business strives to gain attention, appealing and
                    eye-catching content is a great way to stand out and stay ahead. Our
                    experienced content writers assure you to provide only the best that
                    works for you.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="power-box">
                  <div className="icon">
                    <i className="fa fa-briefcase" />
                  </div>
                  <h4>Reach potential audience</h4>
                  <p>
                    Relevant content posted regularly is a great way to humanize your
                    brand and interact with the customers. Our writers use the right
                    words to create content that draws your visitor’s attention and
                    converts them to customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Educates />
        <OurWorkProcess />
        
        <section className="marketers-percentage">
          <div className="container">
            <h2 className="section-heading">Did You Know?</h2>
            <div className="row">
              <div className="col-md-3 marketer-box">
                <img
                  src="https://xevy.io/wp-content/themes/xevy/img/others/60.png"
                  alt="Marketer 1"
                  className="img-fluid"
                />
                <p>No of marketers create one content per day.</p>
              </div>
              <div className="col-md-3 marketer-box">
                <img
                  src="https://xevy.io/wp-content/themes/xevy/img/others/90.png"
                  alt="Marketer 2"
                  className="img-fluid"
                />
                <p>No of marketers use content marketing to create inbound leads</p>
              </div>
              <div className="col-md-3 marketer-box">
                <img
                  src="https://xevy.io/wp-content/themes/xevy/img/others/93.png"
                  alt="Marketer 3"
                  className="img-fluid"
                />
                <p>No of B2B marketers use content marketing.</p>
              </div>
              <div className="col-md-3 marketer-box">
                <img
                  src="https://xevy.io/wp-content/themes/xevy/img/others/42.png"
                  alt="Marketer 4"
                  className="img-fluid"
                />
                <p>No of marketers say content marketing is effective.</p>
              </div>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
    </>
  );
};

export default ContentmarketingPageSection;
