import React from "react";
import HeaderCSS from './Header.module.css'
import logo from '../assets/Logo.png'; // Import the logo image


const Header = () => {
    return (
        <header>
            <div className={HeaderCSS['logo']}>
                <a href="/">
                <img src={logo} alt="CineHub Logo" />
                </a>
            </div>
            <nav className={HeaderCSS['main-nav']}>
                <a href="/" className={HeaderCSS['nav-link']}>Home</a>
                <a href="/plans" className={HeaderCSS['nav-link']}>View Plans</a>
                <a href="/movies" className={HeaderCSS['nav-link']}>Movies &amp; TV Shows</a>
            </nav>
            <nav className={HeaderCSS['auth-nav']}>
                <a href="/login" className={HeaderCSS['nav-link']}>Log In</a>
                <a href="/signup1" className={HeaderCSS['nav-link']}>Sign Up</a>
            </nav>
        </header>

    )
}

export default Header

