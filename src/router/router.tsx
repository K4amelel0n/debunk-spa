import { createBrowserRouter } from 'react-router';

import RootLayout from '@layouts/RootLayout';
import MainLayout from '@layouts/MainLayout';
import authLoader from './authLoader';
import AuthLayout from '@layouts/AuthLayout';
import LoginPage from '@pages/auth/login/LoginPage';
import loginAction from '@pages/auth/login/action';
import RegisterPage from '@pages/auth/register/RegisterPage';
import registerAction from '@pages/auth/register/action';
import logoutAction from './logoutAction';
import AddPostPage from '@pages/posts/AddPostPage';
import addPostAction from '@pages/posts/addPostAction';
import FeedPage from '@pages/feed/FeedPage';
import feedLoader from '@pages/feed/loader';

export const router = createBrowserRouter([
  {
    id: 'root',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        loader: authLoader,
        children: [
          {
            index: true,
            element: <FeedPage />,
            loader: feedLoader,
          },
          {
            path: 'posts/add',
            element: <AddPostPage />,
            action: addPostAction,
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
          {
            path: 'register',
            element: <RegisterPage />,
            action: registerAction,
          },
        ],
      },
    ],
  },
]);
