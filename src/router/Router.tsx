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
import CommunityPage from '@pages/Communitypage/CommunityPage';
import SignUpPage from '@pages/Signuppage/SignUpPage';
import CommunityInfoPage from '@pages/Communitypage/CommunityInfoPage';
import CommunityPostPage from '@pages/Communitypage/CommunityPostPage';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/determine', element: <DeterminePage /> },
          { path: '/experiencelist', element: <ExperienceListPage /> },
          { path: '/experience/:id', element: <ExperienceInfoPage /> },
          { path: '/experienceapply', element: <ExperienceApplyPage /> },
          { path: '/determine/result', element: <ResultPage /> },
          { path: '/market', element: <MarketPage /> },
          { path: '/community', element: <CommunityPage /> },
          { path: '/market/:id', element: <ProductPage /> },
          { path: '/signup', element: <SignUpPage /> },
          { path: '/communityinfo', element: <CommunityInfoPage /> },
          { path: '/communitypost', element: <CommunityPostPage /> },
        ],
      },
    ])}
  />
);

export default Router;
