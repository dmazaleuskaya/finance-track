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
	totalSum: string,
	currentTransactionValue: string
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {

	state: IHeaderState = {
		targetSumValue: '',
		targetSumConfirmed: false,
		totalSum: '0',
		currentTransactionValue: '0'
	}

	targetSumConfirmedHandler = () => {
		this.setState({ targetSumConfirmed: true });
	}

	targetSumInputChangedHandler = (event: any) => {
		this.setState({ targetSumValue: event.target.value });
	}

	render() {
		return (
			<div className={styles.Header}>
				<TargetSum 
					value={this.state.targetSumValue} 
					buttonValue={ this.state.targetSumConfirmed ? 'Correct' : 'Confirm'}
					clicked={this.targetSumConfirmedHandler}
					changed={this.targetSumInputChangedHandler}
					confirmed={this.state.targetSumConfirmed} />
				<Transaction value={this.state.currentTransactionValue}/>
				<Total value={this.state.totalSum}/>
			</div>
		);
	};
};