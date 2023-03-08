import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import adminImage from '../assets/Images/newUser.png'
const Banner = () => {
  return (
    <div id='banner' className={styles.container}>
      <div className={styles.AboutMy}>
        <h1>Hay! My Name is <span className={styles.userName}> Usama Ahmad</span></h1>
        <p>I am a Software Developer currently working in Full Stack Web Development or MERN Stack Development.</p>
        <div className={styles.rank}>
          <span className={styles.ss}>Rank:</span><span>Entry Level Software Developer.</span>
        </div>
      </div>
      <div className={styles.largeImageContainer}>
        <Image  src={adminImage} className={styles.admin} width={300} height={300} alt="adminImage"/>
      </div>
    </div>
  )
}

export default Banner