import { useState } from 'react'
import Card from '@/component/body/card/Card'
import H2 from '@/component/body/h2/H2'
import Logo from '@/component/body/Logo/Logo'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import { cardData } from '../component/body/card/cardData'

const OldPosts = () => {
    const [showNewPosts, setShowNewPosts] = useState(false)

    const newPosts = cardData.slice(0, 6)
    const oldPosts = cardData.slice(6)

    const handleShowNewPosts = () => setShowNewPosts(true)

    return (
        <div className={styles.bodyMain}>
            <Logo />
            <H2 />
            <div className={styles.cardContainer}>
                {oldPosts.map((event) => (
                    <Card title={event.title} date={event.date} key={event.id} image={event.image} />
                ))}
            </div>
            {!showNewPosts && (
                <Link href="/" className={styles.button2}>
                    <button onClick={handleShowNewPosts} className={styles.button}>
                        Ver postagens recentes
                    </button>
                </Link>
            )}

        </div>
    )
}

export default OldPosts
