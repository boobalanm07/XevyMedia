import { useEffect, useState } from 'react';
import Image from 'next/image';
import SeoPricingSection from './SeoPricing';

const SeoPageSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const seoImages = [
        "/img/others/onpage-seo.png",
        "/img/others/offpage-seo.png"
    ];

    return (
        <div>
            <section className="top-banner">
                <div className="container seo-banner-image">
                    <Image
                        src="/img/others/SEO-banner.png"
                        alt="SEO Banner"
                        className="banner-image img-fluid"
                        width={1200}
                        height={400} // Provide dimensions for image optimization
                    />
                </div>
            </section>

            <main className="inner-page">
                <SeoPricingSection />

                <section className="seo-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="seo-item">
                                    <h3>OnPage SEO</h3>
                                    <p>OnPage SEO involves optimizing individual web pages in order to rank higher and earn more relevant traffic in search engines. This includes content as well as HTML source code optimization.</p>
                                </div>

                                <div className="seo-item">
                                    <h3 className="off-page">OffPage SEO</h3>
                                    <p>OffPage SEO refers to actions taken outside of your own website to impact your rankings within search engine results pages. This includes building backlinks, social media marketing, and more.</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <Image
                                    src={seoImages[currentImageIndex]}
                                    alt="OnPage or OffPage SEO"
                                    className="seo-image"
                                    width={500} // Add width and height for optimized rendering
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="roadmap-section">
                    <div className="container">
                        <h2>Our Roadmap</h2>
                        <div className="roadmap-content">
                            {[{
                                position: 'left',
                                title: 'We perform an in-depth TAM and ICP analysis',
                                description: 'As part of the SEO agency services in the UK, our experts conduct a comprehensive market analysis of your brand and its competitors.',
                                number: '1'
                            }, {
                                position: 'right',
                                title: 'We curate keyword-Rich content',
                                description: 'We imbibe SEO-rich keywords in blogs and website content as a part of an effective strategy to increase traffic.',
                                number: '2'
                            }, {
                                position: 'left',
                                title: 'We revamp, update and monitor your website',
                                description: 'Our goal is to optimize and sustain your website, ensuring that it is accessible, user-friendly, and rich.',
                                number: '3'
                            }, {
                                position: 'right',
                                title: 'Continuous Debugging, Testing & Updates',
                                description: 'Our SEO experts are dedicated to continuously enhancing your website by detecting and promptly fixing issues.',
                                number: '4'
                            }, {
                                position: 'left',
                                title: 'We optimize OFF-Page, On-Page SEO and Technical SEO',
                                description: 'We ensure your website is promoted well through Off-Page, On-Page SEO and Technical SEO by creating blogs.',
                                number: '5'
                            }, {
                                position: 'right',
                                title: 'We provide results in the form of growth reports',
                                description: 'Our UK-based SEO business is dedicated to accomplishing your goals and delivering results in report form.',
                                number: '6'
                            }].map((item, index) => (
                                <div key={index} className={`roadmap-item ${item.position}`}>
                                    <div className="roadmap-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="circle">{item.number}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="percentage-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 percentage-item left">
                                <div className="percentage-circle pink">61%</div>
                                <p>of Google search results come through mobile devices.</p>
                            </div>
                            <div className="col-md-6 percentage-item right">
                                <div className="percentage-circle purple">46%</div>
                                <p>of Google search intent towards the local market.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 percentage-item left">
                                <div className="percentage-circle purple">88%</div>
                                <p>of the audience interacts with the local vendor within 24 hours of searching on their mobile device.</p>
                            </div>
                            <div className="col-md-6 percentage-item right">
                                <div className="percentage-circle pink">25%</div>
                                <p>of Small Business websites don&rsquo;t use the H1 tags. This is a big flaw based on SEO Perspective&#33;</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 percentage-item left">
                                <div className="percentage-circle pink">69%</div>
                                <p>of Smartphone users buy from a website that provides a simplified experience to their users.</p>
                            </div>
                            <div className="col-md-6 percentage-item right">
                                <div className="percentage-circle purple">51%</div>
                                <p>of the audience trusts companies that have mobile-optimized websites.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 percentage-item left">
                                <div className="percentage-circle purple">80%</div>
                                <p>of Websites that make it to Google&rsquo;s first page have an average of 1,447 words per page.</p>
                            </div>
                            <div className="col-md-6 percentage-item right">
                                <div className="percentage-circle pink">200%</div>
                                <p>The terms “Where to buy” and “Near me” searches have grown by 200%, did you ensure your online presence yet&#63;</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default SeoPageSection;
