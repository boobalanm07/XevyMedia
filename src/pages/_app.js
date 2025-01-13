import Layout from '../components/Layout';
import '../styles/globals.css';
import PopupForm from '../components/PopupForm';
import Head from 'next/head';  // Importing Head

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.xevy.io" />
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
