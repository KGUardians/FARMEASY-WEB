import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '@pages/Mainpage/MainPage';
import DeterminePage from '@pages/Determinepage/DeterminePage';
import ExperienceListPage from '@pages/Experiencepage/ExperienceListPage';
import ResultPage from '@pages/Determinepage/ResultPage';
import MarketPage from '@pages/Marketpage/MarketPage';
import ExperienceInfoPage from '@pages/Experiencepage/ExperienceInfoPage';
import ProductPage from '@pages/Marketpage/ProductPage';
import ExperienceApplyPage from '@pages/Experiencepage/ExperienceApplyPage';
import SignUpPage from '@pages/Signuppage/SignUpPage';
import CommunityInfoPage from '@pages/Communitypage/CommunityInfoPage';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/determine', element: <DeterminePage /> },
          { path: '/experiencelist', element: <ExperienceListPage /> },
          { path: '/experienceinfo', element: <ExperienceInfoPage /> },
          { path: '/experienceapply', element: <ExperienceApplyPage /> },
          { path: '/determine/result', element: <ResultPage /> },
          { path: '/market', element: <MarketPage /> },
          { path: '/market/:id', element: <ProductPage /> },
          { path: '/signup', element: <SignUpPage /> },
          { path: '/communityInfo', element: <CommunityInfoPage /> },
        ],
      },
    ])}
  />
);

export default Router;
