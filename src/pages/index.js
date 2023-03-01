import Card from '@/component/body/card/Card'
import H2 from '@/component/body/h2/H2'
import Logo from '@/component/body/Logo/Logo'
import React from 'react'
import styles from '../styles/index.module.css'



const index = () => {
  return (
    <div className={styles.bodyMain}>
      <Logo />
        <H2 />
      <div>
        <Card />

      </div>
    </div>
  )
}

export default index