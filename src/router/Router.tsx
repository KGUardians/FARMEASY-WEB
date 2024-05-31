import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import MainPage from '@pages/MainPage/MainPage';
import DeterminePage from '@pages/DeterminePage/DeterminePage';
import ExperienceListPage from '@pages/ExperiencePage/ExperienceListPage';
import ResultPage from '@pages/DeterminePage/ResultPage';
import MarketPage from '@pages/MarketPage/MarketPage';
import ExperienceInfoPage from '@pages/ExperiencePage/ExperienceInfoPage';
import ProductPage from '@pages/MarketPage/ProductPage';
import ExperienceApplyPage from '@pages/ExperiencePage/ExperienceApplyPage';
import CommunityPage from '@pages/CommunityPage/CommunityPage';
import SignUpPage from '@pages/SignUpPage/SignUpPage';
import CommunityInfoPage from '@pages/CommunityPage/CommunityInfoPage';
import CommunityPostPage from '@pages/CommunityPage/CommunityPostPage';
import AbnormalPage from '@pages/DeterminePage/AbnormalPage';
import NormalPage from '@pages/DeterminePage/NormalPage';
import UnknownPage from '@pages/DeterminePage/UnknownPage';
import SignInPage from '@pages/SignInPage/SignInPage';

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
          { path: '/community/:id', element: <CommunityInfoPage /> },
          { path: '/communitypost', element: <CommunityPostPage /> },
          { path: '/signin', element: <SignInPage /> },

          // 임시 결과창 제작
          { path: '/abnormal', element: <AbnormalPage /> },
          { path: '/normal', element: <NormalPage /> },
          { path: '/unknown', element: <UnknownPage /> },
        ],
      },
    ])}
  />
);

export default Router;
