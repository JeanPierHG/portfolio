import type { NextPage } from 'next'
import Head from 'next/head'

import { Header, Proyectos } from '../components'
import favicon from '../public/favicon.ico'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jean Pierre Huaman</title>
      </Head>
      <div className='container'>
        <Header />
        <Proyectos />
      </div>
    </>
  )
}

export default Home
