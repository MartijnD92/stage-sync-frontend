import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button.js';
import ProfilePicture from 'components/ProfilePicture/ProfilePicture.js';
import styles from './css/NavBar.module.scss';

export default function NavBar({ children }) {
	const { pathname: location } = useLocation();

	// TODO: variable verwijderen
	const isAuthorized = true;

	return (
		<>
			{location !== '/' ? (
				<nav className={`${styles.navbar} ${styles.secondary}`}>
					<div className={styles.left}>{children}</div>
					<div className={styles.right}>
						<Button variant={'secondary'} link={'/login'}>
							Log out
						</Button>
						<ProfilePicture defaultPicture={true} />
					</div>
				</nav>
			) : (
				<nav className={`${styles.navbar} ${styles.primary}`}>
					<div className={styles.left}>
						<Logo className={styles.logo} extended={true} />
						<ul className={styles.links}>
							<li>
								<NavHashLink
									className={styles.link}
									smooth
									to="/#about"
									activeClassName={styles.active}
								>
									About
								</NavHashLink>
							</li>
							<li>
								<NavHashLink
									className={styles.link}
									smooth
									to="/#contact"
									activeClassName={styles.active}
								>
									Contact
								</NavHashLink>
							</li>
						</ul>
					</div>
					<div className={styles.right}>
						{!location.includes('/login') && (
							<Button variant={'secondary'} link={'/login'}>
								{isAuthorized ? 'Log in' : 'Log out'}
							</Button>
						)}
						{location.includes('/') && !location.includes('/signup') && (
							<Button variant={'primary'} link={'/signup'}>
								Sign up
							</Button>
						)}
					</div>
				</nav>
			)}
		</>
	);
}
