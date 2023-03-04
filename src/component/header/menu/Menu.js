import React, { useState } from 'react'
import styles from './menu.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav}`}>
        <div className={`${styles.logo}`}>
          <a href="/">Logo</a>
        </div>
        <button className={`${styles.toggle}`} onClick={handleToggle}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </button>
        <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
          <li>Home</li>
          <li>Posts</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
