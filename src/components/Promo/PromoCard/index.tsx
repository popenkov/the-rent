import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { PromoCardProps } from './PromoCard.types';
import { SButtonIcon } from 'components/UI/SButtonIcon';
import { ReactComponent as ArrowCirleIcon } from 'assets/images/icons/arrowCircle.svg';
import { Button } from 'components/UI/Button';

import styles from './PromoCard.module.scss';

export const PromoCard: FC<PromoCardProps> = ({ title, description, mode, img, tags, iconLink }) => {
  const promoClassName = mode === 'normal' ? styles.card : [styles.card, styles.cardWide].join(' ');
  const navigate = useNavigate();

  return (
    <article className={promoClassName}>
      <div className={styles.container}>
        <div className={styles.description}>{description}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.tags}>
          {tags?.map((tag) => (
            <div className={styles.tag} key={tag.label}>
              <Button className={styles.buttonTag} onClick={() => navigate(tag.link)}>
                {tag.label}
              </Button>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          {iconLink && (
            <SButtonIcon btnOnClick={() => navigate(iconLink)}>
              <ArrowCirleIcon width="40" height="40" fill="red" className={styles.icon} />
            </SButtonIcon>
          )}
        </div>
      </div>
      <img src={img} alt={title} width={'auto'} height={270} className={styles.img} />
    </article>
  );
};
