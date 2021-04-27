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
	console.log(location);

	// TODO: variable verwijderen
	const isAuthorized = true;

	return (
		<>
			{location.includes('/search') || location.includes('/artist') ? (
				<nav className={`${styles.navbar} ${styles['navbar--secondary']}`}>
					<Logo extended={false} />
					{location.includes('/search') && <SearchBar />}
					<Button type={'secondary'} link={'/login'}>
						Log out
					</Button>
					<ProfilePicture defaultPicture={true} />
				</nav>
			) : (
				<nav className={`${styles.navbar} ${styles['navbar--primary']}`}>
					<div className={styles['navbar__left']}>
						<Logo extended={true} />
						<div className={styles['navbar-links']}>
							<NavHashLink
								className={styles['navbar__link']}
								smooth
								to="/#about"
								activeClassName={styles.active}
							>
								About
							</NavHashLink>
							<NavHashLink
								className={styles['navbar__link']}
								smooth
								to="/#contact"
								activeClassName={styles.active}
							>
								Contact
							</NavHashLink>
						</div>
					</div>
					<div className={styles['navbar__right']}>
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
				</nav>
			)}
		</>
	);
}
