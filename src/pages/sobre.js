import { useState } from 'react'
import Link from 'next/link'
import styles from '../pages/sobre/sobre.module.css'

const Index = () => {
  const [showOldPosts, setShowOldPosts] = useState(false);

  return (
    <div className={styles.bodyMain}>
      <div className={styles.sobreContainer}>
        <h2 className={styles.sobreTitle}>Sobre nós</h2>
        <p className={styles.sobreText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante gravida, posuere ipsum eget, consectetur nibh. Donec eget tortor risus. Quisque gravida augue id massa imperdiet aliquam. Phasellus sed turpis augue. Sed et risus a risus efficitur aliquam. Nullam ultricies ligula nec felis rhoncus elementum. Maecenas interdum nulla felis, a tincidunt purus bibendum sed. Aliquam eget libero in mauris laoreet dapibus. Ut eleifend tellus ac neque ultricies, ut molestie tellus lacinia. Sed porttitor velit risus, nec tincidunt est iaculis vitae. Aenean sagittis feugiat augue, non finibus ex pulvinar non. Donec vel sapien hendrerit, hendrerit neque vel, eleifend ipsum.
        </p>
        <div className={styles.sobreFoto}>
          <img src="https://images-ssl.gotinder.com/63e053372416d70100d80b68/640x800_75_cb41f923-d6da-4cb0-ba72-e77d392c617f.webp" alt="Minha foto" />
          <div className={styles.sobreTextoFoto}>
            <p>Leitor ávido</p>
            <p>Queria escrever sobre os mundos que visitou</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Index;
