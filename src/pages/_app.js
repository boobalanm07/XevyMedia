import Layout from '../components/Layout';
import '../styles/globals.css';
import PopupForm from '../components/PopupForm';
import Head from 'next/head';
import { useRouter } from 'next/router'; // Import useRouter

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Access the current route
  const canonicalUrl = `https://www.xevy.io${router.asPath.split('?')[0]}`; // Build canonical URL (ignoring query strings)

  // Check if the current page is the 404 page
  const is404Page = router.asPath === '/404';

  return (
    <>
      <Head>
        {/* Render canonical link only if it's not the 404 page */}
        {!is404Page && <link rel="canonical" href={canonicalUrl} />}
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="QhtvqIcikoHubyYCuJ7IbwTiCYTQq9qmvSD02PPG9LA" />
      </Head>
      <PopupForm />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
