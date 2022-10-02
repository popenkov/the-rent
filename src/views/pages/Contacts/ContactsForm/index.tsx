import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import { SInput } from 'components/UI/SInput';
import { Button } from 'components/UI/Button';

import styles from './ContactsForm.module.scss';

export const ContactsForm: FC<{ modalControl }> = (props) => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    message: yup.string().required('Field is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
          props.modalControl(true);
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit }) => (
        <Form className={styles.form}>
          <fieldset>
            <div className={styles.info}>
              <SInput
                type="text"
                placeholder="Enter your name"
                iconName="user"
                label="Your name"
                name={'name'}
                isWarning={errors.name ? true : false}
                width={'260px'}
              />
              <SInput
                type="email"
                placeholder="Enter your email"
                iconName="email"
                label="Your email"
                name={'email'}
                isWarning={errors.email ? true : false}
                width={'260px'}
              />
            </div>
            <label className={styles.label}>
              Your comment
              <Field
                as="textarea"
                name={'message'}
                placeholder="Comment"
                className={styles.textarea}
                style={errors.message ? { border: '1px solid #eb5757' } : { border: 'none' }}
              />
            </label>
            <div className={styles.buttonWrapper}>
              <Button type="submit" onClick={handleSubmit} className={styles.button}>
                Send
              </Button>
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
