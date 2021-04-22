import React from 'react';
import { Link } from 'react-router-dom';
import './css/Button.scss';

export default function Button({ type, link, children }) {
	return link ? (
		<Link className={`btn btn--${type}`} to={link}>
			{children}
		</Link>
	) : (
		<button className={`btn btn--${type}`} type="submit">
			{children}
		</button>
	);
}
