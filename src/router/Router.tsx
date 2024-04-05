import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/Mainpage/Mainpage.tsx';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [{ path: '/', element: <MainPage /> }],
      },
    ])}
  />
);

export default Router;
