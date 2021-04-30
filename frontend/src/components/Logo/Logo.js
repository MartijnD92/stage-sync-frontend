import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import { ReactComponent as LogoExtended } from 'assets/logo--extended.svg';
import styles from './css/Logo.module.scss';

export default function Logo({ extended }) {
	return (
		<Link to="/">
			{extended ? (
				<div className={`${styles.logo} ${styles.extended}`}>
					<LogoExtended
						alt="StageSync logo"
						className={styles['logo--extended']}
					/>
				</div>
			) : (
				<div className={`${styles.logo} ${styles.small}`}>
					<LogoIcon alt="StageSync logo" className={styles['logo--small']} />
				</div>
			)}
		</Link>
	);
}
