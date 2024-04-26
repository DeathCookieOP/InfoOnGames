import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'

function Navbar() {

  const path = window.location.pathname;


  return (
    <nav className={styles.nav}>

    {/* <img src={logo} alt="" className="logo"/> */}

      <ul>
        <li className={path === '/' ? styles.active : ''}><a href="/" style={{ textShadow: "rgba(9, 0, 255, 0.43) 0px 0px 38px" }}>Home</a></li>
        <li className={path === '/login' ? styles.active : ''}><a href="/login">Login</a></li>
        <li className={path === '/games' ? styles.active : ''} ><a href="/games">Games</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
