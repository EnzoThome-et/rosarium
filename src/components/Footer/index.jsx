import React from 'react';
import styles from './footer.module.scss';
import Logo from '../../assets/Logo1.png'

export default function Footer() {
  return (
    <header className={styles.footer}>
      <h3>"Um servo de Maria, jamais perecerá!"</h3>
      <img src={Logo} alt="Logo" />
    </header>
  )
}