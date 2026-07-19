import React from 'react'
import styles from "./Card.module.css";


export default function Cards({title, value, icon: Icon}) {
  return <>
  <div className={styles.cards}>
    <div className={styles.icon}>
      <Icon/>
    </div>
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  </div>
  </>
}
