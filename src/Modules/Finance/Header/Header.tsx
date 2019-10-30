import * as React from 'react';
import { TargetSum } from './TargetSum';
import { Total } from './Total';
import { Transaction } from './Transaction';

import styles from './Header.module.css';

type THeaderProps = {

}

type THeaderState = {
	targetSumValue: string,
	targetSumConfirmed: boolean,
	totalSum: number,
	currentTransactionValue: string,
	inputChanged: boolean,
	transactionConfirmed: boolean,
	transactor: string
}

export class Header extends React.Component<THeaderProps, THeaderState> {

	state = {
		targetSumValue: '',
		targetSumConfirmed: false,
		totalSum: 0,
		currentTransactionValue: '0',
		inputChanged: false,
		transactionConfirmed: false,
		transactor: ''
	}

	targetSumConfirmedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ targetSumConfirmed: true });
	}

	targetSumInputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ targetSumValue: event.target.value, inputChanged: true });
	}

	targetSumResetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ targetSumValue: '', targetSumConfirmed: false });
	}

	targetSumCorrectedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ targetSumConfirmed: false });
	}

	transactionConfirmedHandler =(event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({
			transactionConfirmed: true,
			totalSum: this.state.totalSum + +this.state.currentTransactionValue
		});
	}

	transactionAmountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ currentTransactionValue: event.target.value });
	}

	transactorNameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ transactor: event.target.value });
	}

	render() {
		return (
			<div className={styles.header}>
				<div className={styles.target_sum}>
					<TargetSum 
						value={this.state.targetSumValue} 
						buttonValue={ this.state.targetSumConfirmed ? 'Correct' : 'Confirm'}
						clicked={this.targetSumConfirmedHandler}
						changed={this.targetSumInputChangedHandler}
						confirmed={this.state.targetSumConfirmed}
						reset={this.targetSumResetHandler}
						corrected={this.targetSumCorrectedHandler}
						touched={this.state.inputChanged} />
				</div>
				<div className={styles.total}>
					<Total value={this.state.totalSum}/>
				</div>
				<div className={styles.transaction}>
					<Transaction 
						value={this.state.currentTransactionValue}
						clicked={this.transactionConfirmedHandler}
						transactor={this.state.transactor}
						amountChanged={this.transactionAmountChangedHandler}
						nameChanged={this.transactorNameChangedHandler} />
				</div>
			</div>
		);
	};
};