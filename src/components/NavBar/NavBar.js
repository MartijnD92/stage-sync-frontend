import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button.js';
import ProfilePicture from 'components/ProfilePicture/ProfilePicture.js';
import styles from './css/NavBar.module.scss';

export default function NavBar({ children }) {
	const { pathname: location } = useLocation();
	const { user, logOut } = useContext(AuthContext);

	return (
		<>
			{['/dashboard', '/artist'].includes(location) ? (
				<nav className={`${styles.navbar} ${styles.secondary}`}>
					<div className={styles.left}>{children}</div>
					<div className={styles.right}>
						{user !== null ? (
							<Button variant={'secondary'} url={'/'} onClick={logOut}>
								Log out
							</Button>
						) : (
							<Button variant={'secondary'} url={'/login'}>
								Log in
							</Button>
						)}
						<ProfilePicture className={styles.profile}/>
						
					</div>
				</nav>
			) : (
				<nav className={`${styles.navbar} ${styles.primary}`}>
					<div className="content-container">
						<div className={styles.left}>
							<Logo className={styles.logo} extended/>
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
								<li>
									<NavHashLink
										className={styles.link}
										smooth
										to={user !== null ? '/dashboard' : '/login'}
									>
										Dashboard
									</NavHashLink>
								</li>
							</ul>
						</div>
						<div className={styles.right}>
							{!location.includes('/login') &&
								(user === null ? (
									<Button variant={'secondary'} url={'/login'}>
										Log in
									</Button>
								) : (
									<Button variant={'secondary'} onClick={logOut}>
										Log out
									</Button>
								))}
							{!location.includes('/signup') && (
								<Button
									variant={
										location.includes('/login') ? 'secondary' : 'primary'
									}
									url={'/signup'}
								>
									Sign up
								</Button>
							)}
						</div>
					</div>
				</nav>
			)}
		</>
	);
}
