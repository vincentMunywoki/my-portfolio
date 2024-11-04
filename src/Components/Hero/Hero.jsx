import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I am Vincent Munywoki,</span> frontend developer based in Kenya</h1>
        <p>I am a frontend developer intermediate from Nairobi, Kenya with 2 years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero