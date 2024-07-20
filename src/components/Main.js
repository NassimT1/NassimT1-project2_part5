import React, { useState } from 'react';
import Header2 from './Header2';
import MainStyle from './Main.module.css';

import theLionKing from '../assets/movies-shows/the lion king.jpg';
import avatar from '../assets/movies-shows/avatar.webp';
import titanic from '../assets/movies-shows/titanic.jpg';
import breakingBad from '../assets/movies-shows/breaking bad.jpg';
import avengersEndgame from '../assets/movies-shows/avengers endgame.png';
import extraction2 from '../assets/movies-shows/extraction 2.jpg';
import darkKnightRises from '../assets/movies-shows/the dark knight rises.webp';
import fastX from '../assets/movies-shows/fast x.jpg';
import avatar2 from '../assets/movies-shows/avatar 2.png';
import kingdomApes from '../assets/movies-shows/kingdom of the planet of the apes.jpg';
import readyPlayerOne from '../assets/movies-shows/ready player one.jpg';
import sausageParty from '../assets/movies-shows/sausage party.jpg';
import jumpStreet22 from '../assets/movies-shows/22 jump street.jpg';
import americanPsycho from '../assets/movies-shows/american psycho.jpg';
import parasite from '../assets/movies-shows/parasite.jpg';
import squidGame from '../assets/movies-shows/squid game.webp';
import betterCallSaul from '../assets/movies-shows/better call saul.jpg';

const contentData = [
    { id: 1, title: "The Lion King", src: theLionKing, type: "movie", genre: "animation" },
    { id: 2, title: "Avatar", src: avatar, type: "movie", genre: "sci-fi" },
    { id: 3, title: "Titanic", src: titanic, type: "movie", genre: "drama" },
    { id: 4, title: "Breaking Bad", src: breakingBad, type: "tv-show", genre: "thriller" },
    { id: 5, title: "Avengers Endgame", src: avengersEndgame, type: "movie", genre: "action" },
    { id: 6, title: "Extraction 2", src: extraction2, type: "movie", genre: "action" },
    { id: 7, title: "The Dark Knight Rises", src: darkKnightRises, type: "movie", genre: "action" },
    { id: 8, title: "Fast X", src: fastX, type: "movie", genre: "action" },
    { id: 9, title: "Avatar 2", src: avatar2, type: "movie", genre: "sci-fi" },
    { id: 10, title: "Kingdom of the Planet of the Apes", src: kingdomApes, type: "movie", genre: "sci-fi" },
    { id: 11, title: "Ready Player One", src: readyPlayerOne, type: "movie", genre: "sci-fi" },
    { id: 12, title: "Sausage Party", src: sausageParty, type: "movie", genre: "comedy" },
    { id: 13, title: "22 Jump Street", src: jumpStreet22, type: "movie", genre: "comedy" },
    { id: 14, title: "American Psycho", src: americanPsycho, type: "movie", genre: "thriller" },
    { id: 15, title: "Parasite", src: parasite, type: "movie", genre: "thriller" },
    { id: 16, title: "Squid Game", src: squidGame, type: "tv-show", genre: "thriller" },
    { id: 17, title: "Better Call Saul", src: betterCallSaul, type: "tv-show", genre: "thriller" }
];

const Main = () => {
    document.body.style.overflow = 'auto';
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [, setReview] = useState('');
    const [, setRating] = useState(0);
    const [watchlist, setWatchlist] = useState([]);
    const [filters, setFilters] = useState({ type: "all", genre: "all" });
    const [isFiltered, setIsFiltered] = useState(false);

    const openModal = (movie) => {
        setSelectedMovie(movie);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setReview('');
        setRating(0);
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
        if (reviewText !== null) {
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

            alert(`Review submitted for ${movieTitle}:
                Rating: ${ratingValue} stars
                Review: ${reviewText}`);
        }
    };

    const toggleWatchlist = (movie) => {
        if (watchlist.some((item) => item.id === movie.id)) {
            setWatchlist(watchlist.filter((item) => item.id !== movie.id));
        } else {
            setWatchlist([...watchlist, movie]);
        }
    };

    const isInWatchlist = (movie) => {
        return watchlist.some((item) => item.id === movie.id);
    };

    const playVideo = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    };

    const applyFilters = (e) => {
        e.preventDefault();
        setIsFiltered(filters.type !== "all" || filters.genre !== "all");
    };

    const getFilteredContent = () => {
        return contentData.filter(item => 
            (filters.type === "all" || item.type === filters.type) &&
            (filters.genre === "all" || item.genre === filters.genre)
        );
    };

    const MovieCard = ({ src, title }) => (
        <div className={MainStyle['movie-card']} onClick={() => openModal({ title, src })}>
            <img src={src} alt={title} />
            <div className={MainStyle['movie-title']}>{title}</div>
        </div>
    );

    return (
        <div className={MainStyle['main-page']}>
            <Header2 />

            <div className={MainStyle['spotlight-banner']}>
                <div className={MainStyle['play-button-container']}>
                    <button className={MainStyle['play-button']} onClick={playVideo}>Play</button>
                </div>
            </div>

            <div className={MainStyle['filter-section']}>
                <h2>Filter By:</h2>
                <form onSubmit={applyFilters}>
                    <div className={MainStyle['form-group']}>
                        <label htmlFor="type">Content Type</label>
                        <select id="type" name="type" className={MainStyle['form-control']} onChange={handleFilterChange} value={filters.type}>
                            <option value="all">All</option>
                            <option value="movie">Movies</option>
                            <option value="tv-show">TV Shows</option>
                        </select>
                    </div>
                    <div className={MainStyle['form-group']}>
                        <label htmlFor="genre">Genre</label>
                        <select id="genre" name="genre" className={MainStyle['form-control']} onChange={handleFilterChange} value={filters.genre}>
                            <option value="all">All</option>
                            <option value="action">Action</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="comedy">Comedy</option>
                            <option value="thriller">Thriller</option>
                        </select>
                    </div>
                    
                    <button type="submit" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`}>Apply Filters</button>
                </form>
            </div>

            {isFiltered ? (
                <div className={MainStyle['movie-section']}>
                    <h2>Filtered Content</h2>
                    <div className={MainStyle['movie-row']}>
                        {getFilteredContent().map(item => (
                            <MovieCard key={item.id} src={item.src} title={item.title} />
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className={MainStyle['movie-section']}>
                        <h2>Most Popular</h2>
                        <div className={MainStyle['movie-row']}>
                            <MovieCard src={theLionKing} title="The Lion King" />
                            <MovieCard src={avatar} title="Avatar" />
                            <MovieCard src={titanic} title="Titanic" />
                        </div>
                    </div>

                    <div className={MainStyle['movie-section']}>
                        <h2>Highest Rated</h2>
                        <div className={MainStyle['movie-row']}>
                            <MovieCard src={breakingBad} title="Breaking Bad" />
                        </div>
                    </div>

                    <div className={MainStyle['movie-section']}>
                        <h2>Action</h2>
                        <div className={MainStyle['movie-row']}>
                            <MovieCard src={avengersEndgame} title="Avengers Endgame" />
                            <MovieCard src={extraction2} title="Extraction 2" />
                            <MovieCard src={darkKnightRises} title="The Dark Knight Rises" />
                            <MovieCard src={fastX} title="Fast X" />
                            <MovieCard src={avatar2} title="Avatar 2" />
                        </div>
                    </div>

                    <div className={MainStyle['movie-section']}>
                        <h2>Sci-Fi</h2>
                        <div className={MainStyle['movie-row']}>
                            <MovieCard src={kingdomApes} title="Kingdom of the Planet of the Apes" />
                            <MovieCard src={readyPlayerOne} title="Ready Player One" />
                        </div>
                    </div>

                    <div className={MainStyle['movie-section']}>
                        <h2>Comedy</h2>
                        <div className={MainStyle['movie-row']}>
                            <MovieCard src={sausageParty} title="Sausage Party" />
                            <MovieCard src={jumpStreet22} title="22 Jump Street" />
                        </div>
                    </div>

                    <div className={MainStyle['movie-section']}>
                        <h2>Thriller</h2>
                        <div className={MainStyle['movie-row']}>
                            <MovieCard src={americanPsycho} title="American Psycho" />
                            <MovieCard src={parasite} title="Parasite" />
                            <MovieCard src={squidGame} title="Squid Game" />
                            <MovieCard src={betterCallSaul} title="Better Call Saul" />
                        </div>
                    </div>
                </>
            )}

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
                                    <button onClick={(e) => { e.stopPropagation(); toggleWatchlist(selectedMovie) }} className={`${MainStyle.btn} ${MainStyle['btn-primary']}`}>{isInWatchlist(selectedMovie) ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
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

export default Main;