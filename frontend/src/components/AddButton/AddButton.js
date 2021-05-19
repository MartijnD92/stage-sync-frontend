// import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './css/AddButton.module.scss';

export default function AddButton() {
	return (
		<div className={styles.wrapper}>
			<button type="button" className={styles.btn}></button>
			<ul className={styles.dropdown}>
				<li className={styles.item}>
					<HashLink to="/dashboard#artist" className={styles.link}>Artist</HashLink>
				</li>
				<li className={styles.item}>
					<HashLink to="/dashboard#venue" className={styles.link}>Venue</HashLink>
				</li>
				<li className={styles.item}>
					<HashLink to="/dashboard#gig" className={styles.link}>Gig</HashLink>
				</li>
			</ul>
		</div>
	);
}
