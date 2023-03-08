import styles from '../../styles/Portfolio.module.css'
import AllPortfolio from '../../components/PortfolioData.json'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
const Index = () => {
   const myRoute = useRouter();
   console.log(myRoute.query)
  return (
    <div className={styles.container}>
      <div className={styles.navigation_pannel}>
        <div className={styles.heading}>
          <h2>Some of My Owesome Projects</h2>
        </div>
        <div className={styles.navButtons}>
          <select name="filter" id="fitter">
            <option value="reactjs">React JS</option>
            <option value="nextjs">Next JS</option>
            <option value="nodejs">Node JS</option>
            <option value="mongodb">Mongo DB</option>
            <option value="mysql">My SQL</option>
            <option value="crud">Crud Operations</option>
            <option value="auth">Authentication</option>
          </select>
        </div>
      </div>
      {/* Grid Box */}
      <div className={styles.gridContainer}>
        {AllPortfolio.map((item,i)=>{
          return(
            <>
            <Link href={`/creativeportfolio/${i}`}>
            <div key={i} className={styles.image_Container}>
                
              <Image className={styles.Portfolio_singleImage} src={item.image} alt="workImage" width={300} height={300}/>

            </div>
            </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Index