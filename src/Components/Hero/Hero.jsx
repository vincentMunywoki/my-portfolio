import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'
import vincent_resume from '../../assets/Vincent_resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I am Vincent Munywoki,</span> frontend developer based in Kenya</h1>
        <p>I am a frontend developer intermediate from Nairobi, Kenya with 2 years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' offset={50} href="#contact" >Connect with Me </a></div>
            <div className="hero-resume"><a href={vincent_resume} download>My Resume</a> </div>
        </div>
    </div>
  )
}

export default Hero