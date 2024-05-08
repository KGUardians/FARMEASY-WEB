import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/Mainpage/MainPage';
import DeterminePage from '../pages/Determinepage/DeterminePage';
import ResultPage from '../pages/Determinepage/ResultPage';
import MarketPage from '../pages/Marketpage/MarketPage';
import ProductPage from '../pages/Marketpage/ProductPage';
import { marketData } from '../mocks/mockData';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/determine', element: <DeterminePage /> },
          { path: '/determine/result', element: <ResultPage /> },
          { path: '/market', element: <MarketPage /> },
          { path: '/market/:id', element: <ProductPage productList={marketData} /> }, 
        ],
      },
    ])}
  />
);

export default Router;
