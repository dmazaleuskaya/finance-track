import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './variables.css';
import styles from './common.module.css';

ReactDOM.render(
    <div className={styles.container}>
        <App />
    </div>,
    document.getElementById('root')
);
