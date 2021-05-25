import { useState, useContext, useEffect } from 'react';
import { AuthContext } from 'context/AuthContext';
import axios from 'axios';
import DefaultProfile from 'assets/icons/default-profile.jpg';
import styles from './css/ProfilePicture.module.scss';

export default function ProfilePicture({ defaultPicture, className }) {
	const { user } = useContext(AuthContext);
	const [pictureData, setPictureData] = useState('');

	useEffect(() => {
		const getPicture = async () => {
			const response = await axios.get(
				`http://localhost:8080/api/users/user/profilepicture`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			setPictureData(response.data);
		};
		getPicture();
	}, []);

	return (
		<>
			{defaultPicture && (
				<img
					className={`${styles['profile-picture']} ${className}`}
					src={pictureData ? `data:image;base64,${pictureData}` : DefaultProfile}
					alt="default profile"
				/>
			)}
		</>
	);
}
