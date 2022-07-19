import styles from './Proyectos.module.css'

import { motion, Variants } from 'framer-motion'

const cardVariants: Variants = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 2,
    },
  },
}

const Proyectos = () => {
  return (
    <motion.section
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      id='proyectos'
      className={styles.proyectos}
      variants={cardVariants}
    >
      <h2 className={styles.proyectosTitle}>Proyectos</h2>
    </motion.section>
  )
}

export default Proyectos
