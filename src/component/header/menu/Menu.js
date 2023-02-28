import React from 'react'
import styles from './menu.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>Posts</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <form className={styles.form}>
          <label>
            <input type="search" placeholder="Pesquisar nesse blog" className={styles.searchInput} />
          </label>
        </form>
      </nav>
    </header>
  )
}

export default Header
