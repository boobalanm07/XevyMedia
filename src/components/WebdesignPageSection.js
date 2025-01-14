import ContactSection from './ContactSection';
import WebdesignPricing from './WebdesignPricing';
import Image from 'next/image'; // Importing the Image component

const WebdesignPageSection = () => {
    return (
        <>
            <main className="inner-page">
                <section className="webdesign-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 webdesign-content">
                                <h3>The Best Web Design Agency in the UK</h3>
                                <p>
                                    We are a full-service agency, providing a wide range of services including digital marketing, bespoke web design, app development, video production, 3D modelling, software development, branding and more.
                                </p>
                            </div>
                            <div className="webdesign-video-wrapper col-md-6">
                                <video autoPlay loop muted>
                                    <source src="/videos/web-design.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                <WebdesignPricing />

                {/* How We Do It Section */}
                <section className="how-we-do-it">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 image">
                                <Image
                                    src="/img/others/how-we-do.png"
                                    className="img-fluid"
                                    alt="How we develop websites"
                                    width={500} // Set a fixed width (adjust as needed)
                                    height={300} // Set a fixed height (adjust as needed)
                                />
                            </div>
                            <div className="col-md-6">
                                <h3>How We Do It</h3>
                                <p>
                                    Website development starts with us understanding your business and goals for your website. We then develop a precise plan based on your specific needs and requirements. In addition to using web standards and modern-day development frameworks, we also take care to design your website in a modern and sleek manner that looks great on all devices & browsers so it’s fully scalable (responsive) and user-friendly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Passionate Section */}
                <section className="passionate">
                    <div className="container">
                        <div className="row align-items-center mob-row-reverse">
                            <div className="col-md-6">
                                <h3>We’re passionate about website design and development.</h3>
                                <p>
                                    We specialise in designing and building new websites and mobile applications, including updating and refreshing existing websites. Our team of web development experts have years of experience designing and developing websites for businesses of all sizes.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <video autoPlay loop muted>
                                    <source src="/videos/webdesign.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Interface Section */}
                <section className="user-interface">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 image">
                                <Image
                                    src="/img/others/ui-img.gif"
                                    className="img-fluid"
                                    alt="User Interface Design"
                                    width={500} // Set a fixed width (adjust as needed)
                                    height={300} // Set a fixed height (adjust as needed)
                                />
                            </div>
                            <div className="col-md-6">
                                <h3>Website Design – User Interface (UI)</h3>
                                <p>
                                    UI design considers the best possible way to present your website and considers things like the look, feel, and interactivity. Colours, text, buttons, animations all form part of this design process and must align with your brand tone and guidelines so your website is the perfect representation of your brand. Ensuring the user interface is intuitive and joined up means your website is designed in the best way possible to optimise on the opportunities for visitors to complete a desired action.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </main>
        </>
    );
};

export default WebdesignPageSection;
