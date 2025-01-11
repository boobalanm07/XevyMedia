import { useEffect, useState } from 'react';
import Head from 'next/head';
import Banner from '@/components/Banner';
import Animation from '@/components/Animation';
import { getSEOData } from '../services/api';
import { useRouter } from 'next/router';
import SocialBanner from '@/components/SocialBanner';
import ServicesSection from '@/components/Services';
import HomeSections from '@/components/Homesections';
import RecentWork from '@/components/RecentWork';
import WhyChooseUs from '@/components/WhyChooseus';
import TestimonialSlider from '@/components/TestimonialSlider';

const HomePage = ({ seoData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate preloader timeout based on route change
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6500); // Match the duration of your preloader animation

    // Clear the timeout on component unmount
    return () => clearTimeout(timer);

  }, [router.pathname]); // This will trigger when the route changes (on load)

  // Render SEO data in the head, even when loading
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      
      {/* Show preloader animation while loading */}
      {isLoading ? (
        <Animation />
      ) : (
        <>
          <Banner />
          <SocialBanner />
          <ServicesSection />
          <HomeSections />
          <RecentWork />
          <WhyChooseUs />
          <TestimonialSlider />
        </>
      )}
    </>
  );
};

export async function getStaticProps() {
  let seoData = {
    title: 'Default Title',
    description: 'Default description',
    keywords: '',
    ogImage: 'default-image-url.jpg',
  };

  try {
    seoData = await getSEOData('home'); // Fetch SEO data for the home page
  } catch (error) {
    console.error('Error in getStaticProps:', error);
  }

  return {
    props: { seoData },
  };
}

export default HomePage;
