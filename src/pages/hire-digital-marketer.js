import Head from 'next/head';
import { getSEOData } from '../services/api';
import HireSections from '@/components/HireSection';
import EducatesAndEntertains from '@/components/EducatesAndEntertains';
import BuildSection from '@/components/BuildSection';
import ContactSection from '@/components/ContactSection';

const HdmPage = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:image" content={seoData.ogImage} />
      </Head>
      <HireSections />
      <EducatesAndEntertains />
      <BuildSection />
      <ContactSection />
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
    seoData = await getSEOData('hire-digital-marketer'); // Fetch SEO data for the home page
  } catch (error) {
    console.error('Error in getStaticProps:', error);
  }

  return {
    props: { seoData },
  };
}

export default HdmPage;
