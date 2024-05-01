import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/Mainpage/MainPage';
import DeterminePage from '../pages/Determinepage/DeterminePage';
import ResultPage from '../pages/Determinepage/ResultPage';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/determine', element: <DeterminePage /> },
          { path: '/determine/result', element: <ResultPage /> },
        ],
      },
    ])}
  />
);

export default Router;
