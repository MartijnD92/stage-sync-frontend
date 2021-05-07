import styles from './css/SideMenu.module.scss';

export default function SideMenu() {
	return (
		<div className={styles.sidemenu}>
			<button
				className={`${styles['sidemenu__btn']} ${styles['sidemenu__dasbhoard-btn']}`}
			>
				Dashboard
			</button>
			<button
				className={`${styles['sidemenu__btn']} ${styles['sidemenu__profile-btn']}`}
			>
				Profile
			</button>
			<button
				className={`${styles['sidemenu__btn']} ${styles['sidemenu__settings-btn']}`}
			>
				Settings
			</button>
		</div>
	);
}
