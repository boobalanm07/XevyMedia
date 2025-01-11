import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();

  // Check if the current route is the Home page
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Header />
      <main className={isHomePage ? 'bg' : ''}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
