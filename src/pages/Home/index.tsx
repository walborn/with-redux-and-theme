import React from 'react'
import logo from './logo.svg'

import styles from './index.module.scss'

const Home = () => (
  <div className={styles.root}>
    <h1>Home</h1>
    <div className={styles.logo}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  </div>
)

export default Home
