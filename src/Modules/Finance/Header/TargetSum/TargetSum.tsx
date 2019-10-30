import * as React from 'react';

import styles from '../Form.module.css';

interface ITargetSumProps {
	value: string | number,
	buttonValue: string,
	clicked: (event: React.MouseEvent<HTMLButtonElement>) => void,
	changed: (event: React.ChangeEvent<HTMLInputElement>) => void,
	confirmed: boolean,
	reset: (event: React.MouseEvent<HTMLButtonElement>) => void,
	corrected: (event: React.MouseEvent<HTMLButtonElement>) => void,
	touched: boolean
}

export const TargetSum: React.FC<ITargetSumProps> = React.memo( props => {
	let Input: React.ReactElement;
	 	if (props.confirmed)  {
		 Input = (<span className={styles.input_confirmed}>Current target sum is: { props.value } USD</span>);
		} else {
			Input = (
				<input
					className={styles.input}
					type="text"
					value={props.value}
					onChange={props.changed}
					placeholder="What is your target?"
				/>
			);
		}

	let Buttons: React.ReactElement;
	if (props.confirmed) {
		Buttons = (
			<div className={styles.buttons}>
				<button
						className={styles.reset}
						onClick={props.reset}>Reset
					</button>
				<button
						className={styles.correct}
						onClick={props.corrected}>{props.buttonValue}
					</button>
			</div>
		);
		} else if (props.touched){
			Buttons = (
				<button
					className={styles.confirm}
					onClick={props.clicked}>{props.buttonValue}
				</button>
			);
		} else {
			Buttons = (
				<button
					className={styles.disabled}
					onClick={props.clicked}>{props.buttonValue}
				</button>
			);
		}

	return (
		<div className={styles.form}>
			<div className={styles.header}>
				<h3 className={styles.title}>Target Sum</h3>
				<span>{ props.value > 0 && props.confirmed ? null : 'nothing is targeted yet' }</span>
			</div>
			{Input}
			{Buttons}
		</div>
	);
} );