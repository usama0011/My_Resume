import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/LatestNews.module.css'
const LatestNews = () => {
  const latestNews=[{
    newsImage:"https://images.unsplash.com/photo-1529071753386-dfb44ff59f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    newsHeadingLine:"New Technology Stack 2022",
    newsAuthor:"Usmaa Ahmad",
    newpublishDate:"20 DEC 2022"
  },{
    newsImage:"https://images.unsplash.com/photo-1536855337232-a0f6f6f57142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    newsHeadingLine:"Japan New IT Infastructure",
    newsAuthor:"Haider Ali",
    newpublishDate:"30 JAN 2022"
  },{
    newsImage:"https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    newsHeadingLine:"USA New AI Tools",
    newsAuthor:"Muhammad Saim",
    newpublishDate:"31 DEC 2023"
  }]
  return (
    <div>

    <div  className={styles.container}>
      <div className={styles.new_Top}>
        <p>News</p>
        <h1>Latest News</h1>
        <div className={styles.new_Grid}>
         {latestNews.map((item,index)=>(
          <>
          <div key={index} className={styles.ImageContainer}>
            <Image className={styles.myImage} src={item.newsImage} width={350} height={250} alt="newImage"/>
            <h2>{item.newsHeadingLine}</h2>
            <div className={styles.dates}>
              <span>{item.newsAuthor}</span> <CalendarDaysIcon className={styles.DateIcon}/> <span>{item.newpublishDate}</span>
            </div>
          </div>
          </>
         ))}
        </div>
      </div>
    </div>
    <div className={styles.explore}>
          <Link className={styles.exploreLink} href="/latestnews">Explore More</Link>
        </div>
    </div>
  )
}

export default LatestNews