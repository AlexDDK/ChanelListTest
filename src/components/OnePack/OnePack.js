import React from 'react'
import styles from './OnePack.module.css'

export default function OnePack({pack}) {
  return (
    <div className={styles.pack}>
        <h3>{pack.name}</h3>
        <p><b>Цена пакета:</b> {pack.price} р.</p>
        <div className={styles.description}>{pack.description}</div>
    </div>
  )
}
