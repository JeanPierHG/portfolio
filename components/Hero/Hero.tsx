import Image from 'next/image'
import styles from './Hero.module.css'
import profile from '../../public/profile.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.ladoIzquierdo}>
        <Image
          objectFit='cover'
          width={600}
          height={800}
          src={profile}
          alt='mi-foto'
        />
      </div>
      <div className={styles.ladoDerecho}>
        <div className={styles.header}>
          <h2>Hola, soy Jean Pierre</h2>
          <span>Full Stack Developer</span>
        </div>
        <p>
          Desarrollador apasionado por el código,para mí es un placer haber
          elegido esta carrera, actualmente me encuentro en busquedad de mis
          primeras experiencias profesionales.
        </p>
        <button>Descargar CV</button>
      </div>
    </div>
  )
}

export default Hero
