import { useEffect, useRef } from 'react';
import Link from 'next/link'; // For internal navigation
import { Strategy, ChartLineUp, Lightbulb, SquaresFour, UserRectangle, ThumbsUp } from 'phosphor-react';
import styles from '../styles/Whychoose.module.css';

const WhyChooseUs = () => {
    const whyContentsRef = useRef([]); // Array of refs to hold all .why-content elements

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

        // Observe each .why-content element
        whyContentsRef.current.forEach(content => {
            if (content) {
                observer.observe(content);
            }
        });

        // Clean up observer when component unmounts
        return () => {
            whyContentsRef.current.forEach(content => {
                if (content) {
                    observer.unobserve(content);
                }
            });
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
                            {/* Assign refs dynamically */}
                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                <div key={index} className="why-content" ref={(el) => (whyContentsRef.current[index] = el)}>
                                    {index === 0 && <Strategy size={32} />}
                                    {index === 1 && <ChartLineUp size={32} />}
                                    {index === 2 && <Lightbulb size={32} />}
                                    {index === 3 && <SquaresFour size={32} />}
                                    {index === 4 && <UserRectangle size={32} />}
                                    {index === 5 && <ThumbsUp size={32} />}
                                    <h4>{[
                                        "Tailored Marketing Strategies",
                                        "Results-Driven Approach",
                                        "Innovative Marketing Solutions",
                                        "Comprehensive Digital Marketing",
                                        "Client-Centric Focus",
                                        "Proven Success"
                                    ][index]}</h4>
                                    <p>{[
                                        "Every business is unique. Our team understands your specific goals and challenges, crafting customized marketing strategies that align with your vision and objectives.",
                                        "We deliver measurable results by leveraging data analytics and performance metrics, continually optimizing your marketing efforts to ensure you achieve desired outcomes.",
                                        "Staying ahead of industry trends is our priority. We utilize the latest tools and technologies to implement innovative solutions that keep your brand relevant and competitive in the digital space.",
                                        "Xevy Media offers a full suite of services, from content marketing and social media management to SEO and PPC advertising, making us your one-stop shop for all marketing needs.",
                                        "Your satisfaction is our top priority. We build strong relationships with our clients, providing transparent communication, regular updates, and dedicated support throughout our partnership.",
                                        "Our track record speaks for itself. We’ve helped numerous businesses achieve remarkable growth and enhance their online presence, making us a trusted partner in the digital marketing landscape."
                                    ][index]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
