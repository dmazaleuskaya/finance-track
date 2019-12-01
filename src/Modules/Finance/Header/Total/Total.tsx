import * as React from 'react';

// eslint-disable-next-line css-modules/no-unused-class
import styles from '../Form.module.css';

interface ITotalProps {
    value: string;
}

export const Total: React.FC<ITotalProps> = (props: ITotalProps) => {
    const {value} = props;
    return (
        <div className={styles.Form}>
            <h3 className={styles.Title}>Total</h3>
            <input className={styles.Input} type="text" value={value} />
        </div>
    );
};
