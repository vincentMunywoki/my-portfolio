import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img2.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1>I am Vincent Munywoki, frontend developer based in Kenya</h1>
        <p>I am a frontend developer intermediate from Nairobi, Kenya with 2 years of experience.</p>
    </div>
  )
}

export default Hero