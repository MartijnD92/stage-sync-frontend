import { NavLink } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import { ReactComponent as DashboardIcon } from 'assets/icons/icon-dashboard.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/icon-profile.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/icon-settings.svg';
import styles from './css/SideMenu.module.scss';

export default function SideMenu() {
	return (
		<nav className={styles.sidemenu}>
			<div className={styles.inner}>
				<div className={`${styles.item} ${styles.logo}`}>
					<Logo />
				</div>
				<div className={styles.item}>
					<DashboardIcon className={styles.icon} />

					<NavLink to="/dashboard" className={styles.link} activeClassName={styles.active}>
						Dashboard
					</NavLink>
				</div>
				<div className={styles.item}>
					<ProfileIcon className={styles.icon} />
					<NavLink to="/profile" className={styles.link} activeClassName={styles.active}>
						Profile
					</NavLink>
				</div>
				<div className={styles.item}>
					<SettingsIcon className={styles.icon} />
					<NavLink to="/settings" className={styles.link} activeClassName={styles.active}>
						Settings
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
