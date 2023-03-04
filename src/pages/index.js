import { useState } from 'react'
import Card from '@/component/body/card/Card'
import H2 from '@/component/body/h2/H2'
import Logo from '@/component/body/Logo/Logo'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { cardData } from '../component/body/card/cardData'

const index = () => {
  const [showOldPosts, setShowOldPosts] = useState(false);
  const currentCardData = showOldPosts ? oldPosts : cardData.slice(0, 6);

  return (
    <div className={styles.bodyMain}>
      <Logo />
      <H2 />
      <div className={styles.cardContainer}>
        {currentCardData.map((event) => (

          <Link href={`/posts/${event.title}`} key={event.id}>
            <Card title={event.title} image={event.image} date={event.date} />

          </Link>

        ))}
      </div>
      {!showOldPosts && cardData.length > 6 && (
        <div className={styles.buttonContainer}>
          <Link href="/oldPosts">
            <button className={styles.button}>Postagens Antigas</button>
          </Link>
        </div>
      )}
      {showOldPosts && (
        <div className={styles.buttonContainer}>
          <Link href="/">
            <button className={styles.button}>Voltar</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default index;
