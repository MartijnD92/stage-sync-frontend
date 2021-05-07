import DefaultProfile from 'assets/default-profile.jpg';
import styles from './css/ProfilePicture.module.scss';

export default function ProfilePicture({ defaultPicture }) {
	return (
		<>{defaultPicture && <img className={styles['profile-picture']} src={DefaultProfile} alt="default profile" />}</>
	);
}
