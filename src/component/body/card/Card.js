import React from 'react'
import styles from './card.module.css'


const Card = () => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <article className={styles.title}>
            <h2>Titulo da historia</h2>
          </article>
          <span className={styles.postTime}>
            Data da postagem
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
