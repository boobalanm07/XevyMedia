import Head from 'next/head';
import { getSEOData } from '../services/api';
import WebdesignPageSection from '@/components/WebdesignPageSection';

const WebDesignPagePage = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      <WebdesignPageSection />
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
    seoData = await getSEOData('web-design'); // Fetch SEO data for the home page
  } catch (error) {
    console.error('Error in getStaticProps:', error);
  }

  return {
    props: { seoData },
  };
}

export default WebDesignPagePage;
