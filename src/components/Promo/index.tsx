import React, { FC } from 'react'
import { PromoCard } from './PromoCard'

import styles from './Promo.module.scss'
import { PromoProps } from './Promo.types'

export const Promo:FC<PromoProps> = ( {promoList} ) => {
  return (
    <section className={styles.promo}>
    {promoList.map((promo) => (
        <PromoCard
          title={promo.title}
          description={promo.description}
          img={promo.img}
          tags={promo.tags}
          iconLink={promo.iconLink}
          mode={promo.mode}
          key={promo.title}
        />
      ))}
    </section>
  )
}
