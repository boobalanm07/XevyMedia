import axios from 'axios';
import Head from 'next/head';
import { getSEOData } from '../services/api';
import VideoSection from '@/components/VideoBanner';
import ContactSection from '@/components/ContactSection';

const ContactPage = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      <VideoSection />
      <main className="inner-page">
      <ContactSection />
      </main>
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
    seoData = await getSEOData('contact'); // Fetch SEO data for the home page
  } catch (error) {
    console.error('Error in getStaticProps:', error);
  }

  return {
    props: { seoData },
  };
}

export default ContactPage;
