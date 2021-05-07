import NavBar from 'components/NavBar/NavBar';
import SideMenu from 'components/SideMenu/SideMenu';
import SearchBar from 'components/SearchBar/SearchBar';
import ResultsList from 'components/ResultsList/ResultsList';
import results from 'mockData/mockresults.json';
import './css/Dashboard.scss';

export default function Dashboard() {
	return (
		<div className="wrapper">
			<header>
				<NavBar />
			</header>
			<aside className="sidemenu-container">
				<SideMenu />
			</aside>
			<main>
				<div className="main-container">
					<div className="table-container">
						<ResultsList results={results} />
					</div>
				</div>
			</main>
		</div>
	);
}
