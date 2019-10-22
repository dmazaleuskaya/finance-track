import * as React from 'react';

import styles from '../Form.module.css';

interface ITransactionProps {
	value: string,
	clicked: any,
	transactor: string,
	amountChanged: any,
	nameChanged: any
}

export const Transaction: React.FC<ITransactionProps> = (props: ITransactionProps) => {
	return (
		<div className={styles.Form}>
			<h3 className={styles.Title}>Transaction</h3>
			<div className={styles.InputField}>
				<input 
					className={styles.Input} 
					type="text" 
					value={props.transactor}
					placeholder="Transactor's name"
					onChange={props.nameChanged} 
				/>
				<input 
					className={styles.Input} 
					type="text" 
					value={props.value}
					placeholder="Please, enter transaction's amount"
					onChange={props.amountChanged} 
				/>
			</div>
			<button 
					className={styles.Confirm}
					onClick={props.clicked}>Confirm
				</button>
		</div>
	);
}