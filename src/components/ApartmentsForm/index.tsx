import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';

import { SInput } from 'components/UI/SInput';
import { SSelector } from 'components/UI/SSelector';
import {
  roomsList,
  peopleList,
  districtsMinskList,
  metroMinskList,
  optionsList,
  sortList,
} from 'core/mockData/mockData';
import { filterMainSlice } from 'store/filterMain/filterMain.slice';
import { useNavPageCity } from 'hooks/useNavPageCity';
import { apartmentsMinskSlice } from 'store/apartments/apartmentsMinsk.slice';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { FilterMainProps } from 'store/filterMain/filterMain.types';
import { ApartmentsMinskProps } from 'views/pages/ApartmentsMinsk/ApartmentsMinsk.types';
import { SCheckboxList } from 'components/UI/SCheckboxList';
import { Button } from 'components/UI/Button';
import { ArrowIcon, ListIcon, MapIcon, OptionsIcon, TileIcon } from 'components/icons';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';

import styles from './ApartmentsForm.module.scss';
import { getCities } from 'core/services/cities.services';
import { SelectorProps } from 'components/UI/SSelector/SSelector.types';

export const ApartmentsForm = () => {
  const location = useLocation();
  const [viewForm, setViewForm] = useState('');
  const [initialValues, setInitialValues] = useState<FilterMainProps | ApartmentsMinskProps | any>();
  const optionsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    setCity,
    setRooms: setRoomsMain,
    setPriceFrom: setPriceFromMain,
    setPriceTo: setPriceToMain,
  } = filterMainSlice.actions;

  const {
    setRooms: setRoomsMinsk,
    setPriceFrom: setPriceFromMinsk,
    setPriceTo: setPriceToMinsk,
    setPeopleCount,
    setDistrict,
    setMetro,
    setOptions,
    setListMode,
    setSortMode,
    setCurrentPage,
  } = apartmentsMinskSlice.actions;

  const {
    city: cityHome,
    rooms: roomsHome,
    priceFrom: priceFromHome,
    priceTo: priceToHome,
  } = useAppSelector((state) => state.filterMainReducer);

  const {
    city: cityMinsk,
    rooms: roomsMinsk,
    priceFrom: priceFromMinsk,
    priceTo: priceToMinsk,
    peopleCount,
    district,
    metro,
    listMode,
    sortMode,
    options,
  } = useAppSelector((state) => state.apartmentsMinskReducer);

  const initialValuesHome = {
    city: cityHome,
    rooms: roomsHome,
    priceFrom: priceFromHome,
    priceTo: priceToHome,
  };

  const initialValuesMinsk = {
    city: cityMinsk,
    rooms: roomsMinsk,
    priceFrom: priceFromMinsk,
    priceTo: priceToMinsk,
    peopleCount: peopleCount,
    district: district,
    metro: metro,
    options: options,
    listMode: listMode,
    sort: sortMode,
  };

  const validationSchema: unknown = yup.object().shape({
    priceFrom: yup.number(),
    priceTo: yup.number(),
  });

  const handleBtnOptionsCity = () => {
    if (optionsRef.current.style.height == '') {
      const scrollHeight = optionsRef.current?.scrollHeight;
      optionsRef.current.style.height = `${scrollHeight}px`;
      optionsRef.current.style.margin = '20px 0 29px';
      optionsRef.current.style.overflow = 'visible';
    } else {
      optionsRef.current.style.height = '';
      optionsRef.current.style.margin = '0';
      optionsRef.current.style.overflow = 'hidden';
    }
  };

  const handleBtnOptionsHome = (handleSubmit) => handleSubmit;

  const [cities, setCities] = useState<SelectorProps[]>([]);

  const useUpdateFilter = (action, value) => {
    useEffect(() => {
      dispatch(action(value));
    }, [value]);
  };

  useEffect(() => {
    switch (location.pathname) {
      case PagesLinks.MAIN_PAGE:
        setViewForm('Home');
        setInitialValues(initialValuesHome);
        break;
      case PagesLinks.APARTMENTS_MINSK_PAGE:
        setViewForm('Minsk');
        setInitialValues(initialValuesMinsk);
        break;
      default:
        setViewForm('Home');
        setInitialValues(initialValuesHome);
        break;
    }
  }, [viewForm, location.search]);

  useEffect(() => {
    dispatch(setOptions(initialValuesMinsk.options));
  }, []);

  useEffect(() => {
    void getCities().then((data) => setCities(data));
  }, []);

  return (
    <>
      {initialValues && (
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);

              switch (viewForm) {
                case 'Home':
                  values.city && dispatch(setCity(values.city));
                  dispatch(setRoomsMain(values.rooms));
                  dispatch(setPriceFromMain(values.priceFrom));
                  dispatch(setPriceToMain(values.priceTo));

                  if (values.city === 'Минск') {
                    dispatch(setRoomsMinsk(values.rooms));
                    dispatch(setPriceFromMinsk(values.priceFrom));
                    dispatch(setPriceToMinsk(values.priceTo));
                  }
                  useNavPageCity(values.city, navigate);
                  break;
                case 'Minsk':
                  dispatch(setRoomsMinsk(values.rooms));
                  dispatch(setPriceFromMinsk(values.priceFrom));
                  dispatch(setPriceToMinsk(values.priceTo));
                  dispatch(setPeopleCount(values.peopleCount));
                  dispatch(setDistrict(values.district));
                  dispatch(setMetro(values.metro));
                  dispatch(setOptions(values.options));
                  dispatch(setSortMode(values.sort));
                  dispatch(setCurrentPage(1));
                  break;
                default:
                  break;
              }
            }, 400);
          }}
          validationSchema={validationSchema}
        >
          {({ values, handleSubmit, setFieldValue, handleReset }) => (
            <Form className={styles.form}>
              <fieldset className={clsx(styles.fieldset, viewForm == 'Minsk' && styles.fieldsetCity)}>
                <div className={clsx(styles.top, viewForm == 'Minsk' && styles.topCity)}>
                  <div className={clsx(styles.container, viewForm == 'Minsk' && 'container')}>
                    {viewForm == 'Home' && (
                      <div className={styles.item}>
                        <div className={styles.itemTitle}>City</div>
                        <SSelector
                          options={cities}
                          placeholder={initialValues.city ? initialValues.city : 'Choose'}
                          name={'city'}
                          setValue={setFieldValue}
                        />
                      </div>
                    )}
                    <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                      <div className={styles.itemTitle}>Rooms</div>
                      <SSelector
                        options={roomsList}
                        placeholder={roomsMinsk ? roomsMinsk : 'Choose'}
                        name={'rooms'}
                        setValue={setFieldValue}
                      />
                    </div>
                    <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                      <div className={styles.itemTitle}>Cost a day (USD)</div>
                      <div className={styles.prices}>
                        <SInput
                          type="number"
                          placeholder={initialValues.priceFrom ? initialValues.priceFrom : 'От'}
                          name={'priceFrom'}
                        />{' '}
                        -
                        <SInput
                          type="number"
                          placeholder={initialValues.priceTo ? initialValues.priceTo : 'До'}
                          name={'priceTo'}
                        />
                      </div>
                    </div>
                    <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                      <Button
                        className={styles.buttonOptions}
                        onClick={viewForm == 'Home' ? handleBtnOptionsHome(handleSubmit) : handleBtnOptionsCity}
                      >
                        More options
                        <OptionsIcon width={16} height={18} />
                      </Button>
                    </div>
                    {viewForm !== 'Home' && (
                      <div className={clsx(styles.item, viewForm == 'Minsk' && styles.itemCity)}>
                        <Button
                          type="reset"
                          className={styles.buttonClear}
                          onClick={() => {
                            handleReset();
                            dispatch(setRoomsMinsk(''));
                            dispatch(setPriceFromMinsk(0));
                            dispatch(setPriceToMinsk(0));
                            dispatch(setPeopleCount(''));
                            dispatch(setDistrict(''));
                            dispatch(setMetro(''));
                            dispatch(setOptions([]));
                            values.options = [];
                            dispatch(setSortMode(''));
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                    )}
                    {viewForm == 'Home' && (
                      <div className={clsx(styles.item)}>
                        <Button className={styles.buttonMapHome} onClick={handleSubmit}>
                          Show on map
                          <MapIcon width={12} height={15} />
                        </Button>
                      </div>
                    )}
                    <div className={styles.button}>
                      {viewForm == 'Home' && (
                        <Button type="submit" className={styles.buttonSubmitHome} onClick={handleSubmit}>
                          Show
                          <ArrowIcon width={10} height={10} />
                        </Button>
                      )}
                      {viewForm == 'Minsk' && (
                        <Button type="submit" className={styles.buttonSubmitCity} onClick={handleSubmit}>
                          Show items
                          <ArrowIcon width={10} height={10} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {viewForm == 'Minsk' && (
                  <>
                    <div className={clsx(styles.container, 'container')}>
                      <div className={clsx(styles.options)} ref={optionsRef}>
                        <div className={clsx(styles.item, styles.itemAdd)}>
                          <div className={styles.itemTitle}>Sleeping places</div>
                          <SSelector
                            options={peopleList}
                            placeholder={initialValues.peopleCount ? initialValues.peopleCount : 'Choose'}
                            name={'peopleCount'}
                            setValue={setFieldValue}
                            className={styles.input}
                          />
                        </div>
                        <div className={clsx(styles.item, styles.itemAdd)}>
                          <div className={styles.itemTitle}>District</div>
                          <SSelector
                            options={districtsMinskList}
                            placeholder={initialValues.district ? initialValues.district : 'Choose'}
                            name={'district'}
                            setValue={setFieldValue}
                            className={styles.input}
                          />
                        </div>
                        <div className={clsx(styles.item)}>
                          <div className={styles.itemTitle}>Subway</div>
                          <SSelector
                            options={metroMinskList}
                            placeholder={initialValues.metro ? initialValues.metro : 'Choose'}
                            name={'metro'}
                            setValue={setFieldValue}
                            className={styles.input}
                          />
                        </div>
                        <div></div>
                        <div></div>
                        <SCheckboxList options={optionsList} />
                      </div>
                    </div>
                    <div className="container">
                      <section className={styles.controls}>
                        <div className={styles.sort}>
                          <SSelector
                            options={sortList}
                            placeholder={initialValues.sort ? initialValues.sort : 'DEFAULT'}
                            name={'sort'}
                            setValue={setFieldValue}
                            setSelectedSwiftly={useUpdateFilter(setSortMode, values.sort)}
                          />
                        </div>
                        <div className={styles.view}>
                          <Button
                            className={clsx(styles.buttonMode, listMode && styles.buttonModeActive)}
                            onClick={() => dispatch(setListMode(true))}
                          >
                            <ListIcon width={14} height={14} />
                            List
                          </Button>
                          <Button
                            className={clsx(styles.buttonMode, !listMode && styles.buttonModeActive)}
                            onClick={() => dispatch(setListMode(false))}
                          >
                            <TileIcon width={14} height={14} />
                            Table
                          </Button>
                        </div>
                        <div className={styles.map}>
                          <Button className={styles.buttonMapCity} onClick={() => navigate(PagesLinks.MAPS_PAGE)}>
                            <MapIcon width={11} height={14} />
                            On map
                          </Button>
                        </div>
                      </section>
                    </div>
                  </>
                )}
              </fieldset>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
