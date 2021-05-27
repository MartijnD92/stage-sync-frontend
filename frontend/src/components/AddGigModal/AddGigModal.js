import { useContext, useState, useEffect } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from 'components/Button/Button';
import Preloader from 'components/Preloader/Preloader';
import Select from 'components/Select/Select';
import styles from './css/AddGigModal.module.scss';

export default function AddGigModal({ modalHandler }) {
	const { register, handleSubmit } = useForm({
		mode: 'onSubmit',
	});
	const history = useHistory();
	const { user } = useContext(AuthContext);
	const [loading, toggleLoading] = useState(false);
	const [artistNames, setArtistNames] = useState([]);

	const saveGig = async (gigDetails) => {
		toggleLoading(true);
		try {
			await axios.post('http://localhost:8080/api/gigs/', gigDetails, {
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

	const getArtistNames = async () => {
		try {
			const response = await axios.get('http://localhost:8080/api/artists', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			});
			setArtistNames(response.data.map((artist) => artist.name));
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		let isMounted = true;
		(async function() {
			if (isMounted) await getArtistNames();
		}());
		return () => {
			isMounted = false;
		}
	}, [user]);

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
					onSubmit={handleSubmit(saveGig)}
					className={styles.form}
					encType="multipart/form-data"
				>
					<h2 className={styles.title}>Add a gig</h2>
					<div className={styles.fields}>
						<div className={styles.row}>
							<label htmlFor="name" className={styles.label}>
								Artist
							</label>
						</div>
						<div className={styles.row}>
							<Select
								options={artistNames}
								register={register}
								name="artistName"
								className={styles.select}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="origin" className={styles.label}>
								Gig name
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="text"
								id="name"
								name="name"
								className={styles.input}
								{...register('name')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="venue" className={styles.label}>
								Venue
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="text"
								id="venue"
								name="venue"
								className={styles.input}
								{...register('venue')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="room" className={styles.label}>
								Room
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="text"
								id="room"
								name="room"
								className={styles.input}
								{...register('room')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="location" className={styles.label}>
								Location
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="text"
								id="location"
								name="location"
								className={styles.input}
								{...register('location')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="date" className={styles.label}>
								Date
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="datetime-local"
								id="date"
								name="date"
								className={styles.input}
								{...register('date')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="fee" className={styles.label}>
								Fee (EUR)
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="number"
								min="1"
								id="fee"
								name="fee"
								className={styles.input}
								{...register('fee')}
							/>
						</div>
						<div className={styles.row}>
							<label htmlFor="ticketsTotal" className={styles.label}>
								Tickets (total number)
							</label>
						</div>
						<div className={styles.row}>
							<input
								type="number"
								min="1"
								id="ticketsTotal"
								name="ticketsTotal"
								className={styles.input}
								{...register('ticketsTotal')}
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
