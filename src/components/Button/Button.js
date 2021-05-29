import { useHistory } from 'react-router-dom';
import styles from './css/Button.module.scss';

export default function Button({
	variant,
	isAlt,
	children,
	url,
	modifiers,
	...rest
}) {
	const history = useHistory();

	return (
		<button
			className={`${styles.btn} ${styles[variant]} ${isAlt ? styles.alt : ''}`}
			onClick={url && (() => history.push(url))}
			{...rest}
		>
			{children}
		</button>
	);
}
