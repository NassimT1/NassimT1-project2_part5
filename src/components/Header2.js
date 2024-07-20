import React from 'react';
import logo from '../assets/Logo.png'; // Import the logo image
import Header2Style from './Header2.module.css';

const Header2 = () => {
    return (
        <header>
            <div className={Header2Style.logo}>
                <a href="/main">
                    <img src={logo} alt="CineHub Logo" />
                </a>
            </div>
            <nav className={Header2Style['main-nav']}>
                <a href="/main" className={Header2Style['nav-link']}>Home</a>
                <a href="/watchlist" className={Header2Style['nav-link']}>My Watchlist</a>
            </nav>
            <nav className={Header2Style['auth-nav']}>
                <a href="/" className={Header2Style['nav-link']}>Log Out</a>
            </nav>
        </header>
    );
};

export default Header2;
