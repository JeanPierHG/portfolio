import Image from 'next/image'
import styles from './Hero.module.css'
import profile from '../../public/profile.png'
import { VscGithub } from 'react-icons/vsc'
import { BsLinkedin } from 'react-icons/bs'
import { RiSendPlane2Line } from 'react-icons/ri'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.ladoIzquierdo}>
        <Image
          objectFit='cover'
          width={700}
          height={800}
          src={profile}
          alt='mi-foto'
          className={styles.picture}
        />
        <div className={styles.redIcons}>
          <a
            href='https://github.com/JeanPierHG'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            <VscGithub className={styles.github} />
          </a>
          <a
            href='https://www.linkedin.com/in/jeanfullstackdev/'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            <BsLinkedin className={styles.linkedin} />
          </a>
        </div>
      </div>
      <div className={styles.ladoDerecho}>
        <div className={styles.header}>
          <h2>Hola, soy Jean Pierre</h2>
          <span>Full Stack Developer</span>
        </div>
        <p>
          Desarrollador apasionado por el código, para mí es un placer haber
          elegido esta carrera, actualmente me encuentro en busquedad de mis
          primeras experiencias profesionales.
        </p>
        <button>
          Descargar CV <RiSendPlane2Line className={styles.iconButtonSend} />
        </button>
      </div>
    </div>
  )
}

export default Hero
