import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo Donasi" className={styles.logo} />
    </header>
  );
};

export default Header;
