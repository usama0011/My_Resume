import styles from '../styles/Contact.module.css'
import { MapPinIcon,PhoneIcon,EnvelopeIcon,GlobeAltIcon ,LinkIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'
const Contact = () => {
  const initialState={
    name:"",
    email:"",
    subject:"",
    message:""
  }
  const [formData,setFormData]=useState(initialState)
  const [diplayMessage,setDisplayMessage]=useState(false);
  let myMessageBox = `<div>Messaage Send Success...</div>`
   const handleChange=({target})=>{
    setFormData((prev)=>({...prev,[target.name]:target.value}))
   }
   const handleFormSubmitControl= async (daata)=>{
   await fetch("/api/contact",{
    method:"POST",
    body:JSON.stringify(daata),
    headers:{
      "Content-Type":'application/json',
      "Accept":"application/json"
    }
   }) 
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    handleFormSubmitControl(formData)
    setFormData(initialState);
    console.log("Form Submit")
    let successFullMessage= setInterval(()=>{
       setDisplayMessage(true)
    },2000)
    clearInterval(successFullMessage)
   }
  return (
    <div className={styles.container}>
    <div className={styles.contact_Container}>
      <div className={styles.contact_left}>
        <h2>Let's get in touch</h2>
        <p>We're open for any suggestion or just <br /> to have a chat</p>
        <div className={styles.address_box}>
          <MapPinIcon className={styles.icon}/>
          <p>Address: 198 Est 12th street Islamabad, Pakistan</p>
        </div>
        <div className={styles.address_box}>
          <PhoneIcon className={styles.icon}/>
          <p>Phone: +92316-1682644 | +92311-6453909</p>
        </div>
        <div className={styles.address_box}>
          <EnvelopeIcon className={styles.icon}/>
          <p>Email:<a href="https://gmail.google.com "> za5232208@gmail.com</a></p>
        </div>
        <div className={styles.address_box}>
          <GlobeAltIcon className={styles.icon}/>
          <p>Website:<a href="https://localhost/3000"> https://localhost/3000</a></p>
        </div>
        <div className={styles.address_box}>
          <LinkIcon className={styles.icon}/>
          <p>LinkedIn: <a href="www.linkedin.com/in/usama-ahmad22"></a>www.linkedin.com/in/usama-ahmad22</p>
        </div>
      </div>
      <div className={styles.contact_right}>
        <h2>Send a Message</h2>
        <div className={styles.form_container}>
          <form action="" onChange={handleChange}>
            <div className={styles.first_box}>
              <div className={styles.item}>
                <label htmlFor="name">FULL NAME</label>
                <input id='input' required onChange={handleChange} name='name' value={formData.fullname}  className={styles.specila} type="text" placeholder='Name' />
              </div>
              <div className={styles.item}>
                <label htmlFor="name">EMAIL</label>
                <input required onChange={handleChange} name='email' value={formData.email}  type="email" placeholder='Email' />
              </div>
            </div>
            <div className={styles.item}>
                <label htmlFor="subject">SUBJECT</label>
                <input required onChange={handleChange} name='subject' value={formData.subject}  type="text" placeholder='Subject' />
              </div>
              <div className={styles.item}>
                <label htmlFor="messaage">Message</label>
                <textarea required onChange={handleChange}  value={formData.message}  className={styles.text_area} placeholder="Message" name='message' id="message" cols="30" rows="15"></textarea>
              </div>
             <button disabled={!formData.email || !formData.message || !formData.name || !formData.message} className={styles.sendButton} onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
    {diplayMessage && <div>Message Send Successfully!!!</div>}
    </div>
  )
}

export default Contact