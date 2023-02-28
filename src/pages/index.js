import Card from '@/component/body/card/Card'
import H2 from '@/component/body/h2/H2'
import Logo from '@/component/body/Logo/Logo'
import React from 'react'
import styles from '../styles/index.module.css'



const index = () => {
  return (
    <div className={styles.bodyMain}>
      <div>
        <Logo />
        <H2 />
        <Card />
      </div>
    </div>
  )
}

export default index