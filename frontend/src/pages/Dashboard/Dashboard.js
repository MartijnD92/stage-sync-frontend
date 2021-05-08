import { useState, useEffect } from 'react';
import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import AddButton from 'components/AddButton/AddButton';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
import results from 'mockData/mockresults.json';
import './css/Dashboard.scss';

export default function Dashboard() {
	const [artistResults, setArtistResults] = useState(null);
	const [artist, setArtist] = useState('');

	useEffect(() => {
		const filterResult = () => {
			const data = results.filter(result => result.artist === artist);
			setArtistResults(data);
		}
		artist && filterResult();
	}, [artist])

	return (
		<>
			<SideMenu />

			<main className="content">
				<NavBar>
					<AddButton />
					<SearchBar setArtistHandler={setArtist}/>
				</NavBar>
				<div className="table-container">
					<ResultsList results={artistResults && artistResults} />
				</div>
			</main>
		</>
	);
}
