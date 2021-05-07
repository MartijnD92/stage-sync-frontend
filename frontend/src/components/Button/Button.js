import { Link } from 'react-router-dom';
import styles from './css/Button.module.scss';

export default function Button({ type, isAlt, link, children, ...rest }) {

	return link ? (
		<Link
			className={`${styles.btn} ${styles[type]} ${isAlt ? styles.alt : ''}`}
			to={link}
		>
			{children}
		</Link>
	) : (
		<button
			className={`${styles.btn} ${styles[type]} ${isAlt ? styles.alt : ''}`}
			type="submit"
		>
			{children}
		</button>
	);
}
