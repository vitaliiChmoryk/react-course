import React, { useState, useEffect } from 'react';
import { Logo } from '../logo';
import { Modal } from '../modals';
import styles from './header.module.scss';
import { CreateEditModal } from '../modals';

export const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isModalVisible ? 'hidden' : 'auto';
    }, [isModalVisible]);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerBackground} />
                <div className={styles.headerContainer}>
                    <div className={styles.topBar}>
                        <Logo />
                        <button color="grey" className={styles.addMovieButton} onClick={() => setIsModalVisible(true)}>
                            +ADD MOVIE
                        </button>
                    </div>
                    <div className={styles.searchContainer}>
                        <h1 className={styles.searchHeader}>Find your Movie</h1>
                        <div className={styles.searchForm}>
                            <input
                                className={styles.searchInput}
                                onFocus={(e) => {
                                    console.log(`${e.currentTarget.tagName} in focus `);
                                }}
                                placeholder="What do you want to watch?"
                                type="text"
                            />
                            <button className={styles.searchButton}>search</button>
                        </div>
                    </div>
                </div>
                {isModalVisible && (
                    <Modal>
                        <CreateEditModal setIsModalVisible={setIsModalVisible} isEdit={false} />
                    </Modal>
                )}
            </div>
        </>
    );
};
