import React from 'react';
import styles from './header.module.scss';
import Logo from '../../assets/Logo1.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <h3>"Azul é seu manto, branco é seu véu. Mãezinha, eu quero te ver lá no céu."</h3>
    </header>
  )
}
