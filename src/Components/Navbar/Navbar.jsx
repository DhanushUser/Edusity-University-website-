import React, { useEffect, useState } from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky,setSticky] = useState(false);
  const [menu,setMenu] = useState("home");

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(true)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
         <li> <AnchorLink className='anchor-link'  href='#home'>Home</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={220}  href='#programs'>Program</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={150}  href='#about'>About us  </AnchorLink> </li>
            <li><AnchorLink className='anchor-link' offset={220}  href='#campus'>Campus</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={220}  href='#testimonials'>Testimonials</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={220}  href='#contact'><button className='btn'>Contact us</button></AnchorLink></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar