import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically importing components to improve initial load performance
const MobileAppProcess = dynamic(() => import('./MobileAppProcess'));
const TechStack = dynamic(() => import('./TechStack'));
const AppConsulting = dynamic(() => import('./AppConsulting'));
const MobileAppDevelopmentProcess = dynamic(() => import('./MobileAppDevelopmentProcess'));

const MobileappPageSection = () => {
    return (
        <>
            <section>
                <div className="container mobileapp-banner">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Transform Your Business with Innovative Mobile Apps</h3>
                            <p>We partner with the seasoned industry experts to deliver the value proposition of your business.</p>
                        </div>
                        <div className="col-md-6">
                            <Image
                                src="/img/others/mobile-app1.png"
                                alt="Portfolio Item 1"
                                width={650} // Adjust width as per design
                                height={450} // Adjust height as per design
                                className="card-img-top"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <main className="inner-page">
                <MobileAppProcess />
                <TechStack />
                <AppConsulting />
                <MobileAppDevelopmentProcess />
            </main>
        </>
    );
};

export default MobileappPageSection;
