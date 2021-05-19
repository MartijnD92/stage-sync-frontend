import { useState, useEffect } from 'react';
import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import SettingsModal from 'components/SettingsModal/SettingsModal';
import AddButton from 'components/AddButton/AddButton';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
// import Pagination from 'components/Pagination/Pagination';
import getGigs from 'helpers/getGigs';
// import getPaginatedResults from 'helpers/getPaginatedResults';
import './css/Dashboard.scss';

// TODO: Remove when finished styling:
// import gigResults from 'mockData/mockresults.json';

export default function Dashboard() {
	const userPredefinedSettings = JSON.parse(
		localStorage.getItem('userSettings')
	);
	const [settings, setSettings] = useState(
		userPredefinedSettings || {
			ticketStats: true,
			invoiceStatus: false,
			gigType: false,
			room: false,
			transparency: true,
		}
	);

	const [isModalOpen, setIsModalOpen] = useState({
		settings: false,
		artist: false
	}
	);

	const [gigResults, setGigResults] = useState([]);
	// const [paginatedResults, setPaginatedResults] = useState([]);
	const [gigQuery, setGigQuery] = useState('');

	// const resultsLimit = 15;
	// const [pages, setPages] = useState(1);
	// const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		gigQuery && getGigs(setGigResults, gigQuery);
	}, [gigQuery]);

	return (
		<>
			<SideMenu isModalOpen={isModalOpen} modalHandler={setIsModalOpen}/>
			<main className="content">
				<NavBar>
					<AddButton />
					<SearchBar setGigHandler={setGigQuery} />
				</NavBar>
				{gigResults.length !== 0 ? (
					<>
						<div className="table-container">
							<ResultsList results={gigResults} settings={settings} />
						</div>
						{/* <Pagination
							pages={pages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							pageLimit={5}
							resultsLimit={resultsLimit}
						/> */}
					</>
				) : <div className="title-container"><h1 className="no-content">Let's give that search bar a try!</h1></div>}
				{isModalOpen.settings && (
					<SettingsModal settings={settings} settingsHandler={setSettings} modalHandler={setIsModalOpen}/>
				)}
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
