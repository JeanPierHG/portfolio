import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <link rel='shortcut icon' href='/public/favicon.ico' />
        <title>Jean Pierre Huaman</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home
