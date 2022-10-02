//import 'react-app-polyfill/ie11';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormControlLabel } from '@mui/material';

import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { SSwitch } from 'components/UI/Switch';
import { SInput } from 'components/UI/SInput';
import { Button } from 'components/UI/Button';
import { WarningIcon } from 'components/icons';

import styles from './LoginContent.module.scss';

export const LoginContent = () => {
  const navigate = useNavigate();
  const initialValues = {
    login: '',
    pass: '',
  };

  const validationSchema: unknown = yup.object().shape({
    login: yup
      .string()
      .required('Login is required')
      .matches(/^[a-zA-Z]+$/, 'Only latin symbols'),
    pass: yup
      .string()
      .required('Password is required')
      .matches(/^[a-zA-Z]+$/, 'Only latin symbols'),
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Authorization</h1>
      <div className={styles.description}>Log in to publish your ads</div>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
            navigate(PagesLinks.MAIN_PAGE);
          }, 400);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, handleSubmit, isValid }) => (
          <Form className={styles.form}>
            <fieldset className={styles.fieldset}>
              <div className={styles.controls}>
                <SInput
                  type="text"
                  placeholder="Username"
                  iconName="user"
                  name={'login'}
                  isWarning={errors.login ? true : false}
                  width={'306px'}
                />
                <SInput
                  type="password"
                  placeholder="Password"
                  iconName="pass"
                  name={'pass'}
                  isWarning={errors.pass ? true : false}
                  width={'306px'}
                />
                <div className={styles.remember}>
                  <FormControlLabel control={<SSwitch sx={{ m: 1 }} />} label="Remember my device" />
                  <Link to={'/mock-link'}>Have you forgotten the password?</Link>
                </div>
              </div>
              <div className={styles.buttons}>
                {!isValid && (
                  <Button type="submit" className={styles.buttonWarning} onClick={handleSubmit}>
                    Invalid data
                    <WarningIcon width={20} height={20} />
                  </Button>
                )}
                <Button type="submit" className={styles.buttonLogin} onClick={handleSubmit}>
                  Log in
                </Button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
      <div className={styles.footer}>
        No account? <Link to={PagesLinks.REG_PAGE}>Register</Link>
      </div>
    </div>
  );
};
