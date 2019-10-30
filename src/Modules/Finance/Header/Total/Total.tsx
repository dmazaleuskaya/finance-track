import * as React from 'react';

import styles from '../Form.module.css';

interface ITotalProps {
	value: number
}

export const Total: React.FC<ITotalProps> = React.memo( props => {
	return (
		<div className={styles.form}>
			<h3 className={styles.title}>Total</h3>
			<span className={styles.input_confirmed}>{props.value} USD</span>
		</div>
	);
} );