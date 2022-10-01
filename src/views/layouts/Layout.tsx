import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { PagesLinks } from 'core/constants/pagesLinks.constant';

export const Layout = () => {
  const location = useLocation();
  const isLogin = location.pathname === PagesLinks.LOGIN_PAGE || location.pathname === PagesLinks.REG_PAGE;

  return (
    <>
      {!isLogin && <Header />}

      <Outlet />

      {!isLogin && <Footer />}
    </>
  );
};
