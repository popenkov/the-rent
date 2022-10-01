import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Promo } from 'components/Promo';
import { Filter } from './Filter';
import { about, promoCards } from 'core/mockData/mockData';
import { PopularPages } from './PopularPages';
import { RentApartment } from './RentApartment';
import { SearchOnMap } from 'components/SearchOnMap';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { Services } from './Services';
import { About } from 'components/About';
import { NewsHeading } from './NewsHeading';

import styles from './Home.module.scss';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="container">
        <div className={styles.filter}>
          <Filter />
        </div>
        <div className={styles.popular}>
          <Promo promoList={promoCards} />
          <PopularPages />
        </div>
        <div className={styles.rentApartment}>
          <RentApartment />
        </div>
      </div>
      <div className={styles.map}>
        <SearchOnMap
          title={'Поиск квартир на карте'}
          description={'Ищите квартиры на сутки в центре города, возле парка или в живописном районе'}
          btn={{ children: 'Открыть карту', onClick: () => navigate(PagesLinks.MAPS_PAGE) }}
          height={'440px'}
        />
      </div>
      <div className="container">
        <div className={styles.services}>
          <Services />
        </div>
        <div className={styles.info}>
          <div className={styles.about}>
            <About about={about} />
          </div>
          <div className={styles.newsHeadlines}>
            <NewsHeading />
          </div>
        </div>
      </div>
    </main>
  );
};
