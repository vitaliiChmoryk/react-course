import React from 'react';
import { func } from 'prop-types';
import styles from '../create-edit-movie/create-edit-movie.module.scss';

const DeleteModal = (props) => {
    const { setIsModalVisible } = props;

    return (
        <div className={styles.modal}>
            <h3 className={styles.title}>Delete Movie</h3>
            <p>Are you sure you want to delete this movie?</p>
            <div className={styles.modalFooter}>
                <button className={styles.redButton}>Confirm</button>
            </div>

            <button onClick={() => setIsModalVisible(false)} className={styles.dropdownButtonClose}>
                X
            </button>
        </div>
    );
};

DeleteModal.propTypes = {
    setIsModalVisible: func.isRequired,
};

export default DeleteModal;
