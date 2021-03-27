import React from 'react';
import PropTypes, { func } from 'prop-types';

import styles from './create-edit-movie.module.scss';

const CreateEditMovieModal = (props) => {
    const { setIsModalVisible, isEdit } = props;

    return (
        <div className={styles.modal}>
            <h3 className={styles.title}>{isEdit ? 'Edit movie' : 'Add movie'}</h3>

            {isEdit && (
                <div className={styles.inputWrap}>
                    <label className={styles.label} htmlFor="title">
                        Movie id
                    </label>
                    <p id="movieId"> MO32820TH </p>
                </div>
            )}
            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="title">
                    Title
                </label>
                <input id="title" className={styles.input} placeholder="Title" type="text" />
            </div>
            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="releaseDate">
                    Release date
                </label>
                <input id="releaseDate" className={styles.input} placeholder="Select Date" type="date" />
            </div>
            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="releaseDate">
                    Release date
                </label>
                <input id="releaseDate" className={styles.input} placeholder="Select Date" type="date" />
            </div>
            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="movieUrl">
                    Movie url
                </label>
                <input id="movieUrl" className={styles.input} placeholder="Movie URL here" type="text" />
            </div>

            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="movieUrl">
                    Genre
                </label>
                <select defaultValue={'Select genre'} className={styles.input} id="movieUrl">
                    <option value="Comedy">Comedy</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Comedy">Comedy</option>
                </select>
            </div>

            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="Overview">
                    Overview
                </label>
                <input id="Overview" className={styles.input} placeholder="Overview here" type="text" />
            </div>
            <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor="Runtime">
                    Runtime
                </label>
                <input id="Runtime" className={styles.input} placeholder="Runtime here" type="text" />
            </div>

            <div className={styles.modalFooter}>
                <button className={styles.resetButton}>Reset</button>
                <button className={styles.redButton}>{isEdit ? 'Save' : 'Submit'}</button>
            </div>

            <button onClick={() => setIsModalVisible(false)} className={styles.dropdownButtonClose}>
                X
            </button>
        </div>
    );
};

CreateEditMovieModal.propTypes = {
    setIsModalVisible: func.isRequired,
    isEdit: PropTypes.boolean,
};

export default CreateEditMovieModal;
