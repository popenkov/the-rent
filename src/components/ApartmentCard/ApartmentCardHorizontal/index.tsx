import React, { FC, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { ApartmentCardProps } from '../ApartmentCard.types';
import { ReactComponent as MapIcon } from 'assets/images/icons/map.svg';
import { ReactComponent as MetroIcon } from 'assets/images/icons/metro.svg';
import { ReactComponent as UserIcon } from 'assets/images/icons/user.svg';
import { PagesLinks } from 'core/constants/pagesLinks.constant';
import { UserCard } from 'components/UserCard';
import { useRefCloseOut } from 'hooks/useRefCloseOut';
import { SSwiper } from 'components/UI/SSwiper';
import { Button } from 'components/UI/Button';
import { PhoneIcon } from 'components/icons';

import styles from '../ApartmentCard.module.scss';

export const ApartmentCardHorizontal: FC<{ apartment: ApartmentCardProps }> = (props) => {
  const {
    id,
    title,
    address,
    img,
    status,
    price,
    peopleCount,
    peopleCountByRoom,
    rooms,
    square,
    description,
    owner,
    like = false,
  } = props.apartment;
  const [liked, setLiked] = useState(like);

  const navigate = useNavigate();
  const [ownerOpen, setOwnerOpen] = useState(false);
  const ownerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useRefCloseOut(ownerRef, setOwnerOpen);

  return (
    <article className={clsx(styles.card, styles.cardTile)}>
      <div className={clsx(styles.img)}>
        <SSwiper data={img} />
      </div>
      {status && <div className={styles.status}>{status}</div>}
      <div className={clsx(styles.container)}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>
            {price.toFixed(2)} USD <div className={styles.day}>a day</div>
          </div>
        </div>
        <address className={styles.address}>
          <div className={styles.item}>
            <MapIcon fill={'#664EF9'} width={16} height={20} />
            {address.city}, {address.street}
          </div>
        </address>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <UserIcon fill={'#686868'} width={15} height={15} className={styles.user} />
            {peopleCount} {peopleCountByRoom}
          </div>
          <div className={styles.tag}>{rooms}</div>
          {location.pathname == PagesLinks.MAIN_PAGE && square && (
            <div className={styles.tag}>
              {square} м<sup>2</sup>
            </div>
          )}
          <div className={styles.tag}>
            <MetroIcon fill={'#664EF9'} width={20} height={13} />
            {address.metro}
          </div>
          <div className={styles.tag}>
            <span dangerouslySetInnerHTML={{ __html: 'district:&nbsp;' }}></span>
            {address.district}
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        {ownerOpen && (
          <div className={styles.owner} ref={ownerRef}>
            <UserCard user={owner} />
          </div>
        )}
        <footer className={styles.footer}>
          <Button
            className={styles.buttonPhone}
            onClick={() => {
              setOwnerOpen(true);
            }}
          >
            <PhoneIcon width={9} height={15} />
            Contacts
          </Button>
          {location.pathname !== PagesLinks.MAIN_PAGE && (
            <Button
              onClick={() => {
                setLiked(!liked);
              }}
              className={!liked ? styles.buttonLiked : clsx(styles.buttonLiked, styles.buttonLikedActive)}
            >
              {!liked ? 'To favorites' : 'Added'}
            </Button>
          )}
          <Button className={styles.buttonMore} onClick={() => navigate(`${PagesLinks.APARTMENTS_MINSK_PAGE}/${id}`)}>
            More info
          </Button>
        </footer>
      </div>
    </article>
  );
};
