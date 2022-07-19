import { NextPage } from 'next'

import { motion } from 'framer-motion'

import styles from './Navbar.module.css'

const Navbar: NextPage = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={styles.navbar}
    >
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
    </motion.nav>
  )
}

export default Navbar
