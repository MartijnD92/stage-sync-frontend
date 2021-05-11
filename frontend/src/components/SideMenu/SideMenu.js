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
				<NavLink
					exact
					to="/dashboard"
					className={styles.link}
					activeClassName={styles.active}
				>
					<div className={styles.item}>
						<DashboardIcon className={styles.icon} />
						Dashboard
					</div>
				</NavLink>
				<NavLink
					to="/profile"
					className={styles.link}
					activeClassName={styles.active}
				>
					<div className={styles.item}>
						<ProfileIcon className={styles.icon} />
						Profile
					</div>
				</NavLink>
				<NavLink
					to="/dashboard/settings"
					className={styles.link}
					activeClassName={styles.active}
				>
					<div className={styles.item}>
						<SettingsIcon className={styles.icon} />
						Settings
					</div>
				</NavLink>
			</div>
		</nav>
	);
}
