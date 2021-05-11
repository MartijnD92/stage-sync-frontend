import { Link } from 'react-router-dom';
import styles from './css/Button.module.scss';

export default function Button({ variant, isAlt, link, children }) {

	return link ? (
		<Link
			className={`${styles.btn} ${styles[variant]} ${isAlt ? styles.alt : ''}`}
			to={link}
		>
			{children}
		</Link>
	) : (
		<button
			className={`${styles.btn} ${styles[variant]} ${isAlt ? styles.alt : ''}`}
			type="submit"
		>
			{children}
		</button>
	);
}
