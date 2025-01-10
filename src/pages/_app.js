import Layout from '../components/Layout';
import '../styles/globals.css';
import PopupForm from '../components/PopupForm';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <PopupForm />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
