import * as React from 'react';

import styles from '../Form.module.css';

interface ITransactionProps {
	value: string
}

export const Transaction: React.FC<ITransactionProps> = (props: ITransactionProps) => {
	return (
		<div className={styles.Transaction}>
			<h3 className={styles.Title}>Transaction</h3>
			<input className={styles.Input} type="text" value={props.value} />
		</div>
	);
}