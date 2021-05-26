import { useContext, useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import Button from 'components/Button/Button';
import ProfilePicture from 'components/ProfilePicture/ProfilePicture';
import changeProfilePicture from 'helpers/changeProfilePicture';
import getUserDetails from 'helpers/getUserDetails';
import styles from './css/ProfileModal.module.scss';

export default function ProfileModal({ modalHandler }) {
	const history = useHistory();
	const { user } = useContext(AuthContext);
	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		mode: 'onChange',
	});
	const password = useRef({});
	password.current = watch('password', '');

	const saveProfile = (settings) => {
		history.push('/dashboard');
		modalHandler(false);
	};

	useEffect(() => {
		getUserDetails(user, setUserDetails);
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
				<form
					onSubmit={handleSubmit(saveProfile)}
					className={styles.form}
					encType="multipart/form-data"
				>
					<h2 className={styles.title}>Update profile</h2>
					<div className={styles.row}>
						<div className={styles.pictureContainer}>
							<input
								type="file"
								name="profilepic"
								id="profilepic"
								className={styles.pictureInput}
								accept="image/png, image/jpeg"
								{...register('profilepic')}
								onChange={(e) => changeProfilePicture(e.target.files[0], user)}
							/>
							<ProfilePicture className={styles.profilepic} />
						</div>
					</div>
					<div className={styles.row}>
						<label htmlFor="firstName" className={styles.label}>
							First name
							<input
								type="text"
								id="firstName"
								name="firstName"
								defaultValue={userDetails.firstName}
								className={styles.input}
								{...register('firstName', { required: true })}
							/>
						</label>
						<label htmlFor="lastName" className={styles.label}>
							Last name
							<input
								type="text"
								id="lastName"
								name="lastName"
								defaultValue={userDetails.lastName}
								className={styles.input}
								{...register('lastName', { required: true })}
							/>
						</label>
						<label htmlFor="email" className={styles.label}>
							E-mail
							<input
								type="text"
								id="email"
								name="email"
								defaultValue={userDetails.email}
								className={styles.input}
								{...register('email', { required: true })}
							/>
						</label>
					</div>
					<div className={styles.row}>
						<label htmlFor="password" className={styles.label}>
							Password
							<input
								type="password"
								id="password"
								name="password"
								defaultValue="password"
								className={styles.input}
								{...register('password', {
									required: 'You must specify a password',
									minLength: {
										value: 8,
										message: 'Password must have at least 8 characters',
									},
								})}
							/>
							{errors.password && <span className={styles.error}>{errors.password.message}</span>}
						</label>
						<label htmlFor="passwordConfirmation" className={styles.label}>
							Password Confirmation
							<input
								type="password"
								id="passwordConfirmation"
								name="passwordConfirmation"
								className={styles.input}
								{...register('passwordConfirmation', {
									validate: (value) =>
										value === password.current || 'The passwords do not match',
								})}
							/>
						{errors.passwordConfirmation && (
							<span className={styles.error}>{errors.passwordConfirmation.message}</span>
						)}
						</label>
					</div>
					<div className={styles.row}>
						<Button variant={'primary'} isAlt type="submit">
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
