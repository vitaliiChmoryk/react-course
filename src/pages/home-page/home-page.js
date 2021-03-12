import React from 'react';
import { MoviesList } from '../../components';
import styles from './home-page.module.scss';

const HomePage = () => {
    return (
        <>
            <main className={styles.mainContainer}>
                <div className={styles.pageWrapper}>
                    <div className={styles.filterWrapper}>
                        <div>
                            <button className={`${styles.filterItem} ${styles.filterItemActive}`}>All</button>
                            <button className={styles.filterItem}>Documentary</button>
                            <button className={styles.filterItem}>Comedy</button>
                            <button className={styles.filterItem}>Horror</button>
                            <button className={styles.filterItem}>Crime</button>
                        </div>
                        <div>
                            <span className={styles.sort}>Sort by</span>
                            <select className={styles.sortSelect}>
                                <option value="release date">release date</option>
                                <option value="rate">rate</option>
                            </select>
                        </div>
                    </div>
                    <p className={styles.filterResult}>
                        <span className={styles.bold}>39</span> Movies Found
                    </p>
                    <div className={styles.moviesList}>
                        <MoviesList />
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
