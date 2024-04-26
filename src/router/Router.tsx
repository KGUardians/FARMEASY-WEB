import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '../pages/Mainpage/MainPage';
import DeterminePage from '../pages/Determinepage/DeterminePage';
import ExperienceListPage from '../pages/Experiencepage/ExperienceListPage';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/determine', element: <DeterminePage /> },
          { path: '/experiencelist', element: <ExperienceListPage /> },
        ],
      },
    ])}
  />
);

export default Router;
