import styles from '../styles/NavBar.module.css'
import {Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
const Header = () => {
  const [show,setShow]=useState(false);
  const [scroll,setScroll]=useState(0)
  function handleScrollSecond(e){
   setScroll(e.target.documentElement.scrollTop)
  }
  const [Shadow,setBoxShadow]=useState(false);
  const [downloading, setDownloading] = useState(false);
  const [currentScroll,handSetScroll]=useState(0)
  const [showMobileNav,setShowMobileNav]=useState(false);
  const handleScrollFunction=(e)=>{
    handSetScroll(e.target.documentElement.scrollTop)
  }
  const handleClick=(e)=>{
    setShowMobileNav((previous)=>!previous)
  }
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
  useEffect(()=>{
   window.addEventListener('scroll',handleScrollFunction)
   
   function setShaowNav(){
    if(currentScroll >= 50){
      setBoxShadow(true)
    }
    else{
      setBoxShadow(false)
    }
   }
   setShaowNav()
   return ()=> window.removeEventListener('scroll',handleScrollFunction)
  },[currentScroll])

  useEffect(()=>{
    window.addEventListener('scroll',handleScrollSecond)
    
    function setShaowNav(){
      if(currentScroll >= 500){
        setShow(true)
      }
      else{
        setShow(false)
      }
     }
     setShaowNav()
    return ()=>window.addEventListener('scroll',handleScrollFunction)
    },[currentScroll])
  return (
    <div id='top'   style={Shadow ? {boxShadow:'0 3px 3px -3px rgba(0,0,0,.2)'}:{boxShadow:'none'}} className={styles.container}>
      <nav className={styles.navBar}>
        <div className={styles.brand}><Link href="/">𝓤𝓼𝓪𝓶𝓪 𝓐𝓱𝓶𝓪𝓭 </Link> </div>
        <div className={styles.navigation}>
          <ul>
          <li className={styles.active}><a href="#banner">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#">Contact</a></li>
          <button className={styles.downloadCV} disabled={downloading} onClick={handleDownloadCV}>{downloading ? "Downloading..." : "Download CV"}</button>
        </ul>
        </div>
          <Bars3Icon onClick={handleClick} className={styles.menuIcon}/>
      </nav>
      {showMobileNav && <div className={styles.mobileNavigation}>I am the Mobile Navigation</div> }
      {show && 
    <Link href="/">
       <div className={styles.arrow_container}>
        <ArrowUpIcon className={styles.arrowUp}/>
       </div>
       </Link>
 }
      
    </div>
  )
}

export default Header;