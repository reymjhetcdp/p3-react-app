import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Menu from './components/Pages/Menu/Menu';
import Cart from './components/Pages/Cart/Cart';
import PageNotFound from './components/Pages/PageNotFound';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
