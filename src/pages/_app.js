import Layout from '../components/Layout';
import '../styles/globals.css';
import PopupForm from '../components/PopupForm';
import Head from 'next/head';  // Importing Head

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
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
