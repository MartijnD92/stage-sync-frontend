import { useContext, useState, useEffect } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { v4 as uuidv4 } from 'uuid';
import Button from 'components/Button/Button';
import styles from './css/AddArtistModal.module.scss';

export default function AddArtistModal({ modalHandler }) {
	const { register, handleSubmit, watch } = useForm({
		mode: 'onSubmit',
	});
	const history = useHistory();
	const { user } = useContext(AuthContext);
	const [UUID, setUUID] = useState('');
	const [uploadLoading, toggleUploadLoading] = useState(false);
	const watchFiles = watch('riders');
	console.log(UUID);

	const saveArtist = async (artistDetails) => {
		artistDetails.uuid = UUID;
		console.log(artistDetails);
		// try {
		// 	await axios.post('http://localhost:8080/api/artists/', artistDetails, {
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${user.token}`,
		// 		},
		// 	});
		// 	modalHandler(false);
		// 	history.push('/dashboard');
		// } catch (e) {
		// 	console.error(e);
		// }
	};

	const onFileSubmit = async (files) => {
		console.log(files)
		toggleUploadLoading(true);
		try {
			// const formData = new FormData();
			// Array.from(files).map((file) => {
			// 	formData.append('rider', file);
			// 	formData.append('UUID', UUID);
			// 	return formData;
			// });
			// console.log('test', formData)
			console.log('test2');

			// await axios.post('http://localhost:8080/api/artists/riders', formData, {
			// 	headers: { 'content-type': 'multipart/form-data' },
			// });
		} catch (e) {
			console.error(e);
		}
		toggleUploadLoading(false);
	};

	useEffect(() => {
		setUUID(uuidv4());
	}, []);

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
				<h2 className={styles.title}>Add an artist</h2>
				<div className={styles.container}>
					<form onSubmit={handleSubmit(saveArtist)} className={styles.form}>
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
								<CreatableSelect
									isMulti
									id="genre"
									name="genre"
									className={styles.select}
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
							<Button variant={'secondary'} isAlt type="submit">
								Create
							</Button>
						</div>
					</form>
					<form
						onSubmit={handleSubmit(onFileSubmit)}
						className={`${styles.form} ${styles.uploadForm}`}
						encType="multipart/form-data"
					>
						<div className={styles.row}>
							<label htmlFor="name" className={styles.label}>
								Riders (max. 2)
							</label>
						</div>
						<div className={styles.row}>
							<div className={styles.files}>
								<input
									type="file"
									id="riders"
									name="riders"
									multiple
									// accept=".pdf"
									className={styles.fileInput}
									{...register('riders')}
								/>
								<div className={styles.fileInputText}>
									{!watchFiles || watchFiles.length === 0 ? (
										<p>Choose files</p>
									) : (
										Array.from(watchFiles).map((f) => (
											<p key={f.name}>{f.name}</p>
										))
									)}
								</div>
							</div>
						</div>
						<div className={styles.row}>
							<Button variant={'primary'} isAlt type="submit">
								{uploadLoading ? 'Loading' : 'Upload'}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
