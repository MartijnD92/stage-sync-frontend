import DefaultProfile from 'assets/icons/default-profile.jpg';
import styles from './css/ProfilePicture.module.scss';

export default function ProfilePicture({ defaultPicture, className }) {
	return (
		<>{defaultPicture && <img className={`${styles['profile-picture']} ${className}`} src={DefaultProfile} alt="default profile" />}</>
	);
}
