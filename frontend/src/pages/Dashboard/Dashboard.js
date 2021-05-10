import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import SettingsModal from 'components/SettingsModal/SettingsModal';
import AddButton from 'components/AddButton/AddButton';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
import Pagination from 'components/Pagination/Pagination';
import getPaginatedResults from 'helpers/getPaginatedResults';
import './css/Dashboard.scss';

// TODO: Remove when finished styling:
import results from 'mockData/mockresults.json';

export default function Dashboard({ settingsModal }) {
	const [gigResults, setGigResults] = useState(null);
	const [gigQuery, setGigQuery] = useState('');

	const resultsLimit = 15;
	const [pages] = useState(Math.round(results.length / resultsLimit) || 1);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setGigResults(getPaginatedResults(results, resultsLimit, currentPage));
	}, [currentPage]);

	useEffect(() => {
		async function getGigs() {
			try {
				const response = await axios.get('http://localhost:3000/gigs/');
				const data = response.data.filter(
					(responseObj) => responseObj.artist === gigQuery
				);
				setGigResults(data);
			} catch (e) {
				console.error(e);
			}
		}
		gigQuery && getGigs();
	}, [gigQuery]);

	return (
		<>
			<SideMenu />
			<main className="content">
				<NavBar>
					<AddButton />
					<SearchBar setGigHandler={setGigQuery} />
				</NavBar>
				<div className="table-container">
					{/* <ResultsList results={gigResults && gigResults} /> */}

					{/* TODO: Remove when finished styling: */}
					<ResultsList results={gigResults} />
					<Pagination
						pages={pages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						pageLimit={5}
						resultsLimit={resultsLimit}
					/>
				</div>
				{settingsModal && <SettingsModal />}
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
