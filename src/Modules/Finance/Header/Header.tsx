import * as React from 'react';
import { TargetSum } from './TargetSum';
import { Total } from './Total';
import { Transaction } from './Transaction';

import styles from './Header.module.css';

type THeaderProps = {};

export const Header: React.FC<THeaderProps> = props => {

	const [targetSumValue, setTargetSumValue] = React.useState<string>('');
	const [targetSumConfirmed, setTargetSumConfirmed] = React.useState<boolean>(false);
	const [totalSum, setTotalSum] = React.useState<number>(0);
	const [currentTransactionValue, setCurrentTransactionValue] = React.useState<number>(0);
	const [inputChanged, setInputChanged] = React.useState<boolean>(false);
	const [transactionConfirmed, setTransactionConfirmed] = React.useState<boolean>(false);
	const [transactor, setTransactor] = React.useState<string>('');

	const targetSumConfirmedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		setTargetSumConfirmed(true);
	}

	const targetSumInputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTargetSumValue(event.target.value);
		setInputChanged(true);
	}

	const targetSumResetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		setTargetSumValue('');
		setTargetSumConfirmed(false);
	}

	const targetSumCorrectedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		setTargetSumConfirmed(false);
	}

	const transactionConfirmedHandler =(event: React.MouseEvent<HTMLButtonElement>) => {
		setTransactionConfirmed(true);
		setTotalSum(totalSum + currentTransactionValue);
	}

	const transactionAmountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentTransactionValue(+event.target.value);
	}

	const transactorNameChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTransactor(event.target.value);
	}

	return (
		<div className={styles.header}>
			<div className={styles.target_sum}>
				<TargetSum
					value={targetSumValue}
					buttonValue={ targetSumConfirmed ? 'Correct' : 'Confirm'}
					clicked={targetSumConfirmedHandler}
					changed={targetSumInputChangedHandler}
					confirmed={targetSumConfirmed}
					reset={targetSumResetHandler}
					corrected={targetSumCorrectedHandler}
					touched={inputChanged} />
			</div>
			<div className={styles.total}>
				<Total value={totalSum}/>
			</div>
			<div className={styles.transaction}>
				<Transaction
					value={currentTransactionValue}
					clicked={transactionConfirmedHandler}
					transactor={transactor}
					amountChanged={transactionAmountChangedHandler}
					nameChanged={transactorNameChangedHandler} />
			</div>
		</div>
	);
};