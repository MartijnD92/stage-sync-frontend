import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import AddButton from 'components/AddButton/AddButton';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
import './css/Dashboard.scss';

export default function Dashboard() {
	const [gigResults, setGigResults] = useState(null);
	const [gigDetail, setGigDetail] = useState('');

	useEffect(() => {
		async function getGigs() {
			try {
				const response = await axios.get('http://localhost:3000/gigs/');
				const data = response.data.filter(responseObj => responseObj.artist === gigDetail);
				setGigResults(data);
			} catch (e) {
				console.error(e);
			}
		}
		gigDetail && getGigs();
	}, [gigDetail]);

	return (
		<>
			<SideMenu />

			<main className="content">
				<NavBar>
					<AddButton />
					<SearchBar setGigHandler={setGigDetail} />
				</NavBar>
				<div className="table-container">
					<ResultsList results={gigResults && gigResults} />
				</div>
			</main>
		</>
	);
}


// useEffect(() => {
// 	const filterResult = () => {
// 		const data = results.filter(result => result.artist === artist);
// 		setArtistResults(data);
// 	}
// 	artist && filterResult();
// }, [artist])