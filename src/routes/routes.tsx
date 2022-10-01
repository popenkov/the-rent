import { Contacts } from 'views/pages/Contacts';
import { Home } from 'views/pages/Home';
import { News } from 'views/pages/News';
import { NewsItem } from 'views/pages/NewsItem';
import { NotFound } from 'views/pages/NotFound';
import { Admin } from 'views/pages/Admin';
import { Login } from 'views/pages/Login';
import { RoutesProps } from './routes.types';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { ApartmentsMinsk } from 'views/pages/ApartmentsMinsk';

export const authRoutes: RoutesProps[] = [
  {
    path: PagesLinks.ADMIN_PAGE,
    Component: Admin,
  },
];

export const publicRoutes: RoutesProps[] = [
  {
    path: PagesLinks.MAIN_PAGE,
    Component: Home,
  },
  {
    path: PagesLinks.NEWS_PAGE,
    Component: News,
  },
  {
    path: `${PagesLinks.NEWS_PAGE}/:id`,
    Component: NewsItem,
  },
  {
    path: PagesLinks.CONTACTS_PAGE,
    Component: Contacts,
  },
  {
    path: PagesLinks.LOGIN_PAGE,
    Component: Login,
  },
  {
    path: PagesLinks.REG_PAGE,
    Component: Login,
  },
  {
    path: PagesLinks.APARTMENTS_MINSK_PAGE,
    Component: ApartmentsMinsk,
  },
  {
    path: '*',
    Component: NotFound,
  },
];
