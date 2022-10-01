import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { Layout } from 'views/layouts/Layout';
import { publicRoutes, authRoutes } from './routes';
import { useAppSelector } from 'store/store.hooks';

export const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path={PagesLinks.MAIN_PAGE} element={<Layout />}>
        {isAuth && authRoutes.map(({ path, Component }) => <Route path={path} element={<Component />} key={path} />)}
        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      </Route>
    </Routes>
  );
};
