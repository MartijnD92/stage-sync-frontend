import styles from './css/Hamburger.module.scss';

export default function Hamburger({ active, onClick }) {
	return (
		<button className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={onClick}>
			<div className={styles.label}>
				<div className={styles.item}>
					<span className={styles.part}></span>
					<span className={styles.part}></span>
					<span className={styles.part}></span>
				</div>
			</div>
		</button>
	);
}
