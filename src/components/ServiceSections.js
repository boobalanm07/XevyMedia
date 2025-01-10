import Link from 'next/link';

const ServicesPageSection = () => {
  return (
    <>
      {/* Full-Width Video Section */}
      <section className="full-width-video-container">
        <video className="full-width-video" autoPlay muted loop>
          <source src="/videos/services-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Services Section */}
{/* Services Section */}
<section className="container inner-services digital">
  <div className="row">
    <div className="col-md-3">
      <h2>Digital <br />Marketing</h2>
    </div>
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-12">
          <p>
            Discover the range of services we offer to help you achieve your business goals. From digital marketing to web development, we provide comprehensive solutions tailored to your needs.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/seo" legacyBehavior>
              <a>
                <span>SEO</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/ppc" legacyBehavior>
              <a>
                <span>PPC</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/web-design" legacyBehavior>
              <a>
                <span>Web Design & Development</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/paid-social-media" legacyBehavior>
              <a>
                <span>Paid Social Media</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/content-marketing" legacyBehavior>
              <a>
                <span>Content Marketing</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/mobile-application" legacyBehavior>
              <a>
                <span>Mobile Application</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="inner-service-item">
            <Link href="/digital-pr" legacyBehavior>
              <a>
                <span>Digital PR</span>
                <span className="icon">→</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <div className="container">
        <div className="divider-section"></div>
      </div>

      {/* Creative Work Section */}
      <section className="container inner-services creative">
        <div className="row">
          <div className="col-md-3">
            <h2>Creative <br />Work</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Are you looking to capture your audience's attention and drive growth for your business? With a focus on delivering fresh, innovative solutions, we can help you stand out from the competition and connect with your customers in a meaningful way.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="inner-service-item"><span>Branding</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Web Design</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Advertising</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Copywriting</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Video</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Audio</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider-section"></div>
      </div>

      {/* Strategy & Planning Section */}
      <section className="container inner-services strategy">
        <div className="row">
          <div className="col-md-3">
            <h2>Strategy & <br />Planning</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <p>
                  We offer comprehensive strategy and development services that are tailored to your unique business needs. With a focus on identifying and leveraging your strengths, while addressing any weaknesses, we can help you create a clear, actionable plan for success.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="inner-service-item"><span>Audience Profiling</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Research</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Data Analysis</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Strategic Planning</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Media Planning & Buying</span></div>
              </div>
              <div className="col-md-4">
                <div className="inner-service-item"><span>Brand Strategy</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPageSection;
