import { useEffect, useRef } from 'react';
import Link from 'next/link'; // For internal navigation
import { Strategy, ChartLineUp, Lightbulb, SquaresFour, UserRectangle, ThumbsUp } from 'phosphor-react';

const WhyChooseUs = () => {
    const whyContentsRef = useRef([]);

    useEffect(() => {
        const options = {
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = index * 150; // Adjust the delay as needed
                    entry.target.style.transitionDelay = `${delay}ms`;
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, options);

        // Use a local variable to store the current ref value
        const currentContents = whyContentsRef.current;

        // Observe each .why-content element
        if (currentContents) {
            currentContents.forEach(content => {
                observer.observe(content);
            });
        }

        // Clean up observer when component unmounts
        return () => {
            if (currentContents) {
                currentContents.forEach(content => {
                    if (content) {
                        observer.unobserve(content);
                    }
                });
            }
        };
    }, []); // The empty dependency array ensures this effect runs once

    return (
        <section className="why-all">
            <div className="container">
                <div className="why-row">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="why-text text-left">
                                <h4 className="small-title">Why Choose Us</h4>
                                <h3 className="big-title">Xevy Media: Your Digital Marketing Partner</h3>
                                <p>Choose Xevy Media as your digital marketing partner to unlock your brand’s full potential. Together, we can create impactful strategies that drive engagement, foster growth, and deliver real results.</p>
                                <Link href="/services/" className="btn btn-sec-pri">Explore Our Digital Marketing Services</Link>
                            </div>
                        </div>
                        <div className="col-sm-6 why-content-opacity">
                            <div className="why-content" ref={el => (whyContentsRef.current[0] = el)}>
                                <Strategy size={32} />
                                <h4>Tailored Marketing Strategies</h4>
                                <p>Every business is unique. Our team understands your specific goals and challenges, crafting customized marketing strategies that align with your vision and objectives.</p>
                            </div>
                            <div className="why-content" ref={el => (whyContentsRef.current[1] = el)}>
                                <ChartLineUp size={32} />
                                <h4>Results-Driven Approach</h4>
                                <p>We deliver measurable results by leveraging data analytics and performance metrics, continually optimizing your marketing efforts to ensure you achieve desired outcomes.</p>
                            </div>
                            <div className="why-content" ref={el => (whyContentsRef.current[2] = el)}>
                                <Lightbulb size={32} />
                                <h4>Innovative Marketing Solutions</h4>
                                <p>Staying ahead of industry trends is our priority. We utilize the latest tools and technologies to implement innovative solutions that keep your brand relevant and competitive in the digital space.</p>
                            </div>
                            <div className="why-content" ref={el => (whyContentsRef.current[3] = el)}>
                                <SquaresFour size={32} />
                                <h4>Comprehensive Digital Marketing</h4>
                                <p>Xevy Media offers a full suite of services, from content marketing and social media management to SEO and PPC advertising, making us your one-stop shop for all marketing needs.</p>
                            </div>
                            <div className="why-content" ref={el => (whyContentsRef.current[4] = el)}>
                                <UserRectangle size={32} />
                                <h4>Client-Centric Focus</h4>
                                <p>Your satisfaction is our top priority. We build strong relationships with our clients, providing transparent communication, regular updates, and dedicated support throughout our partnership.</p>
                            </div>
                            <div className="why-content" ref={el => (whyContentsRef.current[5] = el)}>
                                <ThumbsUp size={32} />
                                <h4>Proven Success</h4>
                                <p>Our track record speaks for itself. We’ve helped numerous businesses achieve remarkable growth and enhance their online presence, making us a trusted partner in the digital marketing landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
