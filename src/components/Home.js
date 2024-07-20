// src/components/Home.js
import React, { useState } from 'react';
import Header from './Header3';
import HomeStyle from './Home.module.css';

const Home = () => {
    document.body.style.overflow='hidden'

    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    document.documentElement.lang = language; // Set the page's language

    return (
        <div>
            <Header language={language} />
            <div className={HomeStyle['lang-switch']} role="navigation" aria-label="Language switcher">
                <button className={HomeStyle['lang-btn']} onClick={() => handleLanguageChange('en')} aria-label="Switch to English">EN</button>
                <button className={HomeStyle['lang-btn']} onClick={() => handleLanguageChange('fr')} aria-label="Switch to French">FR</button>
            </div>
            <main className={HomeStyle['main-image']} role="main">
                <div className={HomeStyle['title-container']}>
                    {language === 'en' ? (
                        <>
                            <h1 id={HomeStyle['homeH1']}>Welcome to CineHub</h1>
                            <h3>Your Entertainment Hub for Unlimited Movies and TV Shows</h3>
                        </>
                    ) : (
                        <>
                            <h1 id={HomeStyle['homeH1']}>Bienvenue sur CineHub</h1>
                            <h3>Votre hub de divertissement pour des films et séries TV illimités</h3>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Home;
