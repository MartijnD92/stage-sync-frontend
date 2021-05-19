import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import NavBar from 'components/NavBar/NavBar';
import axios from 'axios';

export default function Login() {
	const { handleSubmit, register } = useForm();
	const [error, toggleError] = useState(false);
	const [success, toggleSuccess] = useState(false);
	const { logIn } = useContext(AuthContext);

	async function onFormSubmit(data) {
		toggleError(false);

		try {
			const result = await axios.post(
				'https://localhost:8443/api/auth/signin',
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
		<div className="container">
			<NavBar />
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<fieldset>
					<legend>Log in</legend>
					{success ? (
						<h2>Login successful. You're now being redirected.</h2>
					) : (
						<>
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
							<button className="submit-btn" type="submit">
								Sign in
							</button>
						</>
					)}
					{error && <p>Login failed. Please try again.</p>}
				</fieldset>
			</form>
		</div>
	);
}
