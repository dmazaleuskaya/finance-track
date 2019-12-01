import * as React from 'react';

// TODO: to remove unused css or use it
// eslint-disable-next-line css-modules/no-unused-class
import styles from '../Form.module.css';

interface ITargetSumProps {
    value: string | number;
    buttonValue: string;
    clicked: () => void;
    changed: (e: React.FormEvent<EventTarget>) => void;
    confirmed: boolean;
}

export const TargetSum: React.FC<ITargetSumProps> = (
    props: ITargetSumProps
) => {
    const {value, confirmed, changed, clicked, buttonValue} = props;
    return (
        <div className={styles.Form}>
            <div className={styles.Header}>
                <h3 className={styles.Title}>Target Sum</h3>
                <span>
                    {value > 0 && confirmed ? null : 'nothing is targeted yet'}
                </span>
            </div>

            <input
                className={styles.Input}
                type="text"
                value={value}
                onChange={changed}
            />
            <button type="button" className={styles.Button} onClick={clicked}>
                {buttonValue}
            </button>
        </div>
    );
};
