import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(true);
	const [userState, setUserState] = useState({
		user: null,
		status: 'pending',
	});

	async function fetchUserData(jwt) {
		if (!jwt) {
			return;
		}
		const decoded = jwt_decode(jwt);
		const userId = decoded.sub;

		try {
			const result = await axios.get(
				`http://localhost:8080/api/users/user/${userId}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				}
			);

			setUserState({
				user: {
					username: result.data.username,
					email: result.data.email,
					id: result.data.id,
				},
				status: 'done',
			});
		} catch (e) {
			console.error(e);
		}
		setIsLoading(false);
	}

	useEffect(() => {
		let mounted = true;
		const token = localStorage.getItem('JWT_token');

		if (token !== null && userState.user === null) {
			if (mounted) {
				fetchUserData(token);
			}
		} else {
			setUserState({
				user: null,
				status: 'done',
			});
		}
		return () => (mounted = false);
	}, []);

	async function logIn(jwt) {
		localStorage.setItem('JWT_token', jwt);
		await fetchUserData(jwt);
		history.push('/dashboard');
	}

	function logOut() {
		localStorage.clear();
		setUserState({
			user: null,
			status: 'done',
		});
		history.push('/');
	}

	const data = {
		...userState,
		logIn,
		logOut,
		isLoading,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
