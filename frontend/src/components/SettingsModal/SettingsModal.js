import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button/Button';
import styles from './css/SettingsModal.module.scss';

export default function SettingsModal({ settings, settingsHandler }) {
	const history = useHistory();
	
	const changeSettings = (e) => {
		settingsHandler({...settings, [e.target.name]: !e.target.checked});
	}

	const { register, handleSubmit } = useForm({
		mode: 'onSubmit',
	});

	const saveSettings = (settings) => {
		localStorage.setItem('userSettings', JSON.stringify(settings));
		history.push('/dashboard');
	};

	return (
		<div className={styles.overlay}>
			<div className={styles.window}>
				<form onSubmit={handleSubmit(saveSettings)}>
					<h2 className={styles.title}>Settings</h2>
					<div className={styles.inner}>
						<div className={styles.row}>
							<label htmlFor="name" className={styles.label}>
								Row status glow
							</label>
							<input
								type="checkbox"
								id="statusGlow"
								name="statusGlow"
								className={styles.checkbox}
								checked={settings.statusGlow}
								onClick={changeSettings}
								{...register('statusGlow')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="name" className={styles.label}>
								Background transparency
							</label>
							<input
								type="checkbox"
								id="transparency-checkbox"
								name="transparency"
								className={styles.checkbox}
								checked={settings.transparency}
								onClick={changeSettings}
								{...register('transparency')}
							/>
						</div>
					</div>
					<Button variant={'secondary'} isAlt>
						Save
					</Button>
				</form>
			</div>
		</div>
	);
}
