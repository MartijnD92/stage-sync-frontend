import { useState, useEffect } from 'react';
import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import AddButton from 'components/AddButton/AddButton';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
import results from 'mockData/mockresults.json';
import './css/Dashboard.scss';

export default function Dashboard() {
	const [query, setQuery] = useState('');

	return (
		<>
			<SideMenu />
			<main className="content">
				<NavBar>
					<AddButton />
					<SearchBar />
				</NavBar>
				<div className="table-container">
					<ResultsList results={results} />
				</div>
			</main>
		</>
	);
}
