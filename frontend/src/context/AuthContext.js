import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Preloader from 'components/Preloader/Preloader';

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
	const history = useHistory();
	const [userState, setUserState] = useState({
		user: null,
		status: 'pending',
	});

	async function fetchUserData(jwt) {
		const decoded = jwt_decode(jwt);
		const userId = decoded.sub;

		try {
			const result = await axios.get(
				`http://localhost:3000/600/users/${userId}`,
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
	}

	useEffect(() => {
		const token = localStorage.getItem('JWT_token');

		if (token !== undefined && userState.user === null) {
			fetchUserData(token)
		} else {
			setUserState({
				user: null,
				status: 'done',
			});
		}
	}, []);

	function logIn(jwt) {
		localStorage.setItem('JWT_token', jwt);
		fetchUserData(jwt);
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
	};

	return (
		<AuthContext.Provider value={data}>
			{userState.status === 'done' ? children : <Preloader/>}
		</AuthContext.Provider>
	);
}
