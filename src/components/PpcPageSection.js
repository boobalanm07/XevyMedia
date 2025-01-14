import Image from 'next/image';
import Ppcpricing from './Ppcpricing';
import ContactSection from './ContactSection';

const PpcPageSection = () => {
    return (
        <main className="inner-page">
            <div>
                {/* Banner Section */}
                <section className="ppc-section">
                    <div className="container">
                        <div className="row mob-row-reverse">
                            <div className="col-md-6 ppc-content">
                                <Image 
                                    src="/img/others/google-logo.png" 
                                    alt="Logo" 
                                    width={200} // Set width and height for image optimization
                                    height={100}
                                />
                                <h3>The Best PPC Agency In UK</h3>
                                <p>Our packages are crafted for small to medium businesses, ensuring top-tier service without long-term contracts. As a Google Partner longer than most agencies have been around, our expertise is unmatched. With hundreds of 5-star reviews, we’re the trusted choice for businesses looking to make a real impact.</p>
                            </div>
                            <div className="ppc-video col-md-6">
                                <video autoPlay loop muted>
                                    <source src="/videos/ppc-1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Boxes Section */}
                <Ppcpricing />

                {/* Google Ads Section */}
                <section className="google-ads">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h4>Over 13 Years Helping Small Businesses Grow With Google Ads</h4>
                                <p>For over 13 years, Xevy has specialised in supporting small businesses with our Google Ads management service. Our extensive expertise covers every leading website system, from WordPress and WooCommerce to Shopify, Squarespace, Wix and beyond. Whatever your platform, we’re primed to offer tailored Google Ads solutions that truly resonate.</p>
                            </div>
                            <div className="col-md-6 ppc-google-ads">
                                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <Image 
                                                src="/img/others/slide1.png" 
                                                className="d-block w-100" 
                                                alt="Slide 1"
                                                width={550} // Set width and height for image optimization
                                                height={350}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <ContactSection />
            </div>
        </main>
    );
};

export default PpcPageSection;
