import { IBreadcrumbs } from 'components/Breadcrumbs/Breadcrumbs.types';
import { INewsPreview } from 'components/NewsPreview/NewsPreview.types';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import room from 'assets/images/room.jpg';
import room1 from 'assets/images/room1.jpg';
import room2 from 'assets/images/room2.jpg';
import room3 from 'assets/images/room3.jpg';
import room4 from 'assets/images/room4.jpg';
import roomAbout from 'assets/images/room-about.jpg';
import owner from 'assets/images/owner.jpg';
import { INewsItem } from 'views/pages/NewsItem/NewsItem.types';
import { SelectorProps } from 'components/UI/SSelector/SSelector.types';
import { PromoCardProps } from 'components/Promo/PromoCard/PromoCard.types';
import promoApart from 'assets/images/promo-apart.jpg';
import promoCott from 'assets/images/promo-cott.jpg';
import promoSauna from 'assets/images/promo-sauna.jpg';
import promoAuto from 'assets/images/promo-auto.jpg';
import { PopularListProps } from 'components/PopularList/PopularList.types';
import { ApartmentCardProps } from 'components/ApartmentCard/ApartmentCard.types';
import { AboutProps } from 'components/About/About.types';
import { RecommendationProps } from 'views/pages/ApartmentsMinsk/Recommendations/Recommendations.types';
import { CheckboxProps } from 'components/UI/SCheckbox/SCheckbox.types';

/* export const chooseCity: ISelector = {
  title: 'Выберите',
  list: [
    { id: 1, value: 'Минск' },
    { id: 2, value: 'Гомель' },
    { id: 3, value: 'Брест' },
    { id: 4, value: 'Витебск' },
    { id: 5, value: 'Гродно' },
    { id: 6, value: 'Могилев' }
  ],
}; */

export const breadcrumbsForNews: IBreadcrumbs[] = [
  {
    title: 'News',
  },
];

export const breadcrumbsForNewsItem: IBreadcrumbs[] = [
  {
    title: 'News',
    link: PagesLinks.NEWS_PAGE,
  },
  {
    title: 'New York: best places to stay',
  },
];

export const breadcrumbsForApartmentsMinsk: IBreadcrumbs[] = [
  {
    title: 'Apartments in New York',
  },
];

export const news: INewsPreview[] = [];

for (let index = 0; index < 20; index++) {
  news.push({
    id: index + 1,
    img: room,
    title: `News ${index + 1}: New York: best places to stay`,
    description: `Description ${
      index + 1
    } Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque consequatur enim sit iusto provident inventore pariatur, architecto iure suscipit doloremque excepturi aspernatur beatae fugiat harum odit quo fuga reprehenderit?`,
    date: new Date(2008, 0, 14),
  });
}

/* export const newsList: INewsList = {
  data: news,
  newsPerPage: 9,
  currentPage: 1
};
 */

export const newsItems: INewsItem[] = [];

for (let index = 0; index < 20; index++) {
  newsItems.push({
    id: index + 1,
    img: room,
    title: `Title${index + 1} The best places to stay in New York`,
    description: `Description ${
      index + 1
    } Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque consequatur enim sit iusto provident inventore pariatur, architecto iure suscipit doloremque excepturi aspernatur beatae fugiat harum odit quo fuga reprehenderit?`,
    date: new Date(2008, 0, 14),
    text: '<p>News text</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque consequatur enim sit iusto provident inventore pariatur, architecto iure suscipit doloremque excepturi aspernatur beatae fugiat harum odit quo fuga reprehenderit?`</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque consequatur enim sit iusto provident inventore pariatur, architecto iure suscipit doloremque excepturi aspernatur beatae fugiat harum odit quo fuga reprehenderit?`</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque consequatur enim sit iusto provident inventore pariatur, architecto iure suscipit doloremque excepturi aspernatur beatae fugiat harum odit quo fuga reprehenderit?`</p>',
  });
}

/* export const rooms2: ISelector = {
  title: 'Выберите',
  list: [
    {
      id: 1,
      value: '1 комн.'
    },
    {
      id: 2,
      value: '2 комн.'
    },
    {
      id: 3,
      value: '3 комн.'
    },
    {
      id: 4,
      value: '4 комн.'
    },
    {
      id: 5,
      value: '5 комн.'
    },
  ]
  
} */

export const roomsList: SelectorProps[] = [
  {
    id: 1,
    value: 'One-room',
  },
  {
    id: 2,
    value: 'Two-room',
  },
  {
    id: 3,
    value: 'Three-room',
  },
  {
    id: 4,
    value: 'Four-room',
  },
  {
    id: 5,
    value: 'Five-room',
  },
];

/* export const citysList: SelectorProps[] = [
  { id: 1, value: 'Минск' },
  { id: 2, value: 'Гомель' },
  { id: 3, value: 'Брест' },
  { id: 4, value: 'Витебск' },
  { id: 5, value: 'Гродно' },
  { id: 6, value: 'Могилев' },
]; */

export const peopleList: SelectorProps[] = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
];

export const promoCards: PromoCardProps[] = [
  {
    title: 'Apartment For A Day',
    description: 'Rent an appartment',
    tags: [
      {
        label: 'New York',
        link: PagesLinks.APARTMENTS_MINSK_PAGE,
      },
      {
        label: 'Washington',
        link: PagesLinks.APARTMENTS_VITEBSK_PAGE,
      },
      {
        label: 'San Francisco',
        link: PagesLinks.APARTMENTS_GRODNO_PAGE,
      },
      {
        label: 'Boston',
        link: PagesLinks.APARTMENTS_GOMEL_PAGE,
      },
      {
        label: 'Chicago',
        link: PagesLinks.APARTMENTS_BREST_PAGE,
      },
      {
        label: 'Las Vegas',
        link: PagesLinks.APARTMENTS_MOGILEV_PAGE,
      },
    ],
    img: promoApart,
    mode: 'wide',
  },
  {
    title: 'Real Estates',
    description: 'Best Real Estate to rent',
    img: promoCott,
    iconLink: PagesLinks.COTTAGES_PAGE,
    mode: 'normal',
  },
  {
    title: 'Businesses',
    description: 'Businesses For Sale',
    img: promoSauna,
    iconLink: PagesLinks.SAUNAS_PAGE,
    mode: 'normal',
  },
  {
    title: 'Car rental',
    description: 'View all vehicles',
    img: promoAuto,
    iconLink: PagesLinks.AUTO_PAGE,
    mode: 'wide',
  },
];

export const popularApartmentsList: PopularListProps = {
  title: 'Apartments',
  list: [
    {
      label: 'Apartments in New York',
      link: PagesLinks.APARTMENTS_MINSK_PAGE,
      count: 3567,
    },
    {
      label: 'Apartments in Washington',
      link: PagesLinks.APARTMENTS_GOMEL_PAGE,
      count: 2032,
    },
    {
      label: 'Apartments in San Francisco',
      link: PagesLinks.APARTMENTS_GRODNO_PAGE,
      count: 2302,
    },
    {
      label: 'Apartments in Boston',
      link: PagesLinks.APARTMENTS_MOGILEV_PAGE,
      count: 110,
    },
    {
      label: 'Apartments in Chicago',
      link: PagesLinks.APARTMENTS_BREST_PAGE,
      count: 110,
    },
    {
      label: 'Apartments in Las Vegas',
      link: PagesLinks.APARTMENTS_VITEBSK_PAGE,
      count: 110,
    },
  ],
  limit: 6,
};

export const popularCottageList: PopularListProps = {
  title: 'Real Estates',
  list: [
    {
      label: 'Farmsteads',
      link: '/mock-link',
      count: 110,
    },
    {
      label: 'Cottages',
      link: '/mock-link',
      count: 32,
    },
    {
      label: 'Farmsteads',
      link: '/mock-link',
      count: 1234,
    },
    {
      label: 'Cottages',
      link: '/mock-link',
      count: 110,
    },
    {
      label: 'Farmsteads',
      link: '/mock-link',
      count: 321,
    },
    {
      label: 'Cottages',
      link: '/mock-link',
      count: 12332,
    },
    {
      label: 'Farmsteads',
      link: '/mock-link',
      count: 2,
    },
    {
      label: 'Cottages',
      link: '/mock-link',
      count: 321,
    },
  ],
  limit: 4,
};

export const popularDestinationsList: PopularListProps = {
  title: 'Best Areas of New York City',
  list: [
    {
      label: 'Apartments in Long Island',
      link: '/mock-link',
    },
    {
      label: 'Apartments in Central New York',
      link: '/mock-link',
    },
    {
      label: 'Apartments in North Country',
      link: '/mock-link',
    },
  ],
  limit: 3,
};

const apartmentCard: ApartmentCardProps = {
  id: 0,
  title: 'Four-room appartment in Long Island',
  address: {
    city: 'New York',
    street: '13th Street. 47 W 13th St, New York, NY 10011, USA',
    metro: 'Eighth Avenue Line',
    district: 'Long Island',
  },
  img: [room1],
  status: 'Gold',
  price: 65.0,
  peopleCount: 4,
  peopleCountByRoom: '(2+2)',
  rooms: '4 rooms',
  square: 179,
  description: 'Appartment with 4 Bedrooms and 3 Bathrooms.',
  owner: {
    name: 'Tony',
    phone: '+1 (000) 000-0000',
    email: 'honestTony@mail.com',
    img: owner,
    status: 'Owner',
  },
};

export const apartmentsList: ApartmentCardProps[] = [];

for (let i = 1; i <= 10; i++) {
  apartmentsList.push({ ...apartmentCard, id: i });
}

export const metroMinskList: SelectorProps[] = [
  { id: 1, value: 'First Avenue' },
  { id: 2, value: 'Third Avenue–149th Street' },
  { id: 3, value: '14th Street/Eighth Avenue†' },
  { id: 4, value: '21st Street–Queensbridge' },
  { id: 5, value: '34th Street–Hudson Yards†' },
  { id: 6, value: '36th Avenue' },
];

export const districtsMinskList: SelectorProps[] = [
  { id: 1, value: 'The Bronx' },
  { id: 2, value: 'Brooklyn' },
  { id: 3, value: 'Manhattan' },
  { id: 4, value: 'Queens' },
  { id: 5, value: 'Staten Island' },
];

export const sortList: SelectorProps[] = [
  { id: 1, value: 'Ascending' },
  { id: 2, value: 'Descending' },
];

export const optionsList: CheckboxProps[] = [
  { id: 1, name: 'options', value: 'stove', label: 'Stove' },
  { id: 2, name: 'options', value: 'oven', label: 'Oven' },
  { id: 3, name: 'options', value: 'coffee-maker', label: 'Coffee machine' },
  { id: 4, name: 'options', value: 'microwave', label: 'Microwave' },
  { id: 5, name: 'options', value: 'cookware', label: 'Cookware' },
  { id: 6, name: 'options', value: 'dishwasher', label: 'Dishwasher' },
  { id: 1, name: 'options', value: 'stove2', label: 'Stove2' },
  { id: 2, name: 'options', value: 'oven2', label: 'Oven2' },
  { id: 3, name: 'options', value: 'coffee-maker2', label: 'Coffee machine2' },
  { id: 4, name: 'options', value: 'microwave2', label: 'Microwave2' },
  { id: 5, name: 'options', value: 'cookware2', label: 'Cookware2' },
  { id: 6, name: 'options', value: 'dishwasher2', label: 'Dishwasher2' },
  { id: 1, name: 'options', value: 'stove3', label: 'Stove3' },
  { id: 2, name: 'options', value: 'oven3', label: 'Oven3' },
  { id: 3, name: 'options', value: 'coffee-maker3', label: 'Coffee machine3' },
  { id: 4, name: 'options', value: 'microwave3', label: 'Microwave3' },
  { id: 5, name: 'options', value: 'cookware3', label: 'Cookware3' },
  { id: 6, name: 'options', value: 'dishwasher3', label: 'Dishwasher3' },
];

export const apartmentsMinsk: ApartmentCardProps[] = [
  {
    id: 0,
    title: 'Four-room appartment in Long Island',
    address: {
      city: 'New York',
      street: '13th Street. 47 W 13th St, New York, NY 10011, USA',
      metro: 'Eighth Avenue Line',
      district: 'Long Island',
    },
    img: [room2, room1, room],
    status: 'Gold',
    price: 65.0,
    peopleCount: 4,
    peopleCountByRoom: '(2+2)',
    rooms: '4 rooms',
    square: 179,
    description: 'Appartment with 4 Bedrooms and 3 Bathrooms.',
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['coffee-maker', 'microwave', 'oven', 'stove'],
  },
  {
    id: 1,
    title: 'Three-room appartment in Long Island',
    address: {
      city: 'New York',
      street: '226 E 68th Street New York, NY 10065',
      metro: '34th Street–Penn Station',
      district: 'Manhattan',
    },
    img: [room1, room3, room4],
    status: 'Gold',
    price: 40.0,
    peopleCount: 3,
    peopleCountByRoom: '(2+1)',
    rooms: '3 rooms',
    square: 140,
    description: `One-of-a-kind elegant, sophisticated and comfortable apartment, located on a quiet, tree-lined street in Manhattan's Upper East Side, is available for rent for the first time. This classic and stately private home has been lovingly and meticulously restored inside and out.`,
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['coffee-maker', 'dishwasher', 'microwave', 'oven', 'stove'],
    like: true,
  },
  {
    id: 2,
    title: 'One-room appartment in Long Island',
    address: {
      city: 'New York',
      street: '226 E 68th Street New York, NY 10065',
      metro: 'Eighth Avenue Line',
      district: 'Long Island',
    },
    img: [room1, room3, room4],
    status: 'Gold',
    price: 70.0,
    peopleCount: 1,
    peopleCountByRoom: '(1)',
    rooms: '1 room',
    square: 30,
    description:
      'Large one bedroom apartment with private balcony in a super convenient midtown west/ Hells Kitchen location! Featuring Bike Room, Storage Room , Laundry in building with a part time doorman. Utilities included are heat, hot water, electric and gas! What more can you ask for !',
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['stove', 'microwave', 'oven'],
  },
  {
    id: 3,
    title: 'Four-room appartment',
    address: {
      city: 'New York',
      street: '308 E 105th Street #2E New York, NY 10029',
      metro: 'Eighth Avenue Line',
      district: 'Long Island',
    },
    img: [room1],
    status: 'Gold',
    price: 2500.0,
    peopleCount: 4,
    peopleCountByRoom: '(1)',
    rooms: '1 room',
    square: 56,
    description:
      'Tranquility and charm awaits you at the lovely renovated 1br condominium. Experience both southern and northern light that shine through the over-sized windows throughout the day. In this gut renovated home with exposed brick wall, recess lighting and a working fire place, no details were missed. Central A/C, abundant closets space, top of the line appliances with Bosch Washer/Dryer. Located on a quiet, tree-lined street, this boutique condominium has only 8 residences. Only two homes per floor keep life intimate. No board approval for rentals. This terrific 1Br 1 bathroom is located on a tree-lined quite block. Steps to all shopping, restaurants and ALL public commute, close proximity to the Q and 6 train.',
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['stove', 'microwave', 'oven'],
  },
  {
    id: 4,
    title: 'Four-room appartment in Long Island',
    address: {
      city: 'New York',
      street: '13th Street. 47 W 13th St, New York, NY 10011, USA',
      metro: 'Eighth Avenue Line',
      district: 'Long Island',
    },
    img: [room2, room1, room],
    status: 'Gold',
    price: 65.0,
    peopleCount: 4,
    peopleCountByRoom: '(2+2)',
    rooms: '4 rooms',
    square: 179,
    description: 'Appartment with 4 Bedrooms and 3 Bathrooms.',
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['coffee-maker', 'microwave', 'oven', 'stove'],
  },
  {
    id: 5,
    title: 'Three-room appartment in Long Island',
    address: {
      city: 'New York',
      street: '226 E 68th Street New York, NY 10065',
      metro: '34th Street–Penn Station',
      district: 'Manhattan',
    },
    img: [room1, room3, room4],
    status: 'Gold',
    price: 40.0,
    peopleCount: 3,
    peopleCountByRoom: '(2+1)',
    rooms: '2 rooms',
    square: 140,
    description: `One-of-a-kind elegant, sophisticated and comfortable apartment, located on a quiet, tree-lined street in Manhattan's Upper East Side, is available for rent for the first time. This classic and stately private home has been lovingly and meticulously restored inside and out.`,
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['coffee-maker', 'dishwasher', 'microwave', 'oven', 'stove'],
    like: true,
  },
  {
    id: 6,
    title: 'One-room appartment in Long Island',
    address: {
      city: 'New York',
      street: '226 E 68th Street New York, NY 10065',
      metro: 'Eighth Avenue Line',
      district: 'Long Island',
    },
    img: [room1, room3, room4],
    status: 'Gold',
    price: 70.0,
    peopleCount: 1,
    peopleCountByRoom: '(1)',
    rooms: '1 room',
    square: 30,
    description:
      'Large one bedroom apartment with private balcony in a super convenient midtown west/ Hells Kitchen location! Featuring Bike Room, Storage Room , Laundry in building with a part time doorman. Utilities included are heat, hot water, electric and gas! What more can you ask for !',
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['stove', 'microwave', 'oven'],
  },
  {
    id: 7,
    title: 'Four-room appartment',
    address: {
      city: 'New York',
      street: '308 E 105th Street #2E New York, NY 10029',
      metro: 'Eighth Avenue Line',
      district: 'Long Island',
    },
    img: [room1],
    status: 'Gold',
    price: 2500.0,
    peopleCount: 4,
    peopleCountByRoom: '(2+2)',
    rooms: '1 room',
    square: 56,
    description:
      'Tranquility and charm awaits you at the lovely renovated 1br condominium. Experience both southern and northern light that shine through the over-sized windows throughout the day. In this gut renovated home with exposed brick wall, recess lighting and a working fire place, no details were missed. Central A/C, abundant closets space, top of the line appliances with Bosch Washer/Dryer. Located on a quiet, tree-lined street, this boutique condominium has only 8 residences. Only two homes per floor keep life intimate. No board approval for rentals. This terrific 1Br 1 bathroom is located on a tree-lined quite block. Steps to all shopping, restaurants and ALL public commute, close proximity to the Q and 6 train.',
    owner: {
      name: 'Tony',
      phone: '+1 (000) 000-0000',
      email: 'honestTony@mail.com',
      img: owner,
      status: 'Owner',
    },
    options: ['stove', 'microwave', 'oven'],
  },
];

export const about: AboutProps = {
  title: 'Four-room appartment in Long Island',
  subtitle: 'What is the Rent?',
  description:
    '<p><strong>The mission of the Rent is simple</strong><br /> </p> <p>Our mission is to empower New York City’s buyers, sellers and renters by providing them transparency with the most complete and accurate real estate data and connecting them with qualified real estate professionals.</p>',
  img: roomAbout,
};

export const recommendationsMinsk: RecommendationProps[] = [
  { label: 'Сheap', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?priceTo=50` },
  { label: 'One-room', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?rooms=1` },
  { label: 'Two-room', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?rooms=2` },
  { label: 'Three-room', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?rooms=3` },
  { label: 'Four-room', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?rooms=4` },
  { label: 'Five-room', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?rooms=5` },
  { label: 'The Bronx', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?district=bronx` },
  { label: 'Brooklyn', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?district=brooklyn` },
  { label: 'Manhattan', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?district=manhattan` },
  { label: 'Queens', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?district=queens` },
  { label: 'Staten Island', path: `${PagesLinks.APARTMENTS_MINSK_PAGE}?district=staten-island` },
];
