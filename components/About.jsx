import styles from '../styles/About.module.css'
import adminImage from '../assets/Images/newUser.png'
import Image from 'next/image'
import { useState } from 'react';
const About = () => {
  const [downloading, setDownloading] = useState(false);
  const handleDownloadCV =()=>{
    setDownloading(true);
    let fileURL = './cv.pdf';
    fetch(fileURL).then((response)=>response.blob()).then((blob)=>{
      setDownloading(false);
      const url = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'cv.pdf';
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url)
    }).catch(()=>{
      setDownloading(false)
    })
  }
  return (
    <div id='about' className={styles.container}>
     <div className={styles.imageContainer}>
      <Image className={styles.adminImage} src={adminImage} width={300} height={300} alt="userImage"/>
     </div>
     <div className={styles.introContainer}>
      <p className={styles.aboutMeHead}>ABOUT ME</p>
      <h1 className={styles.heading}>Creative Independent Web Developer based in USA</h1>
      <p className={styles.description}>I am web designer, and I am very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
      <button className={styles.dv} disabled={downloading} onClick={handleDownloadCV}>{downloading ? "Download..." : "Download CV"}</button>
     </div>
    </div>
  )
}

export default About