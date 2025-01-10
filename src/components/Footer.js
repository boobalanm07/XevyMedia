import Link from 'next/link';
import FloatingWhatsApp from './FloatingWhatsApp';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="get-quote-section text-center">
        <div className="get-shape">
          <img
            src="/img/others/footer-quote-bg.png"
            className="img-fluid"
            alt="Footer background"
            width="100%"
          />
        </div>
        <div className="subscribe-in">
          <h4>Ready To Start</h4>
          <h3>Let’s Make Some Magic Together.</h3>
          <Link href="/contact">
            <button className="btn btn-pri">Get a Quote</button>
          </Link>
        </div>
      </div>

      <div className="footer-sec">
        <div className="container">
          <div className="footer-link-area">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-logo">
                  <Link href="/">
                    <img
                      src="/img/others/footer-logo.png"
                      className="img-fluid"
                      alt="Footer-Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-links">
                  <h4>Quick Links</h4>
                  <ul className="list-unstyled">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/hire-digital-marketer">Hire Digital Marketer</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-links serv">
                  <h4>Services</h4>
                  <ul className="list-unstyled">
                    <li><Link href="/seo">SEO</Link></li>
                    <li><Link href="/ppc">PPC</Link></li>
                    <li><Link href="/web-design">Web Design</Link></li>
                    <li><Link href="/paid-social-media">Paid Social Media</Link></li>
                    <li><Link href="/mobile-application">Mobile Application</Link></li>
                    <li><Link href="/digital-pr">Digital PR</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="footer-links">
                  <h4>Stay in touch with us</h4>
                  <div className="footer-social">
                    <ul className="list-inline">
                      <li><Link href="https://www.facebook.com/profile.php?id=61566911672582" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></Link></li>
                      <li><Link href="https://x.com/Xevymedia" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></Link></li>
                      <li><Link href="https://www.linkedin.com/in/xevy-media-pvt-ltd-414096332/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></Link></li>
                      <li><Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-sm-9">
                <div className="copyright">
                  <div className="footer-copy-desk text-left">
                    <p>&copy; {new Date().getFullYear()} Xevy Media. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <FloatingWhatsApp />
    </>
  );
};

export default Footer;
