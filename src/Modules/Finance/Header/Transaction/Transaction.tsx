import * as React from 'react';

// eslint-disable-next-line css-modules/no-unused-class
import styles from '../Form.module.css';

interface ITransactionProps {
    value: string;
}

export const Transaction: React.FC<ITransactionProps> = (
    props: ITransactionProps
) => {
    const {value} = props;
    return (
        <div className={styles.Transaction}>
            <h3 className={styles.Title}>Transaction</h3>
            <input className={styles.Input} type="text" value={value} />
        </div>
    );
};
