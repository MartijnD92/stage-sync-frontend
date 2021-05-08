import styles from './css/AddButton.module.scss';

import React from 'react';

export default function AddButton() {
	return (
		<div className={styles.wrapper}>
			<button type="button" className={styles.btn}></button>
		</div>
	);
}
