import React, { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { ApartmentList } from 'components/ApartmentList';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { Pagination } from 'components/Pagination';
import { breadcrumbsForApartmentsMinsk, apartmentsMinsk, recommendationsMinsk } from 'core/mockData/mockData';
import { getPageCount } from 'core/utils/getPageCount';
import { apartmentsMinskSlice } from 'store/apartments/apartmentsMinsk.slice';
import { Recommendations } from './Recommendations';
import { ApartmentsForm } from 'components/ApartmentsForm';
import { SearchOnMap } from 'components/SearchOnMap';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { Social } from 'components/Social';
import { socialApartments } from 'core/constants/social.constant';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';

import styles from './ApartmentsMinsk.module.scss';

export const ApartmentsMinsk = () => {
  const {
    apartments,
    cardsPerPage,
    currentPage,
    recommendations,
    metro,
    district,
    rooms,
    priceFrom,
    priceTo,
    peopleCount,
    options,
    listMode,
    sortMode,
  } = useAppSelector((state) => state.apartmentsMinskReducer);
  const {
    setApartments,
    setCurrentPage,
    setRecommendations,
    setRooms,
    setPriceFrom,
    setPriceTo,
    setPeopleCount,
    setMetro,
    setDistrict,
    setOptions,
  } = apartmentsMinskSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const roomsParams = searchParams.get('rooms');
  const priceFromParams = searchParams.get('priceFrom');
  const priceToParams = searchParams.get('priceTo');
  const peopleCountParams = searchParams.get('peopleCount');
  const metroParams = searchParams.get('metro');
  const districtParams = searchParams.get('district');
  const optionsParams = searchParams.get('options');
  const pageParams = searchParams.get('page');

  useEffect(() => {
    roomsParams && dispatch(setRooms(roomsParams));
    priceFromParams && dispatch(setPriceFrom(Number(priceFromParams)));
    priceToParams && dispatch(setPriceTo(Number(priceToParams)));
    peopleCountParams && dispatch(setPeopleCount(peopleCountParams));
    metroParams && dispatch(setMetro(metroParams));
    districtParams && dispatch(setDistrict(districtParams));
    optionsParams && dispatch(setOptions(optionsParams.split(' ')));
    pageParams && dispatch(setCurrentPage(Number(pageParams)));
  }, [location.search]);

  useEffect(() => {
    const params: any = {};

    params.rooms = rooms;
    params.priceFrom = priceFrom;
    params.priceTo = priceTo;
    params.peopleCount = peopleCount;
    params.metro = metro;
    params.district = district;
    params.options = options.join(' ');
    params.page = currentPage;

    setSearchParams(params);
  }, [rooms, priceFrom, priceTo, peopleCount, metro, district, options, currentPage]);

  useEffect(() => {
    dispatch(setApartments(apartmentsMinsk));
    dispatch(setRecommendations(recommendationsMinsk));
  }, []);

  useEffect(() => {
    let filteredApartments = apartmentsMinsk;

    if (rooms && rooms !== '') {
      filteredApartments = filteredApartments.filter((apart) => apart.rooms.toLowerCase() == rooms.toLowerCase());
    }
    if (priceFrom) {
      filteredApartments = filteredApartments.filter((apart) => Number(apart.price) >= Number(priceFrom));
    }
    if (priceTo) {
      filteredApartments = filteredApartments.filter((apart) => Number(apart.price) <= Number(priceTo));
    }
    if (peopleCount && peopleCount !== '') {
      filteredApartments = filteredApartments.filter((apart) => Number(apart.peopleCount) == Number(peopleCount));
    }
    if (district && district !== '') {
      filteredApartments = filteredApartments.filter(
        (apart) => apart.address.district.toLowerCase() == district.toLowerCase()
      );
    }
    if (metro && metro !== '') {
      filteredApartments = filteredApartments.filter(
        (apart) => apart.address.metro.toLowerCase() == metro.toLowerCase()
      );
    }
    if (options && options.length !== 0) {
      filteredApartments = filteredApartments.filter((apart) => options.some((item) => apart.options.includes(item)));
    }

    if (sortMode == 'По возрастанию') {
      filteredApartments = [...filteredApartments].sort((a, b) => a.price - b.price);
    }

    if (sortMode == 'По убыванию') {
      filteredApartments = [...filteredApartments].sort((a, b) => b.price - a.price);
    }

    dispatch(setApartments(filteredApartments));
  }, [metro, district, rooms, priceFrom, priceTo, peopleCount, options, sortMode]);

  return (
    <main className={styles.apartments}>
      <div className="container">
        <div className={styles.top}>
          <Breadcrumbs breadcrumbs={breadcrumbsForApartmentsMinsk} />
          <h1 className={styles.title}>Аренда квартир на сутки в Минске</h1>
          <div className={styles.recommendations}>
            <Recommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <ApartmentsForm />
      </div>
      <div className="container">
        <div className={styles.list}>
          {apartments && (
            <ApartmentList
              apartments={apartments}
              isListMode={listMode}
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
            />
          )}
        </div>
        <div className={styles.footer}>
          <Pagination
            currentPage={currentPage}
            totalPage={apartments ? getPageCount(apartments.length, cardsPerPage) : 1}
            action={setCurrentPage}
          />
          <Social socialBlock={socialApartments} />
        </div>
      </div>
      <SearchOnMap
        title={'Показать найденные квартиры на карте'}
        description={'Ищите новостройки рядом с работой, парком или родственниками'}
        btn={{ children: 'Открыть карту', onClick: () => navigate(PagesLinks.MAPS_PAGE) }}
        height={'310px'}
      />
    </main>
  );
};
