import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'

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
            </div>
        </div>
    </div>
  )
}

export default Contact