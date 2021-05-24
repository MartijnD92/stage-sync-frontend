import { useContext, useState } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import Button from 'components/Button/Button';
import styles from './css/AddArtistModal.module.scss';

export default function AddArtistModal({ modalHandler }) {
	const { register, handleSubmit, watch } = useForm({
		mode: 'onSubmit',
	});
	const history = useHistory();
	const { user } = useContext(AuthContext);
	const watchFiles = watch('riders');
	const [fileNames, setFileNames] = useState([]);


	const saveArtist = async (artistDetails) => {
		// await axios.post('http://localhost:8080/api/artists/', artistDetails, {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${user.token}`,
		// 	},
		// });
		console.log(artistDetails);
		modalHandler(false);
		history.push('/dashboard');
	};

	const onFileChange = (files) => {
		for (let file of files) {
			setFileNames(fileNames.push(file.name));
		}
	}

	return (
		<div
			className={styles.overlay}
			onClick={(e) => {
				e.target.className.includes('overlay') && modalHandler(false);
				history.push('/dashboard');
			}}
		>
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
									rows="5"
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
									// accept=".pdf"
									className={styles.fileInput}
									onChange={onFileChange}
									{...register('riders')}
								/>
								<span className={styles.fileInputText}>{fileNames ? `${fileNames[0]}` : 'Choose files'}</span>
							</div>
						</div>
						<div className={styles.row}>
							<Button variant={'primary'} isAlt type="submit">
								Upload
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
