import { NextPage } from 'next'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoNav}>
        <p>Jean Pierre Huaman</p>
      </div>
      <ul className={styles.listLinks}>
        <li className={styles.itemLinks}>
          <a href='#sobremi'>Sobre mí</a>
        </li>
        <li className={styles.itemLinks}>
          <a href='#proyectos'>Proyectos</a>
        </li>
        <li className={styles.itemLinks}>
          <a href='#tecnologias'>Tecnologías</a>
        </li>
        <li className={styles.itemLinks}>
          <a href='#contacto'>Contacto</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
