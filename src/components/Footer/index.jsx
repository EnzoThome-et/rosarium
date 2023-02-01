import React from 'react';
import styles from './footer.module.scss';
import Logo from '../../assets/Logo1.png'

export default function Footer() {
  return (
    <header className={styles.footer}>
      <img src={Logo} alt="Logo" />
    </header>
  )
}