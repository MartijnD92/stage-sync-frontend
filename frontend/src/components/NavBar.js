import React from 'react';

export default function NavBar() {
	const isLoggedIn = true;

	return (
		<nav className="navbar">
			<span className="logo">StageSync</span>
			<button className="auth-btn">{isLoggedIn ? 'Log out' : 'Log in'}</button>
		</nav>
	);
}
