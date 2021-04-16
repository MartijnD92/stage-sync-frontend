import React from 'react';
import { Link } from 'react-router-dom';
import './css/Button.css';

export default function Button({ type, link, children }) {
	return (
		<Link className={`btn btn--${type}`} to={link}>
			{children}
		</Link>
	);
}
