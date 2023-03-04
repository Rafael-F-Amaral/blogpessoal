import React from 'react'
import styles from './h1Logo.module.css'
import Image from 'next/image'
import fictopialogo from "./fictopia-logo.svg"
import Link from 'next/link'


const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image className={styles.LogoImage} src={fictopialogo} alt="a" />
    </div>
  )
}

export default Logo
