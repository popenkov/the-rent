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
      .required('Обязательно для заполнения')
      .matches(/^[a-zA-Z]+$/, 'Допускаются только латинские символы'),
    email: yup.string().email().required('Обязательно для заполнения'),
    pass: yup
      .string()
      .required('Обязательно для заполнения')
      .matches(/^[a-zA-Z0-9]+$/, 'Допускаются только латинские символы или цифры'),
    confirmPass: yup
      .string()
      .required('Обязательно для заполнения')
      .oneOf([yup.ref('pass'), null], 'Пароли не совпадают'),
  });

  return (
    <>
      {viewReg ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Регистрация</h1>
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
                        placeholder="Логин"
                        iconName="user"
                        name={'login'}
                        isWarning={errors.login ? true : false}
                        width={'306px'}
                      />
                      <SInput
                        type="email"
                        placeholder="Электронная почта"
                        iconName="email"
                        name={'email'}
                        isWarning={errors.email ? true : false}
                        width={'306px'}
                      />
                      <SInput
                        type="password"
                        placeholder="Пароль"
                        iconName="pass"
                        name={'pass'}
                        isWarning={errors.pass ? true : false}
                        width={'306px'}
                      />
                      <SInput
                        type="password"
                        placeholder="Повторите пароль"
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
                          Ошибка ввода
                          <WarningIcon width={20} height={20} />
                        </Button>
                      )}
                      <Button type="submit" onClick={handleSubmit} disabled={!verifed} className={styles.buttonReg}>
                        Зарегистрироваться
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
                Уже есть аккаунт? <Link to={PagesLinks.LOGIN_PAGE}>Войдите</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container_confirm}>
          <h1 className={styles.title}>Подтвердите регистрацию</h1>
          <div className={styles.content}>
            Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма
            нет, то проверьте спам.
          </div>
          <Button className={styles.buttonReg} onClick={() => navigate(PagesLinks.MAIN_PAGE)}>
            Понятно
          </Button>
        </div>
      )}
    </>
  );
};
