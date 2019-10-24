import * as React from 'react';

import styles from '../Form.module.css';

interface ITotalProps {
	value: string
}

export const Total: React.FC<ITotalProps> = (props: ITotalProps) => {
	return (
		<div className={styles.Form}>
			<h3 className={styles.Title}>Total</h3>
			<input className={styles.Input} type="text" value={props.value} />
		</div>
	);
}