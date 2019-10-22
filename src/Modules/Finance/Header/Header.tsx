import * as React from 'react';
import { TargetSum } from './TargetSum/TargetSum';
import { Total } from './Total/Total';
import { Transaction } from './Transaction/Transaction';

import styles from './Header.module.css';

type IHeaderProps = {

}

type IHeaderState = {
	targetSumValue: string | number | any,
	targetSumConfirmed: boolean,
	totalSum: number,
	currentTransactionValue: string,
	inputChanged: boolean,
	transactionConfirmed: boolean,
	transactor: string
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {

	state: IHeaderState = {
		targetSumValue: '',
		targetSumConfirmed: false,
		totalSum: 0,
		currentTransactionValue: '0',
		inputChanged: false,
		transactionConfirmed: false,
		transactor: ''
	}

	targetSumConfirmedHandler = () => {
		this.setState({ targetSumConfirmed: true });
	}

	targetSumInputChangedHandler = (event: any) => {
		this.setState({ targetSumValue: event.target.value, inputChanged: true });
	}

	targetSumResetHandler = () => {
		this.setState({ targetSumValue: '', targetSumConfirmed: false });
	}

	targetSumCorrectedHandler = () => {
		this.setState({ targetSumConfirmed: false });
	}

	transactionConfirmedHandler =() => {
		this.setState({ 
			transactionConfirmed: true,
			totalSum: this.state.totalSum + +this.state.currentTransactionValue
		});
	}

	transactionAmountChangedHandler = (event: any) => {
		this.setState({ currentTransactionValue: event.target.value });
	}

	transactorNameChangedHandler = (event: any) => {
		this.setState({ transactor: event.target.value });
	}

	render() {
		return (
			<div className={styles.Header}>
				<div className={styles.TargetSum}>
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
				<div className={styles.Total}>
					<Total value={this.state.totalSum}/>
				</div>
				<div className={styles.Transaction}>
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