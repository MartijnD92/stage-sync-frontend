import { useContext, useState } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from 'components/Button/Button';
import Preloader from 'components/Preloader/Preloader';
import styles from './css/AddArtistModal.module.scss';

export default function AddArtistModal({ modalHandler }) {
	const { register, handleSubmit } = useForm({
		mode: 'onSubmit',
	});
	const history = useHistory();
	const { user } = useContext(AuthContext);
	const [loading, toggleLoading] = useState(false);

	const saveArtist = async (artistDetails) => {
		toggleLoading(true);
		try {
			await axios.post('http://localhost:8080/api/artists/', artistDetails, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			});
			modalHandler(false);
			history.push('/dashboard');
		} catch (e) {
			console.error(e);
		}
		toggleLoading(false);
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
				{loading && (
					<div className={styles.loadingOverlay}>
						<Preloader />
					</div>
				)}
				<form
					onSubmit={handleSubmit(saveArtist)}
					className={styles.form}
					encType="multipart/form-data"
				>
					<h2 className={styles.title}>Add an artist</h2>
					<div className={styles.fields}>
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
							<input
								type="text"
								id="genre"
								name="genre"
								className={styles.input}
								{...register('genre')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="sound-engineer" className={styles.label}>
								Sound engineer?
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="checkbox"
								id="sound-engineer"
								name="sound-engineer"
								className={styles.checkbox}
								{...register('sound-engineer')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="price" className={styles.label}>
								Price (EUR)
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="number"
								min="1"
								id="price"
								name="price"
								className={styles.input}
								{...register('price')}
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
								rows="3"
								{...register('bio')}
								className={styles.textarea}
							/>
						</div>
					</div>
					<div className={styles.row}>
						<Button variant={'primary'} isAlt type="submit">
							Create
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
