import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button.js';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ProfilePicture from 'components/ProfilePicture/ProfilePicture.js';
import './css/NavBar.scss';

export default function NavBar() {
	const { pathname: location } = useLocation();
	console.log(location);

	// TODO: variable verwijderen
	const isAuthorized = true;

	return (
		<>
			{location.includes('/search') || location.includes('/artist') ? (
				<nav className="navbar navbar--secondary">
					<Logo extended={false} />
					{location.includes('/search') && <SearchBar />}
					<Button type={'secondary'} link={'/login'}>
						Log out
					</Button>
					<ProfilePicture defaultPicture={true} />
				</nav>
			) : (
				<nav className="navbar navbar--primary">
					<div className="navbar__left">
						<Logo extended={true} />
						<div className="navbar-links">
							<NavHashLink className="navbar__link" smooth to="/#about" activeClassName="active">
								About
							</NavHashLink>
							<NavHashLink className="navbar__link" smooth to="/#contact" activeClassName="active">
								Contact
							</NavHashLink>
						</div>
					</div>
					<div className="navbar__right">
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
