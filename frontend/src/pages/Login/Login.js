import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import NavBar from 'components/NavBar/NavBar';
import Button from 'components/Button/Button';
import axios from 'axios';
import styles from './css/Login.module.scss';

export default function Login() {
	const { handleSubmit, register } = useForm();
	const [error, toggleError] = useState(false);
	const [success, toggleSuccess] = useState(false);
	const { logIn } = useContext(AuthContext);

	async function onFormSubmit(data) {
		toggleError(false);

		try {
			const result = await axios.post(
				'http://localhost:8080/api/auth/signin',
				data
			);
			logIn(result.data.accessToken);
			toggleSuccess(true);
		} catch (e) {
			console.error(e);
			toggleError(true);
		}
	}

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
					{success ? (
						<h2>Login successful.</h2>
					) : (
						<>
							<h1>Log in</h1>
							<p>
								New here?{' '}
								<Link to="/login" className={styles.link}>
									Create an account
								</Link>
							</p>
							<div className={styles.fields}>
								<label htmlFor="username">
									Username
									<input
										type="text"
										name="username"
										id="username"
										{...register('username')}
									/>
								</label>
								<label htmlFor="password">
									Password
									<input
										type="password"
										name="password"
										id="password"
										{...register('password')}
									/>
								</label>
								<Link to="/login" className={styles.link}>
									Forgot password?
								</Link>
							</div>
							{error && <p>Login failed. Please try again.</p>}
							<Button variant={'primary'} type="submit">
								Log in
							</Button>
						</>
					)}
				</form>
			</div>
		</>
	);
}
