import React from 'react'

import styles from './SearchWrapper.module.scss'

export const SearchWrapper = (props) => {
  return (
    <section className={styles.wrapper}>
        {props.children}
    </section>
  )
}
