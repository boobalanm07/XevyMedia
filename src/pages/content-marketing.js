import axios from 'axios';
import Head from 'next/head';
import { getSEOData } from '../services/api';
import ContentmarketingPageSection from '@/components/ContentmarketingPageSection';

const ContentmarketingPage = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      <ContentmarketingPageSection />
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
    seoData = await getSEOData('content-marketing'); // Fetch SEO data for the home page
  } catch (error) {
    console.error('Error in getStaticProps:', error);
  }

  return {
    props: { seoData },
  };
}

export default ContentmarketingPage;
