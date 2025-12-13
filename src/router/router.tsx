import { createBrowserRouter } from 'react-router';

import RootLayout from '@layouts/RootLayout';
import MainLayout from '@layouts/MainLayout';
import authLoader from './authLoader';
import AuthLayout from '@layouts/AuthLayout';
import LoginPage from '@pages/auth/login/LoginPage';
import loginAction from '@pages/auth/login/action';
import logoutAction from './logoutAction';
import FeedPage from '@pages/feed/FeedPage';
import feedLoader from '@pages/feed/loader';

export const router = createBrowserRouter([
  {
    id: 'root',
    element: <RootLayout />,
    loader: authLoader,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <FeedPage />,
            loader: feedLoader,
          },
        ],
      },
      {
        path: 'logout',
        action: logoutAction,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
            action: loginAction,
          },
        ],
      },
    ],
  },
]);
