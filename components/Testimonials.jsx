import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Testimonials.module.css'
const Testimonials = () => {
  const [index,setIndex]=useState(0);
  const delay = 3500;
  const timeoutRef = useRef(null);
  const clientsREviewList =[{
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eum exercitationem neque iusto aliquam consequatur, quibusdam doloremque ea dicta quisquam atque necessitatibus vero commodi voluptates? Vitae repellendus voluptates architecto placeat!",
    reviewerImage:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    reviewerName:"Abdul Moiz",
    reviewerProfession:"Developer"

  },{
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eum exercitationem neque iusto aliquam consequatur, quibusdam doloremque ea dicta quisquam atque necessitatibus vero commodi voluptates? Vitae repellendus voluptates architecto placeat!",
    reviewerImage:"https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    reviewerName:"Haider Ali",
    reviewerProfession:"UI/UX Developer"

  },{
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eum exercitationem neque iusto aliquam consequatur, quibusdam doloremque ea dicta quisquam atque necessitatibus vero commodi voluptates? Vitae repellendus voluptates architecto placeat!",
    reviewerImage:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    reviewerName:"Muhammad Saim",
    reviewerProfession:"Back End Developer"
  }]
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(()=>{
    resetTimeout()
    timeoutRef.current= setTimeout(()=>setIndex((prev)=>prev === clientsREviewList.length-1 ? 0 : prev+1),delay)
   return ()=>{resetTimeout()}
  },[index])
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div>
        <p>TESTIMONIALS</p>
        <h1>What clients say about my portfolio template</h1>
      </div>
      <div className={styles.sliderContainer}>
        {clientsREviewList.map((item,i)=>{
          return(
            <div  key={i} style={{transform:`translateY(${-index * 500}px)`}} className={styles.slide}>
              <div className={styles.review}>
                <p>{item.review}</p>
                <div className={styles.user_Box}>
                  <div><Image src={item.reviewerImage}  width={70} height={70} className={styles.userImage} alt="clientImage"/></div>
                  <div className={styles.userDetail}>
                    <h2>{item.reviewerName}</h2>
                    <p>{item.reviewerProfession}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
          <div className={styles.slideshowDots}>
        {clientsREviewList.map((_, idx) => (
          <div style={index === idx ? {backgroundColor:"#2EE59D"}:{backgroundColor:"#c4c4c4"}} onClick={()=>setIndex(idx)} key={idx} className={styles.slideshowDot}></div>
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials