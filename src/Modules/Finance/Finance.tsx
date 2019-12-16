import React from 'react';
import {Header} from './Header/Header';

import styles from './Finance.module.css';

export const Finance = () => (
    <div className={styles.Finance}>
        <h1>Finance module here</h1>
        <Header />
    </div>
);
