import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button.js';
import SearchBar from 'components/SearchBar/SearchBar.js';
import ProfilePicture from 'components/ProfilePicture/ProfilePicture.js';
import './css/NavBar.css';

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
					<ProfilePicture defaultPicture={true}/>
				</nav>
			) : (
				<nav className="navbar navbar--primary">
					<Logo extended={true} />
					<Link to="/#about">About</Link>
					<Link to="/#contact">Contact</Link>

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
				</nav>
			)}
		</>
	);
}
