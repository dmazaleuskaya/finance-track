import * as React from 'react';
import {Header} from './Header/Header';

import styles from './FinanceLayout.module.css';

export class FinanceLayout extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className={styles.FinanceLayout}>
                <h1>Finance module here</h1>
                <Header />
            </div>
        );
    }
}
