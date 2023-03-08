import Image from 'next/image'
import styles from '../styles/TechnologyCard.module.css'
const TechnologCard = ({source,tName}) => {
  return (
    <div className={styles.Container}>
       <div className={styles.technologyLogo}>
        <Image src={source} width={30} height={30} alt="logo"/>
       </div>
       <div className={styles.brandName}><h3>{tName}</h3></div>
    </div>
  )
}

export default TechnologCard