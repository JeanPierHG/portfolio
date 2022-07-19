import { Navbar, Hero } from '../index'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Header
