import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={styles.copy}>© Personal Blog. Por: Rafael.A</div>
            <div>
                <ul className={styles.list}>
                    <li>instagram</li>
                    <li>twitter</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer