import React from 'react';
import Logo from 'components/Logo/Logo';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Twitter } from 'assets/twitter.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import styles from './css/Footer.module.scss';

export default function Footer() {
	const copyrightYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className="content-container">
				<div className={styles.left}>
					<Logo extended={false} />
					<p>© {copyrightYear} StageSync. All rights reserved</p>
				</div>
				<div className={styles.right}>
					<div className={styles.socials}>
						<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook/></a>
						<a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter/></a>
						<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Instagram/></a>
					</div>
					<p>Web Design & Development by Martijn Doensen</p>
				</div>
			</div>
		</footer>
	);
}
