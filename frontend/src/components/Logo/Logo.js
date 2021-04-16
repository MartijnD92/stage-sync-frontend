import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import {ReactComponent as LogoExtended} from 'assets/logo--extended.svg';
import './css/Logo.scss';

export default function Logo({ extended }) {
	return (
		<Link to="/">
			{extended ? (
				<div className="logo logo--extended">
					<LogoExtended alt="StageSync logo" className="logo__img--extended" />
				</div>
			) : (
				<div className="logo logo--small">
					<LogoIcon alt="StageSync logo" className="logo__img" />
				</div>
			)}
		</Link>
	);
}
