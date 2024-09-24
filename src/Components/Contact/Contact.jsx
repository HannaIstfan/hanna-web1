import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon}/></h3>
        <p>Feel free to reach out through contact from or finde our contact 
            information below. your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service
        </p>
        <ul>
            <li><img src={mail_icon}/>Contact@hannaestifan.com</li>
            <li><img src={phone_icon}/>+7 993 755 8300</li>
            <li><img src={location_icon}/>77 Massachusettes Ave, Cambrideg<br/>MA 02139, United
            States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type='tel' name='phone' placeholder='Enter your phonr number' required />
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn1'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
