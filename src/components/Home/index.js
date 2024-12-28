import React from 'react'

import "./index.css"

import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className='home-main-container'>
        <nav className='anchor-styling'>
            <a href="https://www.apple.com/shop/buy-watch/apple-watch" >
            <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1734954726/header_images_apple_watches_swxgrm.jpg" alt="Apple Watch"  width="80" height="18"  />
            </a> 
        </nav>
        <div className='main-outer-container'>
            <div>
                <p className='paragraph-content'>Apple Watch Studio</p>
                <h1 className='heading-styling'>
                    Choose a case.<br/>
                    Pick a band.<br/> 
                    Create your own style.
                </h1>
                <Link to="/case" className='link-styling'>
                <button className='get-started-button-styling'>Get Started</button>
                </Link>
            </div>
        </div>
        <img src="https://res.cloudinary.com/dvptfc0ji/image/upload/v1734963198/Apple-Watch-Series-10-watch-face-Flux-240909_inline.jpg.large-removebg-preview_okrfbw.png" alt="watch face" className='watch-styling'/>
    </div>
  )
}

export default Home