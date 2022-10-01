import { IItemNav } from 'components/Header/Nav/Nav.types';
import { IItemSubNav } from 'components/Header/SubNav/SubNav.type';
import { PagesLinks } from './pagesLinks.constant';

export const Menu: IItemNav[] = [
  { title: 'Home', link: PagesLinks.MAIN_PAGE },
  { title: 'News', link: PagesLinks.NEWS_PAGE },
  { title: 'Services and costs', link: PagesLinks.RATES_PAGE },
  { title: 'Ads on map', link: PagesLinks.MAPS_PAGE, map: true },
  { title: 'Contacts', link: PagesLinks.CONTACTS_PAGE },
];

export const SubMenu: IItemSubNav[] = [
  {
    title: 'Apartment For A Day',
    list: [
      { title: 'Flats in New York', link: PagesLinks.APARTMENTS_MINSK_PAGE },
      { title: 'Flats in Washington', link: PagesLinks.APARTMENTS_GOMEL_PAGE },
      { title: 'Flats in San Francisco', link: PagesLinks.APARTMENTS_BREST_PAGE },
      { title: 'Flats in Boston', link: PagesLinks.APARTMENTS_VITEBSK_PAGE },
      { title: 'Flats in Chicago', link: PagesLinks.APARTMENTS_GRODNO_PAGE },
      { title: 'Flats in Las Vegas', link: PagesLinks.APARTMENTS_MOGILEV_PAGE },
    ],
    map: true,
  },
  { title: 'Real Estates', link: PagesLinks.COTTAGES_PAGE },
  { title: 'Businesses', link: PagesLinks.SAUNAS_PAGE },
  { title: 'Car rental', link: PagesLinks.AUTO_PAGE },
];

export const FooterMenu: IItemSubNav[] = [
  { title: 'Real Estates', link: PagesLinks.COTTAGES_PAGE },
  { title: 'Businesses', link: PagesLinks.SAUNAS_PAGE },
  { title: 'Car rental', link: PagesLinks.AUTO_PAGE },
  {
    title: 'Apartments',
    list: [
      { title: 'Flats in New York', link: PagesLinks.APARTMENTS_MINSK_PAGE },
      { title: 'Flats in Washington', link: PagesLinks.APARTMENTS_GOMEL_PAGE },
      { title: 'Flats in San Francisco', link: PagesLinks.APARTMENTS_BREST_PAGE },
      { title: 'Flats in Boston', link: PagesLinks.APARTMENTS_VITEBSK_PAGE },
      { title: 'Flats in Chicago', link: PagesLinks.APARTMENTS_GRODNO_PAGE },
      { title: 'Flats in Las Vegas', link: PagesLinks.APARTMENTS_MOGILEV_PAGE },
    ],
  },
];
