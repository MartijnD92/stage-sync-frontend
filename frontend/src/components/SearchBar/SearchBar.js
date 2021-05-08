import {useState} from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/icon-search.svg';
import styles from './css/SearchBar.module.scss';

export default function SearchBar({setArtistHandler}) {
	const [query, setQuery] =useState('');

	function handleClick() {
		setArtistHandler(query);
	}

	function keyPressCheck(e) {
		if (e.key === 'Enter') {
			setArtistHandler(query);
		}
	}

	return (
		<div className={styles.searchbar}>
			<input
				className={styles.input}
				type="text"
				name="search"
				id="search"
				placeholder="Look up an artist, venue or location"
				onChange={e => setQuery(e.target.value)}
				onKeyUp={keyPressCheck}
			/>
			<button className={styles.btn} type="button" onClick={handleClick}>
				<SearchIcon className={styles.icon}/>
			</button>
		</div>
	);
}
