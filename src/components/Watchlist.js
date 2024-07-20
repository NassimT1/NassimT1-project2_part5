import React, { useState } from 'react';
import Header2 from './Header2';
import MainStyle from './Main.module.css';

import avengersEndgame from '../assets/movies-shows/avengers endgame.png';
import extraction2 from '../assets/movies-shows/extraction 2.jpg';
import darkKnightRises from '../assets/movies-shows/the dark knight rises.webp';
import fastX from '../assets/movies-shows/fast x.jpg';

const Watchlist = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Avengers Endgame', src: avengersEndgame },
        { id: 2, title: 'Extraction 2', src: extraction2 },
        { id: 3, title: 'The Dark Knight Rises', src: darkKnightRises },
        { id: 4, title: 'Fast X', src: fastX },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [, setReview] = useState('');
    const [, setRating] = useState(0); // Initialize rating state
    const [, ] = useState(false);

    const openModal = (movie) => {
        setSelectedMovie(movie);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setReview('');
        setRating(0); // Reset rating state
    };

    const startWatchParty = (movieTitle) => {
        const code = Math.random().toString(36).substr(2, 4).toUpperCase();
        const userInput = prompt(`Starting a watch party for ${movieTitle}. Your code is ${code} OR enter a code:`);
        if (userInput) {
            // Handle user input
        }
    };

    const writeReview = (movieTitle) => {
        let reviewText = prompt(`Write your review for ${movieTitle}:`);
        if (reviewText !== null) { // Prompt returns null on cancel
            let isValidRating = false;
            let ratingValue = 0;

            while (!isValidRating) {
                const ratingInput = prompt(`Rate ${movieTitle} (out of 5 stars):`);
                ratingValue = parseInt(ratingInput);
                if (!isNaN(ratingValue) && ratingValue >= 1 && ratingValue <= 5) {
                    isValidRating = true;
                } else {
                    alert('Invalid rating input. Please enter a number between 1 and 5.');
                }
            }

            // Now isValidRating is true and ratingValue is valid
            alert(`Review submitted for ${movieTitle}:
                Rating: ${ratingValue} stars
                Review: ${reviewText}`);
        }
    };

    const removeMovie = (movie) => {
        setMovies(movies.filter((item) => item.id !== movie.id));
    };

    const isInWatchlist = (movie) => {
        return movies.some((item) => item.id === movie.id);
    };

    const playVideo = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    };

    const MovieCard = ({ movie }) => (
        <div className={MainStyle['movie-card']} onClick={() => openModal(movie)}>
            <img src={movie.src} alt={movie.title} />
            <div className={MainStyle['movie-title']}>{movie.title}</div>
        </div>
    );

    return (
        <div className={MainStyle['main-page']}>
            <Header2 />

            <div className={MainStyle['movie-section']}>
                <h2>My Watchlist</h2>
                <div className={MainStyle['movie-row']}>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

            <div id="movie-details-modal" className={MainStyle.modal} style={{ display: modalVisible ? 'block' : 'none' }}>
                <div className={MainStyle['modal-content']}>
                    <span className={MainStyle.close} onClick={closeModal}>&times;</span>
                    {selectedMovie && (
                        <>
                            <div className={MainStyle['modal-poster']}>
                                <img id="modal-poster-img" src={selectedMovie.src} alt={selectedMovie.title} />
                            </div>
                            <div className={MainStyle['modal-details']}>
                                <h2 id="modal-title">{selectedMovie.title}</h2>
                                <p id="modal-description">Description of the movie or TV show...</p>
                                <p id="modal-duration">Duration: N/A</p>
                                <p id="modal-rating">Rating: N/A</p>
                                <p id="modal-reviews">Reviews: N/A</p>
                                <div className={MainStyle['modal-buttons']}>
                                    <button onClick={(e) => { e.stopPropagation(); removeMovie(selectedMovie) }} className={`${MainStyle.btn} ${MainStyle['btn-primary']}`}>{isInWatchlist(selectedMovie) ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
                                    <button id="start-watchparty" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`} onClick={() => startWatchParty(selectedMovie.title)}>Start a Watch Party</button>
                                    <button id="write-review" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`} onClick={() => writeReview(selectedMovie.title)}>Write a Review</button>
                                    <button id="play" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`} onClick={playVideo}>Play</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Watchlist;
