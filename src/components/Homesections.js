import Link from "next/link";
import Image from "next/image";  // Import the Image component

const HomeSections = () => {
  return (
    <>
      {/* Who We Are Section */}
      <section
        className="who-we-are"
        aria-label="About Xevy Media - Innovative Digital Marketing Agency"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="who-text">
                <h3 className="big-title">Innovative Digital</h3>
                <p className="para">
                  At Xevy Media, we are a passionate team of digital marketing
                  experts dedicated to helping businesses thrive in the
                  ever-evolving online landscape. Our agency is founded on the
                  belief that effective marketing should be accessible,
                  innovative, and results-oriented. Learn more about our services
                  and how we can assist your business in achieving its digital
                  marketing goals.
                </p>
                <Link href="/hire-digital-marketer">
                <button className="btn">Hire Digital Marketer</button> {/* Or any other element */}
                </Link>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="who-image">
                <Image
                  src="/img/others/who-we.png"
                  className="img-fluid"
                  alt="Digital marketing team at work"
                  width={600}
                  height={400}
                />
                <div className="flashlight"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="strategy-section-all">
        <div className="container">
          <div className="strategy-text-head text-center">
            <h4>Start with</h4>
            <h2>Marketing Strategy</h2>
            <p>
              At our agency, we believe that a solid marketing strategy is
              essential for success. We are dedicated to supporting our
              clients—empowering founders and marketing teams—to establish the
              robust strategic foundations needed to accelerate your marketing
              efforts.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="circle-container">
              {[
                {
                  src: "/img/others/si-1.png",
                  alt: "Market strategy visual",
                  text: "Market Strategy",
                },
                {
                  src: "/img/others/si-2.png",
                  alt: "Brand positioning visual",
                  text: "Brand Positioning",
                },
                {
                  src: "/img/others/si-3.png",
                  alt: "Brand development visual",
                  text: "Brand Development",
                },
                {
                  src: "/img/others/si-4.png",
                  alt: "Product-led growth visual",
                  text: "Product-Led Growth",
                },
                {
                  src: "/img/others/si-5.png",
                  alt: "Inbound marketing strategy visual",
                  text: "Inbound Marketing Strategy",
                },
                {
                  src: "/img/others/si-6.png",
                  alt: "Sales enablement strategy visual",
                  text: "Sales Enablement Strategy",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`sta-icon-text sp${index + 1} animated flipInY slow`}
                >
                  <Image
                    src={item.src}
                    className="img-fluid"
                    alt={item.alt}
                    width={100}
                    height={100}
                  />
                  <h6>{item.text}</h6>
                </div>
              ))}
              <div className="service-center-image text-center">
                <Image
                  src="/img/others/startegy-center-image.png"
                  className="img-fluid"
                  alt="Marketing strategy center"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
