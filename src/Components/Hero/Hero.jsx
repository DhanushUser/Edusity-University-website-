import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container ' id='home'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, consectetur sed quis repellendus ut sint consequatur dignissimos? Quas doloribus quam dolorem amet atque. Soluta</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero