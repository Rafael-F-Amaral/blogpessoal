import React from 'react'
import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={props.image} alt={props.title} />
          <div className={styles.imageContent}>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.postTime}>{props.date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
