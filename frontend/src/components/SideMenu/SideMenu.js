import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from 'components/Logo/Logo';
import { ReactComponent as DashboardIcon } from 'assets/icons/icon-dashboard.svg';
import { ReactComponent as ProfileIcon } from 'assets/icons/icon-profile.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/icon-settings.svg';
import styles from './css/SideMenu.module.scss';

export default function SideMenu({ isModalOpen, modalHandler }) {
	const { hash } = useLocation();

	const disableModals = () => {
		modalHandler({
			settings: false,
			artist: false,
		});
	};

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
					isActive={() => hash !== '#settings' && hash !== '#profile'}
					onClick={disableModals}
				>
					<div className={styles.item}>
						<DashboardIcon className={styles.icon} />
						Dashboard
					</div>
				</NavLink>
				<NavHashLink
					to="/dashboard#profile"
					className={styles.link}
					onClick={() => modalHandler({ profile: true })}
					isActive={() => hash === '#profile'}
					activeClassName={styles.active}
				>
					<div className={styles.item}>
						<ProfileIcon className={styles.icon} />
						Profile
					</div>
				</NavHashLink>
				<NavHashLink
					exact
					to="/dashboard#settings"
					onClick={() => modalHandler({ settings: true })}
					className={styles.link}
					isActive={() => hash === '#settings'}
					activeClassName={styles.active}
				>
					<div className={styles.item}>
						<SettingsIcon className={styles.icon} />
						Settings
					</div>
				</NavHashLink>
			</div>
		</nav>
	);
}
