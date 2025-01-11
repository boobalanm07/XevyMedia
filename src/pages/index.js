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
    // Only add the class if we are on the HomePage
    if (router.pathname === '/') {
      document.body.classList.add('bg');
    }

    // Simulate preloader timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6500); // Match the duration of your preloader animation

    // Cleanup
    return () => {
      if (router.pathname === '/') {
        document.body.classList.remove('bg');
      }
      clearTimeout(timer);
    };
  }, [router.pathname]);

  // Render the SEO data in the head even when loading
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      {isLoading ? <Animation /> : (
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
