import React, { useEffect, useState } from 'react'
import'./Navbar.css'

function Navbar() {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky ? 'dark-nav' :""}`}>
      
      <h2 className='logo'>LOGO</h2>

      <ul className='menu'>
        <li>Home</li>
        <li>Offers</li>
        <li>About us</li>
        <li><button className='btn'>Content us</button></li>
      </ul>

    </nav>
  )
}

export default Navbar
