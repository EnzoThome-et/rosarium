import React from 'react';
import styles from './header.module.scss';
import Logo from '../../assets/Logo1.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" onClick={() => navigate('/')}/>
      <div>
        <h3>"Deus reuniu todas as águas e deu nome de mar, reuniu todas as graças e deu o nome de Maria."</h3>
        <p>São Luiz Grignon de Montfort</p>
      </div>
    </header>
  )
}
