import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on new frontend role or project, so feel free to send me a message about anything that you want me to work on.</p>
                <div className="contact-details">
                    <div className="contact-detail"> 
                        <img src={mail_icon} alt="" /> 
                        <p>vincentmunywoki12@gmail.com</p>
                    </div>
                    <div className="contact-detail"> 
                        <img src={call_icon} alt="" /> 
                        <p>+ 254702463477</p>
                    </div>
                    <div className="contact-detail"> 
                        <img src={location_icon} alt="" /> 
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact