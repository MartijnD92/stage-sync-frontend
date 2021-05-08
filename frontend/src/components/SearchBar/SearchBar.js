import { ReactComponent as SearchIcon } from 'assets/icons/icon-search.svg';
import styles from './css/SearchBar.module.scss';

export default function SearchBar() {
	return (
		<div className={styles.searchbar}>
			<input
				className={styles.input}
				type="text"
				name="search"
				id="search"
				placeholder="Look up an artist, venue or location"
			/>
			<button className={styles.btn} type="submit">
				<SearchIcon className={styles.icon}/>
			</button>
		</div>
	);
}
