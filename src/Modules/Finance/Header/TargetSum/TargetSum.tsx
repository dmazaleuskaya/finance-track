import * as React from 'react';

import styles from '../Form.module.css';

interface ITargetSumProps {
	value: string | number | any,
	buttonValue: string,
	clicked: any,
	changed: any,
	confirmed: boolean
}

export const TargetSum: React.FC<ITargetSumProps> = (props: ITargetSumProps) => {
	return (
		<div className={styles.Form}>
			<div className={styles.Header}>
				<h3 className={styles.Title}>Target Sum</h3>
				<span>{ props.value > 0 && props.confirmed ? null : 'nothing is targeted yet' }</span>
			</div>
			
			<input 
				className={styles.Input} 
				type="text" 
				value={props.value}
				onChange={props.changed} />
			<button 
				className={ styles.Button }
				onClick={props.clicked}>{props.buttonValue}</button>
		</div>
	);
}