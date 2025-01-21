import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import { SpeedInsights } from '@vercel/speed-insights/next';


const Layout = ({ children }) => {
  const router = useRouter();

  // Check if the current route is the Home page
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Header />
      <main className={isHomePage ? styles.bg : ''}>
        {children}
        <SpeedInsights />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
