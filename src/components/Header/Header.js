import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Форма подбора оптимального пакета каналов</h1>
        <p>Просто отметьте желательные каналы</p>
    </header>
  )
}
