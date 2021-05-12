import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button/Button';
import styles from './css/SettingsModal.module.scss';

export default function SettingsModal({ settings, settingsHandler }) {
	const history = useHistory();

	const changeSettings = (e) => {
		settingsHandler({ ...settings, [e.target.name]: e.target.checked });
	};

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
					<div className={styles.row}>
						<label htmlFor="name" className={styles.label}>
							Show ticket stats
						</label>
						<input
							type="checkbox"
							id="ticketStats"
							name="ticketStats"
							className={styles.checkbox}
							checked={settings.ticketStats}
							onClick={changeSettings}
							{...register('ticketStats')}
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="name" className={styles.label}>
							Show gig type
						</label>
						<input
							type="checkbox"
							id="gigType"
							name="gigType"
							className={styles.checkbox}
							checked={settings.gigType}
							onClick={changeSettings}
							{...register('gigType')}
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="name" className={styles.label}>
							Show venue room
						</label>
						<input
							type="checkbox"
							id="room"
							name="room"
							className={styles.checkbox}
							checked={settings.room}
							onClick={changeSettings}
							{...register('room')}
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="name" className={styles.label}>
							Toggle background transparency
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
					<div className={styles.row}>
						<Button variant={'secondary'} isAlt>
							Save
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
