import { Link } from 'react-router-dom';
import { ReactComponent as LogoSmall } from 'assets/logo.svg';
import { ReactComponent as LogoExtended } from 'assets/logo--extended.svg';
import styles from './css/Logo.module.scss';

export default function Logo({ extended }) {
	return (
		<>
			{extended ? (
				<div className={styles.logo}>
					<Link to="/">
						<LogoExtended
							alt="StageSync logo"
							className={styles['logo--extended']}
						/>
					</Link>
				</div>
			) : (
				<div className={styles.logo}>
					<Link to="/">
						<LogoSmall
							alt="StageSync logo"
							className={styles['logo--small']}
						/>
					</Link>
				</div>
			)}
		</>
	);
}
