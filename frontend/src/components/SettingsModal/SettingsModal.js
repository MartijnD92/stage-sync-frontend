import { useState } from 'react';
import styles from './css/SettingsModal.module.scss';

export default function SettingsModal() {
	return (
		<div className={styles.overlay}>
			<div className={styles.window}></div>
		</div>
	);
}
