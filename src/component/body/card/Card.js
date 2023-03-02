import React from 'react'
import styles from './card.module.css'


const Card = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <article className={styles.title}>
            <h2>{props.title}</h2>
          </article>
          <span className={styles.postTime}>
            {props.date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
