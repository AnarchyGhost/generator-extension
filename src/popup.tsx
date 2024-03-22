import React from 'react';

import PopupForm from './components/PopupForm';
import styles from './styles.module.scss';

import 'antd/dist/antd';

function IndexPopup() {
    return (
        <div className={styles.root}>
            <PopupForm />
        </div>
    );
}

export default IndexPopup;
