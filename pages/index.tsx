import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    })
  }, [])
  return (
    <div className={styles.main}>
      <h1>En proceso...</h1>
    </div>
  )
}

export default Home
