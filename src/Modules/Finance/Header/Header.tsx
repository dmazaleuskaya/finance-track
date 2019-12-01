import React from 'react';
import {TargetSum} from './TargetSum/TargetSum';
import {Total} from './Total/Total';
import {Transaction} from './Transaction/Transaction';
import styles from './Header.module.css';

type IHeaderProps = {};

type IHeaderState = {
    targetSumValue: string | number;
    targetSumConfirmed: boolean;
    totalSum: string;
    currentTransactionValue: string;
};

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    state: IHeaderState = {
        targetSumValue: '',
        targetSumConfirmed: false,
        totalSum: '0',
        currentTransactionValue: '0'
    };

    targetSumConfirmedHandler = () => {
        this.setState({targetSumConfirmed: true});
    };

    targetSumInputChangedHandler = (e: React.FormEvent<EventTarget>): void => {
        const target = e.target as HTMLInputElement;
        this.setState({targetSumValue: target.value});
    };

    render() {
        const {
            targetSumValue,
            targetSumConfirmed,
            currentTransactionValue,
            totalSum
        } = this.state;
        return (
            <div className={styles.Header}>
                <TargetSum
                    value={targetSumValue}
                    buttonValue={targetSumConfirmed ? 'Correct' : 'Confirm'}
                    clicked={this.targetSumConfirmedHandler}
                    changed={this.targetSumInputChangedHandler}
                    confirmed={targetSumConfirmed}
                />
                <Total value={totalSum} />
                <Transaction value={currentTransactionValue} />
            </div>
        );
    }
}
