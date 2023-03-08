import Image from 'next/image'
import styles from '../styles/Certifications.module.css'
import certficateOne from '../assets/Images/BackEnd.png';
import certficateTwo from '../assets/Images/FrontEnd.png';
import certficateThree from '../assets/Images/credly.png';
import certficateFour from '../assets/Images/DataBase.jpg';
import certficateFive from '../assets/Images/Deploma.png';
import certficateSix from '../assets/Images/JavaScript.png';
import certficateSeven from '../assets/Images/React.png';
import certficateEight from '../assets/Images/hongkong.png';
import { useState } from 'react';
import Link from 'next/link';
const Certifications = () => {
  const [activeItem,setActiveItem]=useState('AllItems')
  const AllListItems=[
    {
    certificateImage:certficateOne,
    certificateName:"Back End",
    certificateInstitute:"Free Code Camp",
    certificatieLink:"https://freecodecamp.org/certification/UsamaAhmad/back-end-development-and-apis"
  },
  {
    certificateImage:certficateTwo,
    certificateName:"Front End",
    certificateInstitute:"Free Code Camp",
    certificatieLink:"https://freecodecamp.org/certification/UsamaAhmad/responsive-web-design"

  },
  {
    certificateImage:certficateEight,
    certificateName:"Front End",
    certificateInstitute:"Coursera",
    certificatieLink:"https://www.coursera.org/account/accomplishments/verify/8H5L64MCVVSZ"


  },
  {
    certificateImage:certficateFour,
    certificateName:"DataBase",
    certificateInstitute:"Mongo DB University",
    certificatieLink:"https://university.mongodb.com/courses/M001/2022_September_27/completion"

  },
  {
    certificateImage:certficateFive,
    certificateName:"Full Stack",
    certificateInstitute:"Coursera",
    certificatieLink:"https://www.coursera.org/account/accomplishments/specialization/certificate/3YYSUPAHZBYV"

  },
  {
    certificateImage:certficateSix,
    certificateName:"Front End",
    certificateInstitute:"Free Code Camp",
    certificatieLink:"https://freecodecamp.org/certification/UsamaAhmad/javascript-algorithms-and-data-structures"

  },
  {
    certificateImage:certficateSeven,
    certificateName:"Front End",
    certificateInstitute:"Free Code Camp",
    certificatieLink:"https://freecodecamp.org/certification/UsamaAhmad/front-end-development-libraries"

  },
  {
    certificateImage:certficateThree,
    certificateName:"Full Stack",
    certificateInstitute:"Credly",
    certificatieLink:"https://www.credly.com/users/usama-ahmad.1ae80527/badges"

  }
]

  return (
    <div id="certificates" className={styles.container}>
    <p className={styles.header}>CERTIFICATION</p>
    <div className={styles.navigation_buttons}>
      <div className={styles.heading}>
      <h2>Certification Achievement</h2>
      </div>
      <div className={styles.nav_buttons}>
        <ul>
          <li style={activeItem === 'AllItems' ? {backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}} onClick={()=>setActiveItem('AllItems')}>All</li>
          <li style={activeItem === 'Front End' ? {backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}} onClick={()=>setActiveItem('Front End')}>Front End</li>
          <li style={activeItem === 'Back End' ? {backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}} onClick={()=>setActiveItem('Back End')}>Back End</li>
          <li style={activeItem === 'Full Stack' ? {backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}} onClick={()=>setActiveItem('Full Stack')}>Full Stack</li>
          <li style={activeItem === 'DataBase' ? {backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}} onClick={()=>setActiveItem('DataBase')}>DataBase</li>
        </ul>
      </div>
    </div>
        <div className={styles.gridBox}>
          {activeItem === 'AllItems' ? <div className={styles.grid_Container}>
            {AllListItems.map((item,i)=>{
              return(
                <>
              <div className={styles.image_Container}>
                <a href={item.certificatieLink} target="blank">
               <Image className={styles.single_image} src={item.certificateImage} key={i} width={350} height={300} alt="userProjectImage"/>  
               <div className={styles.subTitle}>
                <span>{item.certificateName}</span>
                <span>{item.certificateInstitute}</span>
               </div>
                </a>
              </div>
                </>
              )
            })}
          </div> : null}
          {activeItem === 'Front End' ? <div className={styles.grid_Container}>
            {AllListItems.filter((item)=>item.certificateName === 'Front End').map((item,i)=>{
              return(
                <> <div className={styles.image_Container}>
                <a href={item.certificatieLink} target="blank">
               <Image className={styles.single_image} src={item.certificateImage} key={i} width={350} height={300} alt="userProjectImage"/>  
               <div className={styles.subTitle}>
                <span>{item.certificateName}</span>
                <span>{item.certificateInstitute}</span>
               </div>
                </a>
              </div>
                </>
              )
            })}
          </div> : null}
          {activeItem === 'Back End' ? <div className={styles.grid_Container}>
            {AllListItems.filter((item)=>item.certificateName === 'Back End').map((item,i)=>{
              return(
                <> <div className={styles.image_Container}>
                <a href={item.certificatieLink} target="blank">
               <Image className={styles.single_image} src={item.certificateImage} key={i} width={350} height={300} alt="userProjectImage"/>  
               <div className={styles.subTitle}>
                <span>{item.certificateName}</span>
                <span>{item.certificateInstitute}</span>
               </div>
                </a>
              </div>
                </>
              )
            })}
          </div> : null}
          {activeItem === 'Full Stack' ? <div className={styles.grid_Container}>
            {AllListItems.filter((item)=>item.certificateName === 'Full Stack').map((item,i)=>{
              return(
                <> <div className={styles.image_Container}>
                <a href={item.certificatieLink} target="blank">
               <Image className={styles.single_image} src={item.certificateImage} key={i} width={350} height={300} alt="userProjectImage"/>  
               <div className={styles.subTitle}>
                <span>{item.certificateName}</span>
                <span>{item.certificateInstitute}</span>
               </div>
                </a>
              </div>
                </>
              )
            })}
          </div> : null}
          {activeItem === 'DataBase' ? <div className={styles.grid_Container}>
            {AllListItems.filter((item)=>item.certificateName === 'DataBase').map((item,i)=>{
              return(
                <> <div className={styles.image_Container}>
                <a href={item.certificatieLink} target="blank">
               <Image className={styles.single_image} src={item.certificateImage} key={i} width={350} height={250} alt="userProjectImage"/>  
               <div className={styles.subTitle}>
                <span>{item.certificateName}</span>
                <span>{item.certificateInstitute}</span>
               </div>
                </a>
              </div>
                </>
              )
            })}
          </div> : null}
        </div>
        <div className={styles.explore}>
          <Link className={styles.exploreLink} href="/certificates">Explore More</Link>
        </div>
    </div>
  )
}

export default Certifications