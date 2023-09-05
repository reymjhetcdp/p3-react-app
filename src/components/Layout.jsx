import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartProvider from './store/CartProvider';

function Layout() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}

export default Layout;
