import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import Button from 'components/Button/Button';
import styles from './css/SettingsModal.module.scss';

export default function AddArtistModal({ modalHandler }) {
	const { register, handleSubmit } = useForm({
		mode: 'onSubmit',
	});

	const saveArtist = () => {
		modalHandler(false);
	};

	return (
		<div className={styles.overlay}>
			<div className={styles.window}>
				<form onSubmit={handleSubmit(saveArtist)}>
					<h2 className={styles.title}>Add artist</h2>
					<div className={styles.row}>
						<label htmlFor="name" className={styles.label}>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className={styles.input}
							{...register('name')}
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="origin" className={styles.label}>
							Origin
						</label>
						<input
							type="text"
							id="origin"
							name="origin"
							className={styles.input}
							{...register('origin')}
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="genre" className={styles.label}>
							Genre
						</label>
						<CreatableSelect
							isMulti
							id="genre"
							name="genre"
							className={styles.input}
							{...register('genre')}
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
