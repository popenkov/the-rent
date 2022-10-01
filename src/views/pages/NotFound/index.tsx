import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { ReactComponent as ErrorIcon } from 'assets/images/404.svg';
import { Button } from 'components/UI/Button';
import { HomeIcon } from 'components/icons';

import styles from './NotFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(PagesLinks.MAIN_PAGE);
  };

  return (
    <main className={styles.error}>
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <h1 className={styles.title}>Ошибка 404</h1>
          <p className={styles.description}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
          <Button className={styles.button} onClick={handleButtonClick}>
            <HomeIcon width={12} height={12} />
            Вернуться на главную
          </Button>
        </div>
        <div className={styles.code}>
          <ErrorIcon />
        </div>
      </div>
    </main>
  );
};
