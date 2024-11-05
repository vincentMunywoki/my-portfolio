import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo }alt="" />
                <p>I am a tech enthusiast with a strong belief in the transformative power of technology to shape the future. </p>
            </div>
        </div>
    </div>
  )
}

export default Footer