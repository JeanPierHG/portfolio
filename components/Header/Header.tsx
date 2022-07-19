import { Navbar, Hero } from '../index'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header id='sobremi' className={styles.header}>
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header
