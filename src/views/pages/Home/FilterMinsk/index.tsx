import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';

import { SearchWrapper } from 'components/SearchWrapper';
import { SSelector } from 'components/UI/SSelector';
import { metroMinskList, districtsMinskList } from 'core/mockData/mockData';
import { apartmentsMinskSlice } from 'store/apartments/apartmentsMinsk.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hooks';

import styles from './FilterMinsk.module.scss';

export const FilterMinsk = () => {
  const dispatch = useAppDispatch();
  const { setMetro, setDistrict } = apartmentsMinskSlice.actions;
  const { metro, district } = useAppSelector((state) => state.apartmentsMinskReducer);

  const initialValues = {
    metro: metro,
    district: district,
  };

  const useUpdateFilter = (action, value) => {
    useEffect(() => {
      dispatch(action(value));
    }, [value]);
  };

  return (
    <>
      <SearchWrapper>
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className={styles.form}>
              {
                <fieldset className={styles.fieldset}>
                  <div className={styles.item}>
                    <SSelector
                      options={metroMinskList}
                      placeholder={metro ? metro : 'Subway'}
                      name={'metro'}
                      className={`${styles.input} ${styles.metro}`}
                      setValue={setFieldValue}
                      setSelectedSwiftly={useUpdateFilter(setMetro, values.metro)}
                    />
                  </div>
                  <div className={styles.item}>
                    {
                      <SSelector
                        options={districtsMinskList}
                        placeholder={district ? district : 'Район'}
                        name={'district'}
                        className={styles.input}
                        setValue={setFieldValue}
                        setSelectedSwiftly={useUpdateFilter(setDistrict, values.district)}
                      />
                    }
                  </div>
                </fieldset>
              }
            </Form>
          )}
        </Formik>
      </SearchWrapper>
    </>
  );
};
