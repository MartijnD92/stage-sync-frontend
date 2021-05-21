import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import Button from 'components/Button/Button';
import styles from './css/AddArtistModal.module.scss';

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
				<form onSubmit={handleSubmit(saveArtist)} className={styles.form}>
					<h2 className={styles.title}>Add an artist</h2>
					<div className={styles.fields}>
						<div className={styles.left}>
							<div className={styles.row}>
								<label htmlFor="name" className={styles.label}>
									Name
								</label>
							</div>
							<div className={styles.row}>
								<input
									name="name"
									id="name"
									type="text"
									className={styles.input}
									{...register('name')}
								/>
							</div>
							<div className={styles.row}>
								<label htmlFor="origin" className={styles.label}>
									Origin
								</label>
							</div>
							<div className={styles.row}>
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
							</div>
							<div className={styles.row}>
								<CreatableSelect
									isMulti
									id="genre"
									name="genre"
									className={styles.select}
									{...register('genre')}
								/>
							</div>
							<div className={styles.row}>
								<label htmlFor="name" className={styles.label}>
									Bio
								</label>
							</div>
							<div className={styles.row}>
								<textarea
									id="bio"
									name="bio"
									cols="30"
									rows="5"
									{...register('bio')}
									className={styles.textarea}
								/>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.row}>
								<label htmlFor="name" className={styles.label}>
									Riders (max. 2)
								</label>
							</div>
							<div className={styles.row}>
								<input
									type="file"
									id="riders"
									name="riders"
									{...register('riders')}
								/>
							</div>
							<div className={styles.row}>
								<Button variant={'primary'} isAlt>
									Upload
								</Button>
							</div>
						</div>
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
