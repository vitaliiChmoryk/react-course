import React from 'react';

import styles from './footer.module.scss';
import { Logo } from '../logo';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Logo />
        </div>
    );
};
