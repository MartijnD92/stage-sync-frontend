import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/AddButton.module.scss';

export default function AddButton() {
	return (
		<div className={styles.wrapper}>
			<button type="button" className={styles.btn}></button>
			<ul className={styles.dropdown}>
				<li className={styles.item}>
					<Link className={styles.link}>Artist</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link}>Venue</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link}>Show</Link>
				</li>
			</ul>
		</div>
	);
}
