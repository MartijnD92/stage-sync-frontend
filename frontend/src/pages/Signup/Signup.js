import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import NavBar from 'components/NavBar/NavBar';
import Button from 'components/Button/Button';
import axios from 'axios';
import signupImg from 'assets/signupImg.png';
import styles from './css/Signup.module.scss';

export default function Signup() {
	const { handleSubmit, register } = useForm();
	const [error, toggleError] = useState(false);
	const [success, toggleSuccess] = useState(false);
	const history = useHistory();

	async function onFormSubmit(data) {
		toggleError(false);
		try {
			await axios.post('http://localhost:8080/api/auth/signup', data);
			toggleSuccess(true);
			setTimeout(() => {
				history.push('/login');
			}, 2000);
		} catch (e) {
			console.error(e);
			toggleError(true);
		}
	}

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.left}>
					<img className={styles.img} src={signupImg} alt="tent stage" />
					<blockquote>
						<q>
							Works of art make rules;
							<br />
							rules do not make works of art.
						</q>
						<cite>Claude Debussy</cite>
					</blockquote>
				</div>
				<div className={styles.right}>
					<form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
						{success ? (
							<>
								<h1>Sign up successful!</h1>
								<p>You're now being redirected.</p>
							</>
						) : (
							<>
								<h1>Create account</h1>
								<p>
									Already have an account?{' '}
									<Link to="/login" className={styles.link}>
										Log in
									</Link>
								</p>
								<div className={styles.fields}>
									<label htmlFor="first-name">
										First name
										<input
											type="text"
											name="first-name"
											id="first-name"
											{...register('firstName')}
										/>
									</label>
									<label htmlFor="last-name">
										Last name
										<input
											type="text"
											name="last-name"
											id="last-name"
											{...register('lastName')}
										/>
									</label>
									<label htmlFor="username">
										Username
										<input
											type="text"
											name="username"
											id="username"
											{...register('username')}
										/>
									</label>
									<label htmlFor="email">
										Email
										<input
											type="email"
											name="email"
											id="email"
											{...register('email')}
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
								</div>
								{error && (
									<p className={styles.error}>
										<strong>An error occurred. Please try again.</strong>
									</p>
								)}

								<Button variant={'primary'} type="submit">
									Sign up
								</Button>
								<label htmlFor="terms" className={styles.terms}>
									<input type="checkbox" name="terms" id="terms" />
									<span>
										I have read and agree to the{' '}
										<Link to="/" className={styles.link}>
											Terms of Service
										</Link>
									</span>
								</label>
							</>
						)}
					</form>
				</div>
			</div>
		</>
	);
}
