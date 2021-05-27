import {useState} from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/icon-search.svg';
import styles from './css/SearchBar.module.scss';

export default function SearchBar({setGigHandler}) {
	const [query, setQuery] =useState('');

	function handleClick() {
		setGigHandler({query: query, time: Date.now()});
	}

	function keyPressCheck(e) {
		if (e.key === 'Enter') {
			setGigHandler({query: query, time: Date.now()});
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
				onChange={e => setQuery({...query, query: e.target.value})}
				onKeyUp={keyPressCheck}
			/>
			<button className={styles.btn} type="button" onClick={handleClick}>
				<SearchIcon className={styles.icon}/>
			</button>
		</div>
	);
}
