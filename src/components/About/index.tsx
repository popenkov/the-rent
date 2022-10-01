import React, { FC } from 'react';

import { AboutProps } from './About.types';

import styles from './About.module.scss';

export const About: FC<{ about: AboutProps }> = (props) => {
  const { subtitle, title, img, description } = props.about;
  return (
    <article className={styles.about}>
      <div className={styles.subtitle}>{subtitle}</div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.img}>
        <img src={img} alt={title} width={405} height={230} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} className={styles.description}></div>
    </article>
  );
};
