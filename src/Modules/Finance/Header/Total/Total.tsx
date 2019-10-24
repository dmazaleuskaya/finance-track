import * as React from 'react';

import styles from '../Form.module.css';

interface ITotalProps {
	value: number
}

export const Total: React.FC<ITotalProps> = (props: ITotalProps) => {
	return (
		<div className={styles.Form}>
			<h3 className={styles.Title}>Total</h3>
			<span className={styles.InputConfirmed}>{props.value} USD</span>
		</div>
	);
}