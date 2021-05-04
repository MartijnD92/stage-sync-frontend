import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button.js';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ProfilePicture from 'components/ProfilePicture/ProfilePicture.js';
import styles from './css/NavBar.module.scss';

export default function NavBar() {
	const { pathname: location } = useLocation();

	// TODO: variable verwijderen
	const isAuthorized = true;

	return (
		<>
			{location.includes('/search') || location.includes('/artist') ? (
				<div className="content-container">
					<nav className={`${styles.navbar} ${styles.secondary}`}>
						<Logo extended={false} />
						{location.includes('/search') && <SearchBar />}
						<Button type={'secondary'} link={'/login'}>
							Log out
						</Button>
						<ProfilePicture defaultPicture={true} />
					</nav>
				</div>
			) : (
				<nav className={`${styles.navbar} ${styles.primary}`}>
					<div className="content-container">
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
								<Button type={'secondary'} link={'/login'}>
									{isAuthorized ? 'Log in' : 'Log out'}
								</Button>
							)}
							{location.includes('/') && !location.includes('/signup') && (
								<Button type={'primary'} link={'/signup'}>
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
