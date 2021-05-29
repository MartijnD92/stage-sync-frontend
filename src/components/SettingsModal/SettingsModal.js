import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from 'components/Button/Button';
import styles from './css/SettingsModal.module.scss';

export default function SettingsModal({
	settings,
	settingsHandler,
	modalHandler,
}) {
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
		modalHandler(false);
	};

	return (
		<>
			<div
				className={styles.overlay}
				onClick={(e) => {
					e.target.className.includes('overlay') && modalHandler(false);
					history.push('/dashboard');
				}}
			></div>
			<div className={styles.window}>
				<form onSubmit={handleSubmit(saveSettings)} className={styles.form}>
					<h2 className={styles.title}>Settings</h2>
					<div className={styles.row}>
						<label htmlFor="ticketStats" className={styles.label}>
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
						<label htmlFor="invoiceStatus" className={styles.label}>
							Show invoice status
						</label>
						<input
							type="checkbox"
							id="invoiceStatus"
							name="invoiceStatus"
							className={styles.checkbox}
							checked={settings.invoiceStatus}
							onClick={changeSettings}
							{...register('invoiceStatus')}
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="gigType" className={styles.label}>
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
						<label htmlFor="room" className={styles.label}>
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
						<label htmlFor="transparency" className={styles.label}>
							Toggle background transparency of results list
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
						<Button variant={'primary'} isAlt>
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
