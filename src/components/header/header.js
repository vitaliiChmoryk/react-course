import React from 'react';
import { Logo } from '../logo';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerBackground} />
                <div className={styles.headerContainer}>
                    <div className={styles.topBar}>
                        <Logo />
                        <button color="grey" className={styles.addMovieButton}>
                            +ADD MOVIE
                        </button>
                    </div>
                    <div className={styles.searchContainer}>
                        <h1 className={styles.searchHeader}>Find your Movie</h1>
                        <div className={styles.searchForm}>
                            <input
                                className={styles.searchInput}
                                placeholder="What do you want to watch?"
                                type="text"
                            />
                            <button className={styles.searchButton}>search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
