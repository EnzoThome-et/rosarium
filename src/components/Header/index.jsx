import React from 'react';
import styles from './header.module.scss';
import Logo from '../../assets/Logo1.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
    </header>
  )
}
