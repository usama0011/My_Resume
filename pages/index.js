import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import HomePage from './HomePage'


const Home = () => {
 
  return (
    <div className={styles.container}>
      <HomePage/>
       </div>
  )
}

export default Home;