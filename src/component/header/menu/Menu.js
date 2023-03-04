import Link from 'next/link';
import React, { useState } from 'react';
import styles from './menu.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav}`}>

        <button className={`${styles.toggle}`} onClick={handleToggle}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          {isOpen && <span className={`${styles.close}`} onClick={handleToggle}>X</span>}
        </button>
        <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>

          <Link className={styles.menuBlink} href={"/"}><li onClick={handleLinkClick}>Home</li></Link>
          <Link className={styles.menuBlink} href={"/sobre"}><li onClick={handleLinkClick}>Sobre</li></Link>
          <Link className={styles.menuBlink} href={"/contato"}><li onClick={handleLinkClick}>Contato</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
