import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './movie-card.module.scss';

const MovieCardComponent = (props) => {
    const [isMenuShowed, setIsMenuShowed] = useState(false);

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={props.url} alt="" />
                </div>
                <p className={styles.movieInfo}>
                    <span className={styles.name}>{props.title}</span>
                    <span className={styles.year}>{props.releaseDate}</span>
                </p>
                <p className={styles.genre}>{props.genre}</p>

                <div className={styles.dropdownMenu} onClick={() => setIsMenuShowed(true)}>
                    <div className={styles.dots} />
                </div>

                {isMenuShowed && (
                    <div className={styles.dropdownContent}>
                        <button onClick={() => setIsMenuShowed(false)} className={styles.dropdownButtonClose}>
                            X
                        </button>
                        <button className={styles.dropdownButton}>Edit</button>
                        <button className={styles.dropdownButton}>Delete</button>
                    </div>
                )}
            </div>
        </>
    );
};

MovieCardComponent.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.date,
};

export default MovieCardComponent;
