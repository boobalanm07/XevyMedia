import Layout from '../components/Layout';
import '../styles/globals.css';
import PopupForm from '../components/PopupForm';
import Head from 'next/head';
import { useRouter } from 'next/router'; // Import useRouter

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Access the current route
  const canonicalUrl = `https://www.xevy.io${router.asPath.split('?')[0]}`; // Build canonical URL (ignoring query strings)

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
      </Head>
      <PopupForm />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
