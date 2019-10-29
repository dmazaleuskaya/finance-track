import * as React from 'react';

import styles from '../Form.module.css';

interface ITransactionProps {
	value: string,
	clicked: (event: React.MouseEvent<HTMLButtonElement>) => void,
	transactor: string,
	amountChanged: (event: React.ChangeEvent<HTMLInputElement>) => void,
	nameChanged: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Transaction: React.FC<ITransactionProps> = props => {
	return (
		<div className={styles.form}>
			<h3 className={styles.title}>Transaction</h3>
			<div className={styles.input_field}>
				<input
					className={styles.input}
					type="text"
					value={props.transactor}
					placeholder="Transactor's name"
					onChange={props.nameChanged}
				/>
				<input
					className={styles.input}
					type="text"
					value={props.value}
					placeholder="Please, enter transaction's amount"
					onChange={props.amountChanged}
				/>
			</div>
			<button
				className={styles.confirm}
				onClick={props.clicked}>Confirm
			</button>
		</div>
	);
}