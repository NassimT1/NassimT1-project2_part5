// src/components/Header3.js
import React from 'react';
import HeaderCSS from './Header.module.css';
import logo from '../assets/Logo.png';

const Header = ({ language, onLanguageChange }) => {
    return (
        <header role="banner">
            <div className={HeaderCSS['logo']}>
                <a href="/" aria-label="CineHub Home">
                    <img src={logo} alt="CineHub Logo" />
                </a>
            </div>
            <nav className={HeaderCSS['main-nav']} role="navigation" aria-label="Main navigation">
                <a href="/" className={HeaderCSS['nav-link']}>
                    {language === 'en' ? 'Home' : 'Accueil'}
                </a>
                <a href="/plans" className={HeaderCSS['nav-link']}>
                    {language === 'en' ? 'View Plans' : 'Voir les plans'}
                </a>
                <a href="/movies" className={HeaderCSS['nav-link']}>
                    {language === 'en' ? 'Movies & TV Shows' : 'Films et séries TV'}
                </a>
            </nav>
            <nav className={HeaderCSS['auth-nav']} role="navigation" aria-label="User authentication">
                <a href="/login" className={HeaderCSS['nav-link']}>
                    {language === 'en' ? 'Log In' : 'Se connecter'}
                </a>
                <a href="/signup1" className={HeaderCSS['nav-link']}>
                    {language === 'en' ? 'Sign Up' : "S'inscrire"}
                </a>
            </nav>
        </header>
    );
};

export default Header;
