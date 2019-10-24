import * as React from 'react';

import styles from '../Form.module.css';

interface ITargetSumProps {
	value: string | number,
	buttonValue: string,
	clicked: any,
	changed: any,
	confirmed: boolean,
	reset: any,
	corrected: any,
	touched: boolean
}

export const TargetSum: React.FC<ITargetSumProps> = (props: ITargetSumProps) => {
	let Input: any;
	 	if (props.confirmed)  {
		 Input = (<span className={styles.InputConfirmed}>Current target sum is: { props.value } USD</span>);
		 } else {
			Input = (
				<input 
					className={styles.Input} 
					type="text" 
					value={props.value}
					onChange={props.changed}
					placeholder="What is your target?"
				/>
			);
		}

	let Buttons: any;
	if (props.confirmed) {
		Buttons = (
			<div className={styles.Buttons}>
				<button 
						className={styles.Reset}
						onClick={props.reset}>Reset
					</button>
				<button 
						className={styles.Correct}
						onClick={props.corrected}>{props.buttonValue}
					</button>
			</div>
		);
		} else if (props.touched){
			Buttons = (
				<button 
					className={styles.Confirm}
					onClick={props.clicked}>{props.buttonValue}
				</button>
			);
		} else {
			Buttons = (
				<button 
					className={styles.Disabled}
					onClick={props.clicked}>{props.buttonValue}
				</button>
			);
		}
	// let ButtonStyle = props.confirmed ? "styles.Correct" : "styles.Confirm";

	return (
		<div className={styles.Form}>
			<div className={styles.Header}>
				<h3 className={styles.Title}>Target Sum</h3>
				<span>{ props.value > 0 && props.confirmed ? null : 'nothing is targeted yet' }</span>
			</div>
			{Input}
			{Buttons}
			{/* <button 
				className={styles.Confirm}
				onClick={props.clicked}>{props.buttonValue}</button> */}
		</div>
	);
}