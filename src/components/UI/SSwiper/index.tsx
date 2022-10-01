/* eslint-disable import/no-unresolved */

import React, { useRef, useState, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import { SButtonIcon } from '../SButtonIcon';
import { ReactComponent as ArrowLeftIcon } from 'assets/images/icons/arrowLeft.svg';
import { Navigation, Pagination } from 'swiper';

import styles from './SSwiper.module.scss';

type SwiperProps<T> = {
  data: T;
};

export const SSwiper: FC<SwiperProps<string[]>> = ({ data }) => {
  const swiperNavPrevRef = useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = useRef<HTMLButtonElement>(null);
  const [swiperPagRef, setSwiperPagRef] = useState<HTMLElement | null>(null);

  return (
    <Swiper
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      pagination={{
        clickable: true,
        el: swiperPagRef,
        bulletClass: styles.paginationEl,
        bulletActiveClass: styles.paginationBtnActive,
      }}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      className={styles.mySwiper}
      onInit={(swiper) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        swiper.params.pagination.el = swiperPagRef;
      }}
    >
      {data.map((img) => (
        <SwiperSlide key={img} className={styles.mySwiperSlide}>
          <img src={img} />
        </SwiperSlide>
      ))}
      <SButtonIcon className={styles.mySwiperNavPrev} forwardRef={swiperNavPrevRef}>
        <ArrowLeftIcon width="9" height="15" fill="white" className={styles.icon} />
      </SButtonIcon>
      <SButtonIcon className={styles.mySwiperNavNext} forwardRef={swiperNavNextRef}>
        <ArrowLeftIcon width="9" height="15" fill="white" className={styles.icon} />
      </SButtonIcon>
      <div className={styles.pag}>
        <div ref={(node) => setSwiperPagRef(node)}></div>
      </div>
    </Swiper>
  );
};
