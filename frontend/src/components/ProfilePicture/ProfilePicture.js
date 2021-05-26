import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import getProfilePicture from 'helpers/getProfilePicture';
import DefaultProfile from 'assets/icons/default-profile.jpg';
import styles from './css/ProfilePicture.module.scss';

export default function ProfilePicture({ className }) {
	const { user } = useContext(AuthContext);
	const [profilePic, setProfilePic] = useState(null);

	useEffect(() => {
		getProfilePicture(user, setProfilePic);
	},[profilePic]);

	return (
		<img
			className={`${styles['profile-picture']} ${className}`}
			src={profilePic ? `data:image;base64,${profilePic}` : DefaultProfile}
			alt="default profile"
		/>
	);
}
