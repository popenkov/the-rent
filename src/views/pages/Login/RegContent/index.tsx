import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { SInput } from 'components/UI/SInput';
import { Button } from 'components/UI/Button';
import { WarningIcon } from 'components/icons';

import styles from './RegContent.module.scss';

export const RegContent = () => {
  const [verifed, setVerifed] = useState(false);
  const [viewReg, setViewReg] = useState(true);
  const navigate = useNavigate();

  function onChangeReCaptcha() {
    setVerifed(true);
  }

  const initialValues = {
    login: '',
    email: '',
    pass: '',
    confirmPass: '',
  };

  const validationSchema: unknown = yup.object().shape({
    login: yup
      .string()
      .required('Login is required')
      .matches(/^[a-zA-Z]+$/, 'Only latin symbols'),
    email: yup.string().email().required('Email is required'),
    pass: yup
      .string()
      .required('Password is required')
      .matches(/^[a-zA-Z0-9]+$/, 'Only latin symbols and number'),
    confirmPass: yup
      .string()
      .required('Password is required')
      .oneOf([yup.ref('pass'), null], 'The password are not equaled'),
  });

  return (
    <>
      {viewReg ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Registration</h1>
          <div className={styles.content}>
            <Formik
              initialValues={initialValues}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  setViewReg(false);
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
                        type="email"
                        placeholder="Email"
                        iconName="email"
                        name={'email'}
                        isWarning={errors.email ? true : false}
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
                      <SInput
                        type="password"
                        placeholder="Please, repeat password"
                        iconName="pass"
                        name={'confirmPass'}
                        isWarning={errors.confirmPass ? true : false}
                        width={'306px'}
                      />
                    </div>
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChangeReCaptcha} />
                    <div className={styles.buttons}>
                      {!isValid && (
                        <Button className={styles.buttonWarning} onClick={() => console.log('error')}>
                          Incorrect data
                          <WarningIcon width={20} height={20} />
                        </Button>
                      )}
                      <Button type="submit" onClick={handleSubmit} disabled={!verifed} className={styles.buttonReg}>
                        Register
                      </Button>
                    </div>
                  </fieldset>
                </Form>
              )}
            </Formik>
            <div className={styles.description}>
              <h2 className={styles.listTitle}>Пользователь обязуется:</h2>
              <ul className={styles.list}>
                <li className={styles.item}>
                  предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;{' '}
                </li>
                <li className={styles.item}>
                  добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет
                  за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не
                  соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы
                  других граждан либо действующее законодательство Республики Беларусь.
                </li>
              </ul>
              <div className={styles.footer}>
                Have an account? <Link to={PagesLinks.LOGIN_PAGE}>Log in</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container_confirm}>
          <h1 className={styles.title}>PLease, confirm your registration</h1>
          <div className={styles.content}>
            Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма
            нет, то проверьте спам.
          </div>
          <Button className={styles.buttonReg} onClick={() => navigate(PagesLinks.MAIN_PAGE)}>
            OK
          </Button>
        </div>
      )}
    </>
  );
};
