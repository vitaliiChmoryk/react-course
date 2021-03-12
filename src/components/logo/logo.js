import React from 'react';

import styles from './logo.module.scss';

export const Logo = () => {
    return (
        <p className={styles.logo}>
            <span className={styles.bold}>netflix</span>
            <span>roulette</span>
        </p>
    );
};
