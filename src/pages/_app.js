import Layout from '../components/Layout';
import '../styles/globals.css';
import PopupForm from '../components/PopupForm';
import Head from 'next/head';
import Script from 'next/script'; // Import Script component for including external scripts
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://www.xevy.io${router.asPath.split('?')[0]}`;

  // Check if the current page is the 404 page
  const is404Page = router.asPath === '/404';

  return (
    <>
      <Head>
        {/* Render canonical link only if it's not the 404 page */}
        {!is404Page && <link rel="canonical" href={canonicalUrl} />}
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="QhtvqIcikoHubyYCuJ7IbwTiCYTQq9qmvSD02PPG9LA"
        />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DX1QJXK02X"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DX1QJXK02X');
        `}
      </Script>
      <PopupForm />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
