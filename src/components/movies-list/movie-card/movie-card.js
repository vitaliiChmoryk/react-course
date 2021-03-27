import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './movie-card.module.scss';
import { CreateEditModal, DeleteModal, Modal } from '../../modals';

const MovieCardComponent = (props) => {
    const [isMenuShowed, setIsMenuShowed] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

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
                        <button
                            className={styles.dropdownButton}
                            onClick={() => {
                                setIsModalVisible(true);
                                setIsMenuShowed(false);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className={styles.dropdownButton}
                            onClick={() => {
                                setIsDeleteModalVisible(true);
                                setIsMenuShowed(false);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                )}

                {isModalVisible && (
                    <Modal>
                        <CreateEditModal setIsModalVisible={setIsModalVisible} isEdit={true} />
                    </Modal>
                )}

                {isDeleteModalVisible && (
                    <Modal>
                        <DeleteModal setIsModalVisible={setIsDeleteModalVisible} />
                    </Modal>
                )}
            </div>
        </>
    );
};

MovieCardComponent.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
};

export default MovieCardComponent;
